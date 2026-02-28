import { Theme, ThemeMode } from "../models/Theme";

/**
 * Service for managing theme CSS via custom properties on document.body.
 *
 * Static CSS rules live in styles.css (auto-loaded by Obsidian) and are
 * gated behind the `body.codesplash-active` class.  This service toggles
 * that class and sets/removes CSS custom properties for palette colours
 * and semantic assignments.
 */
export class StyleService {
	private trackedProperties: string[] = [];
	private themeActive = false;

	/**
	 * Apply a theme by setting CSS custom properties on document.body
	 * and activating the codesplash-active gate class.
	 */
	applyTheme(theme: Theme, _modeOverride?: ThemeMode): void {
		// Clear any previously tracked properties first
		this.clearTrackedProperties();

		// Activate static CSS rules in styles.css
		document.body.classList.add("codesplash-active");
		this.themeActive = true;

		// Layer 1: palette colours  e.g. --kiro-purple: #b080ff
		for (const [colorName, colorValue] of Object.entries(theme.colors)) {
			this.setProperty(`--${colorName}`, colorValue);
		}

		// Layer 2: semantic assignments  e.g. --BACKGROUND-PRIMARY: var(--kiro-purple)
		for (const [varName, varValue] of Object.entries(theme.assignments) as [string, string | undefined][]) {
			if (varValue) {
				this.setProperty(`--${varName}`, varValue);
			}
		}
	}

	/**
	 * Apply only base styles without any colour theme.
	 * No-op: styles.css is auto-loaded by Obsidian and window controls
	 * styles are always available without the codesplash-active gate.
	 */
	applyBaseStyles(): void {
		// intentionally empty
	}

	/**
	 * Remove all applied theme styles
	 */
	removeTheme(): void {
		document.body.classList.remove("codesplash-active");
		this.themeActive = false;
		this.clearTrackedProperties();
	}

	/**
	 * Check if a theme is currently applied
	 */
	isThemeApplied(): boolean {
		return this.themeActive;
	}

	private setProperty(name: string, value: string): void {
		document.body.style.setProperty(name, value);
		this.trackedProperties.push(name);
	}

	private clearTrackedProperties(): void {
		for (const prop of this.trackedProperties) {
			document.body.style.removeProperty(prop);
		}
		this.trackedProperties = [];
	}
}
