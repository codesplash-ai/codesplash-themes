import { Platform } from "obsidian";

/**
 * Vibrancy options available on macOS
 */
export type VibrancyType =
	| "default"
	| "content"
	| "fullscreen-ui"
	| "header"
	| "hud"
	| "menu"
	| "popover"
	| "selection"
	| "sheet"
	| "sidebar"
	| "titlebar"
	| "tooltip"
	| "under-page"
	| "under-window"
	| "window";

export const VIBRANCY_OPTIONS: VibrancyType[] = [
	"default",
	"content",
	"fullscreen-ui",
	"header",
	"hud",
	"menu",
	"popover",
	"selection",
	"sheet",
	"sidebar",
	"titlebar",
	"tooltip",
	"under-page",
	"under-window",
	"window",
];

/**
 * Service for managing Electron window properties
 * Gracefully handles mobile/unsupported platforms
 */
export class WindowService {
	/**
	 * Check if platform supports Electron window features
	 */
	isDesktop(): boolean {
		return Platform.isDesktop;
	}

	/**
	 * Check if platform is macOS
	 */
	isMacOS(): boolean {
		return Platform.isMacOS;
	}

	/**
	 * Get Electron window instance (desktop only)
	 */
	private getCurrentWindow(): any {
		if (!this.isDesktop()) {
			return null;
		}

		try {
			return (window as any).require("electron").remote.getCurrentWindow();
		} catch {
			//("Failed to get Electron window:", error);
			return null;
		}
	}

	/**
	 * Set window to always stay on top of other windows
	 * @param enabled - Whether to enable always on top
	 */
	setAlwaysOnTop(enabled: boolean): void {
		const win = this.getCurrentWindow();
		if (!win) return;

		try {
			win.setAlwaysOnTop(enabled);
		} catch {
			//("Failed to set always on top:", error);
		}
	}

	/**
	 * Set window opacity
	 * @param opacity - Opacity value between 0.5 and 1.0
	 */
	setOpacity(opacity: number): void {
		const win = this.getCurrentWindow();
		if (!win) return;

		// Clamp opacity between 0.5 and 1.0
		const clampedOpacity = Math.max(0.5, Math.min(1.0, opacity));

		try {
			win.setOpacity(clampedOpacity);
		} catch {
			//("Failed to set opacity:", error);
		}
	}

	/**
	 * Set window vibrancy effect (macOS only)
	 * @param vibrancy - Vibrancy type or "default" to disable
	 */
	setVibrancy(vibrancy: VibrancyType): void {
		if (!this.isMacOS()) {
			return;
		}

		const win = this.getCurrentWindow();
		if (!win) return;

		try {
			if (vibrancy === "default") {
				// Disable vibrancy
				win.setVibrancy(null);
				document.body.removeClass("is-translucent");
			} else {
				// Enable vibrancy with specified type
				win.setVibrancy(vibrancy);
				document.body.addClass("is-translucent");
			}
		} catch {
			//("Failed to set vibrancy:", error);
		}
	}

	/**
	 * Increase opacity by a given amount
	 * @param amount - Amount to increase (default: 0.05)
	 * @param currentOpacity - Current opacity value
	 * @returns New opacity value
	 */
	increaseOpacity(currentOpacity: number, amount: number = 0.05): number {
		const newOpacity = Math.min(1.0, currentOpacity + amount);
		this.setOpacity(newOpacity);
		return newOpacity;
	}

	/**
	 * Decrease opacity by a given amount
	 * @param amount - Amount to decrease (default: 0.05)
	 * @param currentOpacity - Current opacity value
	 * @returns New opacity value
	 */
	decreaseOpacity(currentOpacity: number, amount: number = 0.05): number {
		const newOpacity = Math.max(0.5, currentOpacity - amount);
		this.setOpacity(newOpacity);
		return newOpacity;
	}

	/**
	 * Reset all window settings to defaults
	 */
	resetToDefaults(): void {
		this.setAlwaysOnTop(false);
		this.setOpacity(1.0);
		this.setVibrancy("default");
	}
}
