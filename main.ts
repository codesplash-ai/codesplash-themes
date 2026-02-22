import { Plugin } from "obsidian";
import { ThemeService } from "./src/services/ThemeService";
import { StyleService } from "./src/services/StyleService";
import { WindowService, VibrancyType, VIBRANCY_OPTIONS } from "./src/services/WindowService";
import { ThemeSwitcherSettingTab } from "./src/settings";
import { Theme, ThemeMode } from "./src/models/Theme";
import iconSvg from "./assets/palette.svg";

interface WindowSettings {
	alwaysOnTop: boolean;
	opacity: number;
	vibrancy: VibrancyType;
}

interface ThemeSwitcherSettings {
	themes: Theme[];
	activeThemeId: string | null;
	windowSettings: WindowSettings;
}

const DEFAULT_SETTINGS: ThemeSwitcherSettings = {
	themes: [],
	activeThemeId: null,
	windowSettings: {
		alwaysOnTop: false,
		opacity: 1.0,
		vibrancy: "default",
	},
};

export default class ThemeSwitcherPlugin extends Plugin {
	settings: ThemeSwitcherSettings;
	themeService: ThemeService;
	styleService: StyleService;
	windowService: WindowService;
	private themeChangeObserver: MutationObserver | null = null;
	private statusBarItem: HTMLElement | null = null;

	async onload() {
		await this.loadSettings();

		// Initialize services
		this.themeService = new ThemeService(this.settings.themes);
		this.styleService = new StyleService(this.app, this.manifest.dir || "");
		this.windowService = new WindowService();

		// Keep Obsidian's base light/dark mode in sync with the active theme on startup.
		const initialTheme = this.getActiveTheme();
		if (initialTheme?.mode) {
			await this.switchObsidianMode(initialTheme.mode);
		}

		// Always apply base styles, with or without a color theme
		await this.applyCurrentTheme(initialTheme?.mode);

		// Apply window settings (desktop only)
		if (this.windowService.isDesktop()) {
			this.applyWindowSettings();
			this.setupStatusBar();
			this.registerWindowCommands();
		}

		// Watch for Obsidian theme mode changes (light/dark)
		this.setupThemeModeObserver();

		// Add settings tab
		this.addSettingTab(new ThemeSwitcherSettingTab(this.app, this));

		// Add theme commands
		this.addCommand({
			id: "cycle-theme-next",
			name: "Next theme",
			callback: () => this.cycleTheme(1),
		});

		this.addCommand({
			id: "cycle-theme-previous",
			name: "Previous theme",
			callback: () => this.cycleTheme(-1),
		});

		this.addCommand({
			id: "toggle-theme",
			name: "Toggle theme on/off",
			callback: () => this.toggleTheme(),
		});

		this.addCommand({
			id: "reload-css",
			name: "Reload CSS from disk",
			callback: async () => {
				this.styleService.clearCache();
				await this.applyCurrentTheme();
			},
		});

	}

	/**
	 * Apply the current theme (or just base styles if no theme selected)
	 */
	private async applyCurrentTheme(modeOverride?: ThemeMode) {
		if (this.settings.activeThemeId) {
			const activeTheme = this.themeService.getTheme(this.settings.activeThemeId);
			if (activeTheme) {
				await this.styleService.applyTheme(activeTheme, modeOverride);
			} else {
				// Theme not found, apply base styles only
				await this.styleService.applyBaseStyles();
			}
		} else {
			// No theme selected, apply base styles only
			await this.styleService.applyBaseStyles();
		}
	}

	/**
	 * Switch Obsidian between light and dark mode
	 */
	private getCurrentMode(): ThemeMode {
		if (document.body.classList.contains("theme-dark")) {
			return "dark";
		}
		if (document.body.classList.contains("theme-light")) {
			return "light";
		}
		return this.app.isDarkMode() ? "dark" : "light";
	}

	/**
	 * Execute an Obsidian command by id, while handling command id differences across versions.
	 */
	private async executeObsidianCommand(commandId: string): Promise<boolean> {
		// @ts-ignore - commands manager exists at runtime but is not in public types
		const commands = (this.app as any).commands;
		if (!commands?.executeCommandById) {
			return false;
		}

		// If the registry is available and command is missing, skip execution.
		const registry = commands.commands as Record<string, unknown> | undefined;
		if (registry && !registry[commandId]) {
			return false;
		}

		try {
			const result = commands.executeCommandById(commandId);
			if (result instanceof Promise) {
				const resolved = await result;
				return resolved !== false;
			}
			return result !== false;
		} catch {
			return false;
		}
	}

