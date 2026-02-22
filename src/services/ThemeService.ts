import { Theme, createEmptyTheme, validateTheme } from "../models/Theme";
import { DEFAULT_THEMES } from "../models/DefaultThemes";

/**
 * Service for managing theme CRUD operations
 */
export class ThemeService {
	private themes: Map<string, Theme>;

	constructor(themes?: Theme[]) {
		this.themes = new Map();

		// Initialize with default themes
		DEFAULT_THEMES.forEach(theme => {
			this.themes.set(theme.id, theme);
		});

		// Add any provided themes
		if (themes) {
			themes.forEach(theme => {
				if (!theme.isBuiltin) {
					this.themes.set(theme.id, theme);
				}
			});
		}

		// Sync default themes to ensure they have latest variables
		this.syncDefaultThemes();
	}

	/**
	 * Sync default themes to add any new assignments that were added to code
	 * This ensures saved themes get new semantic variables when they're added
	 */
	private syncDefaultThemes(): void {
		DEFAULT_THEMES.forEach(defaultTheme => {
			const savedTheme = this.themes.get(defaultTheme.id);

			// Only sync if this is a default theme
			if (savedTheme && savedTheme.isBuiltin === false) {
				// Check if the saved theme is missing any assignments from the default
				let needsUpdate = false;
				const updatedAssignments: Record<string, string> = { ...savedTheme.assignments };

				// Add any missing assignments from the default theme
				for (const [key, value] of Object.entries(defaultTheme.assignments)) {
					if (!(key in updatedAssignments) && value) {
						updatedAssignments[key] = value;
						needsUpdate = true;
					}
				}

				// Sync mode property if missing (default to dark if not set)
				if (!savedTheme.mode) {
					needsUpdate = true;
				}

				// Update the theme if new assignments were added
				if (needsUpdate) {
					this.themes.set(defaultTheme.id, {
						...savedTheme,
						mode: savedTheme.mode || defaultTheme.mode || 'dark',
						assignments: updatedAssignments
					});
				}
			}
		});
	}

	/**
	 * Get all themes
	 */
	getAllThemes(): Theme[] {
		return Array.from(this.themes.values());
	}

	/**
	 * Get a theme by ID
	 */
	getTheme(id: string): Theme | undefined {
		return this.themes.get(id);
	}

	/**
	 * Create a new theme
	 */
	createTheme(name: string): Theme {
		const id = this.generateId(name);
		const theme = createEmptyTheme(id, name);
		this.themes.set(id, theme);
		return theme;
	}

	/**
	 * Update an existing theme
	 */
	updateTheme(id: string, updates: Partial<Theme>): Theme | undefined {
		const theme = this.themes.get(id);
		if (!theme) {
			return undefined;
		}

		const updatedTheme = { ...theme, ...updates };
		this.themes.set(id, updatedTheme);
		return updatedTheme;
	}

	/**
	 * Delete a theme
	 */
	deleteTheme(id: string): boolean {
		const theme = this.themes.get(id);
		if (!theme) {
			return false;
		}

		return this.themes.delete(id);
	}

	/**
	 * Duplicate a theme
	 */
	duplicateTheme(id: string, newName?: string): Theme | undefined {
		const original = this.themes.get(id);
		if (!original) {
			return undefined;
		}

		const name = newName || `${original.name} (Copy)`;
		const newId = this.generateId(name);
		const duplicate: Theme = {
			...original,
			id: newId,
			name,
			isBuiltin: false,
			mode: original.mode,
			colors: { ...original.colors },
			assignments: { ...original.assignments },
		};

		this.themes.set(newId, duplicate);
		return duplicate;
	}

	/**
	 * Import a theme from JSON
	 */
	importTheme(themeData: any): Theme | undefined {
		if (!validateTheme(themeData)) {
			throw new Error("Invalid theme data");
		}

		// Generate new ID to avoid conflicts
		const id = this.generateId(themeData.name);
		const theme: Theme = {
			...themeData,
			id,
			isBuiltin: false,
		};

		this.themes.set(id, theme);
		return theme;
	}

	/**
	 * Export a theme to JSON
	 */
	exportTheme(id: string): string | undefined {
		const theme = this.themes.get(id);
		if (!theme) {
			return undefined;
		}

		return JSON.stringify(theme, null, 2);
	}

	/**
	 * Get all user-created (non-builtin) themes
	 */
	getUserThemes(): Theme[] {
		return this.getAllThemes().filter(theme => !theme.isBuiltin);
	}

	/**
	 * Generate a unique ID from a name
	 */
	private generateId(name: string): string {
		let baseId = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
		let id = baseId;
		let counter = 1;

		while (this.themes.has(id)) {
			id = `${baseId}-${counter}`;
			counter++;
		}

		return id;
	}

	/**
	 * Serialize themes for storage
	 */
	toJSON(): Theme[] {
		// Serialize all themes
		return this.getAllThemes();
	}
}