	/**
	 * Wait for Obsidian to actually apply the requested light/dark mode.
	 */
	private async waitForModeChange(targetMode: ThemeMode, timeoutMs = 2000): Promise<boolean> {
		if (this.getCurrentMode() === targetMode) {
			return true;
		}

		const deadline = Date.now() + timeoutMs;

		return new Promise(resolve => {
			const poll = () => {
				if (this.getCurrentMode() === targetMode) {
					resolve(true);
					return;
				}

				if (Date.now() >= deadline) {
					resolve(false);
					return;
				}

				window.setTimeout(poll, 25);
			};

			poll();
		});
	}

	/**
	 * Try Obsidian's internal setTheme API when command ids are unavailable.
	 */
	private async trySetThemeApi(targetMode: ThemeMode): Promise<boolean> {
		const appAny = this.app as any;
		const setTheme = appAny?.setTheme;
		if (typeof setTheme !== "function") {
			return false;
		}

		const candidates = targetMode === "dark"
			? ["obsidian", "dark"]
			: ["moonstone", "light"];

		for (const candidate of candidates) {
			try {
				const result = setTheme.call(appAny, candidate);
				if (result instanceof Promise) {
					await result;
				}
			} catch {
				continue;
			}

			if (await this.waitForModeChange(targetMode, 800)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Try internal config setters to persist/apply base mode for older/newer internals.
	 */
	private async trySetVaultConfigMode(targetMode: ThemeMode): Promise<boolean> {
		const appAny = this.app as any;
		const vault = appAny?.vault;
		const setConfig = vault?.setConfig;
		if (typeof setConfig !== "function") {
			return false;
		}

		const configAttempts = targetMode === "dark"
			? [
				["theme", "obsidian"],
				["baseTheme", "dark"],
			]
			: [
				["theme", "moonstone"],
				["baseTheme", "light"],
			];

		for (const [key, value] of configAttempts) {
			try {
				const result = setConfig.call(vault, key, value);
				if (result instanceof Promise) {
					await result;
				}
				appAny?.workspace?.trigger?.("css-change");
			} catch {
				continue;
			}

			if (await this.waitForModeChange(targetMode, 800)) {
				return true;
			}
		}

		return false;
	}

	/**
	 * Last-resort mode switch by flipping body classes.
	 */
	private forceModeBodyClasses(targetMode: ThemeMode): boolean {
		const body = document.body;
		if (!body) {
			return false;
		}

		body.classList.toggle("theme-dark", targetMode === "dark");
		body.classList.toggle("theme-light", targetMode === "light");

		const appAny = this.app as any;
		appAny?.workspace?.trigger?.("css-change");

		return body.classList.contains(targetMode === "dark" ? "theme-dark" : "theme-light");
	}

	/**
	 * Switch Obsidian between light and dark mode.
	 * Supports both old (theme:use-*) and new (theme:toggle-light-dark) command ids.
	 */
	private async switchObsidianMode(targetMode: ThemeMode): Promise<boolean> {
		if (this.getCurrentMode() === targetMode) {
			return true;
		}

		const explicitCommand = targetMode === "dark" ? "theme:use-dark" : "theme:use-light";
		const usedExplicitCommand = await this.executeObsidianCommand(explicitCommand);
		if (usedExplicitCommand && (await this.waitForModeChange(targetMode))) {
			return true;
		}

		const usedToggleCommand = await this.executeObsidianCommand("theme:toggle-light-dark");
		if (usedToggleCommand && (await this.waitForModeChange(targetMode))) {
			return true;
		}

		if (await this.trySetThemeApi(targetMode)) {
			return true;
		}

		if (await this.trySetVaultConfigMode(targetMode)) {
			return true;
		}

		if (this.forceModeBodyClasses(targetMode) && (await this.waitForModeChange(targetMode, 250))) {
			return true;
		}

		return this.getCurrentMode() === targetMode || this.forceModeBodyClasses(targetMode);
	}

	/**
	 * Setup observer to watch for light/dark mode changes
	 */
	private setupThemeModeObserver() {
		this.themeChangeObserver = new MutationObserver(() => {
			void this.applyCurrentTheme();
		});
		this.themeChangeObserver.observe(document.body, {
			attributes: true,
			attributeFilter: ['class']
		});
	}

	onunload() {
		// Remove applied styles when plugin is disabled
		this.styleService.removeTheme();

		// Reset window settings to defaults (desktop only)
		if (this.windowService.isDesktop()) {
			this.windowService.resetToDefaults();
		}

		// Disconnect theme mode observer
		if (this.themeChangeObserver) {
			this.themeChangeObserver.disconnect();
			this.themeChangeObserver = null;
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		// Update themes from service before saving
		this.settings.themes = this.themeService.toJSON();
		await this.saveData(this.settings);
	}

	/**
	 * Set the active theme
	 */
	async setActiveTheme(themeId: string | null) {
		this.settings.activeThemeId = themeId;
		const theme = themeId ? this.themeService.getTheme(themeId) : undefined;

		// Switch Obsidian mode based on theme's mode setting
		if (theme?.mode) {
			await this.switchObsidianMode(theme.mode);
			await this.applyCurrentTheme(theme.mode);
		} else {
			await this.applyCurrentTheme();
		}

		await this.saveSettings();
	}

	/**
	 * Cycle through themes
	 */
	cycleTheme(direction: 1 | -1) {
		const themes = this.themeService.getAllThemes();
		if (themes.length === 0) {
			return;
		}

		let currentIndex = -1;
		if (this.settings.activeThemeId) {
			currentIndex = themes.findIndex(t => t.id === this.settings.activeThemeId);
		}

		// Calculate next index
		let nextIndex = currentIndex + direction;
		if (nextIndex >= themes.length) {
			nextIndex = 0;
		} else if (nextIndex < 0) {
			nextIndex = themes.length - 1;
		}

		const nextTheme = themes[nextIndex];
		void this.setActiveTheme(nextTheme.id);
	}

	/**
	 * Toggle theme on/off
	 */
	toggleTheme() {
		if (this.styleService.isThemeApplied()) {
			this.styleService.removeTheme();
		} else if (this.settings.activeThemeId) {
			const theme = this.themeService.getTheme(this.settings.activeThemeId);
			if (theme) {
				this.styleService.applyTheme(theme);
			}
		}
	}

	/**
	 * Get the currently active theme
	 */
	getActiveTheme(): Theme | undefined {
		if (this.settings.activeThemeId) {
			return this.themeService.getTheme(this.settings.activeThemeId);
		}
		return undefined;
	}

	/**
	 * Apply window settings from saved preferences
	 */
	applyWindowSettings() {
		const { alwaysOnTop, opacity, vibrancy } = this.settings.windowSettings;
		this.windowService.setAlwaysOnTop(alwaysOnTop);
		this.windowService.setOpacity(opacity);
		this.windowService.setVibrancy(vibrancy);
	}

	/**
	 * Setup status bar menu with window controls (desktop only)
	 */
	setupStatusBar() {
		this.statusBarItem = this.addStatusBarItem();
		this.statusBarItem.addClass("theme-statusbar-button");

		// Add window icon
		const icon = this.statusBarItem.createEl("span", {
			cls: "theme-statusbar-icon",
		});
		try {
			const parser = new DOMParser();
			const svgDoc = parser.parseFromString(iconSvg, "image/svg+xml");
			const svgEl = svgDoc.documentElement;
			if (svgEl && svgEl.nodeName === "svg") {
				icon.appendChild(icon.doc.importNode(svgEl, true));
			} else {
				icon.setText("\u{1FA9F}");
			}
		} catch {
			icon.setText("\u{1FA9F}");
		}

		// Create popup menu (hidden by default via CSS)
		const menu = this.statusBarItem.createDiv({ cls: "theme-statusbar-menu" });

		// Always on top toggle
		const alwaysOnTopContainer = menu.createDiv({ cls: "theme-menu-item" });
		alwaysOnTopContainer.createSpan({ text: "Always on top" });
		const alwaysOnTopToggle = alwaysOnTopContainer.createEl("input", {
			type: "checkbox",
		});
		alwaysOnTopToggle.checked = this.settings.windowSettings.alwaysOnTop;
		alwaysOnTopToggle.addEventListener("change", async () => {
			this.settings.windowSettings.alwaysOnTop = alwaysOnTopToggle.checked;
			this.windowService.setAlwaysOnTop(alwaysOnTopToggle.checked);
			await this.saveSettings();
		});

		// Opacity slider with tooltip
		const opacityContainer = menu.createDiv({ cls: "theme-menu-item theme-menu-slider" });
		opacityContainer.createSpan({ text: "Opacity" });
		const opacitySlider = opacityContainer.createEl("input", {
			type: "range",
			cls: "slider",
			attr: {
				min: "50",
				max: "100",
				value: String(this.settings.windowSettings.opacity * 100),
			},
		});

		// Create tooltip element
		const opacityTooltip = opacityContainer.createDiv({ cls: "slider-tooltip" });
		opacityTooltip.setText(`${Math.round(this.settings.windowSettings.opacity * 100)}`);

		// Show tooltip on hover and update on drag
		opacitySlider.addEventListener("mouseenter", () => {
			opacityTooltip.addClass("is-active");
		});
		opacitySlider.addEventListener("mouseleave", () => {
			opacityTooltip.removeClass("is-active");
		});
		opacitySlider.addEventListener("input", async () => {
			const opacity = parseInt(opacitySlider.value) / 100;
			opacityTooltip.setText(opacitySlider.value);
			// Update tooltip position
			const percent = (parseInt(opacitySlider.value) - 50) / 50;
			opacityTooltip.style.left = `calc(${percent * 100}% - 12px)`;
			this.settings.windowSettings.opacity = opacity;
			this.windowService.setOpacity(opacity);
			await this.saveSettings();
		});
		// Initialize tooltip position
		const initialPercent = (this.settings.windowSettings.opacity * 100 - 50) / 50;
		opacityTooltip.style.left = `calc(${initialPercent * 100}% - 12px)`;

		// Vibrancy dropdown (macOS only)
		if (this.windowService.isMacOS()) {
			const vibrancyContainer = menu.createDiv({ cls: "theme-menu-item theme-menu-dropdown" });
			vibrancyContainer.createSpan({ text: "Vibrancy" });
			const vibrancyDropdown = vibrancyContainer.createEl("select");

			VIBRANCY_OPTIONS.forEach((option: string) => {
				vibrancyDropdown.createEl("option", {
					value: option,
					text: option
				});
			});
			vibrancyDropdown.value = this.settings.windowSettings.vibrancy;

			vibrancyDropdown.addEventListener("change", async () => {
				this.settings.windowSettings.vibrancy = vibrancyDropdown.value as any;
				this.windowService.setVibrancy(vibrancyDropdown.value as any);
				await this.saveSettings();
			});
		}

		// Active theme dropdown
		const themeContainer = menu.createDiv({ cls: "theme-menu-item theme-menu-dropdown" });
		themeContainer.createSpan({ text: "Theme" });
		const themeDropdown = themeContainer.createEl("select");

		// Populate theme options
		const updateThemeDropdown = () => {
			themeDropdown.empty();
			themeDropdown.createEl("option", { value: "", text: "None" });
			const themes = this.themeService.getAllThemes();
			const sortedThemes = themes.sort((a, b) => a.name.localeCompare(b.name));
			sortedThemes.forEach(theme => {
				themeDropdown.createEl("option", {
					value: theme.id,
					text: theme.name
				});
			});
			themeDropdown.value = this.settings.activeThemeId || "";
		};
		updateThemeDropdown();

		themeDropdown.addEventListener("change", async () => {
			await this.setActiveTheme(themeDropdown.value || null);
		});

		// Toggle menu visibility on click
		icon.addEventListener("click", (e) => {
			e.stopPropagation();
			const isVisible = menu.hasClass("is-active");
			menu.toggleClass("is-active", !isVisible);
			if (!isVisible) {
				// Refresh theme dropdown when opening menu
				updateThemeDropdown();
			}
		});

		// Prevent menu from closing when clicking inside it
		menu.addEventListener("click", (e) => {
			e.stopPropagation();
		});

		// Close menu when clicking outside
		this.registerDomEvent(document, "click", () => {
			menu.removeClass("is-active");
		});
	}

	/**
	 * Register keyboard commands for window features (desktop only)
	 */
	registerWindowCommands() {
		// Toggle always on top
		this.addCommand({
			id: "toggle-always-on-top",
			name: "Toggle always on top",
			callback: async () => {
				this.settings.windowSettings.alwaysOnTop = !this.settings.windowSettings.alwaysOnTop;
				this.windowService.setAlwaysOnTop(this.settings.windowSettings.alwaysOnTop);
				await this.saveSettings();
			},
		});

		// Increase opacity
		this.addCommand({
			id: "increase-opacity",
			name: "Increase window opacity",
			callback: async () => {
				const newOpacity = this.windowService.increaseOpacity(
					this.settings.windowSettings.opacity
				);
				this.settings.windowSettings.opacity = newOpacity;
				await this.saveSettings();
			},
		});

		// Decrease opacity
		this.addCommand({
			id: "decrease-opacity",
			name: "Decrease window opacity",
			callback: async () => {
				const newOpacity = this.windowService.decreaseOpacity(
					this.settings.windowSettings.opacity
				);
				this.settings.windowSettings.opacity = newOpacity;
				await this.saveSettings();
			},
		});
	}
}
