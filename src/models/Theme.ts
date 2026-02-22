/**
 * Theme mode indicating optimal display context
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Represents a single color theme with palette and semantic assignments
 */
export interface Theme {
	id: string;
	name: string;
	description?: string;
	mode?: ThemeMode;
	colors: ColorPalette;
	assignments: ColorAssignments;
	isBuiltin: boolean;
}

/**
 * Map of color variable names to hex color values
 * Example: { "kiro-purple": "#b080ff", "kiro-turquoise": "#80f4ff" }
 */
export interface ColorPalette {
	[colorName: string]: string;
}

/**
 * Map of semantic variable names to color variable references
 * Example: { "ACCENT": "var(--kiro-turquoise)", "ACTION": "var(--kiro-pink)" }
 */
export interface ColorAssignments {
	// Background Colors
	"BACKGROUND-PRIMARY"?: string;
	"BACKGROUND-SECONDARY"?: string;
	"BACKGROUND-HIGHTLIGHT"?: string;
	"BACKGROUND-CURRENT-LINE"?: string;

	// UI Elements
	"TEXT"?: string;
	"TITLE"?: string;
	"ACCENT"?: string;
	"ACTION"?: string;
	"LIST"?: string;
	"HEADER"?: string;
	"CARET"?: string;
	"LINK"?: string;

	// Text Formatting
	"BOLD"?: string;
	"ITALICS"?: string;
	"HIGHLIGHT"?: string;
	"STRIKETHROUGH"?: string;
	"LINE_BREAK"?: string;
	"TAGS"?: string;

	// Headers
	"HEADER-1"?: string;
	"HEADER-2"?: string;
	"HEADER-3"?: string;
	"HEADER-4"?: string;
	"HEADER-5"?: string;
	"HEADER-6"?: string;
}

/**
 * All available semantic variable names that can be assigned colors
 */
export const SEMANTIC_VARIABLES: (keyof ColorAssignments)[] = [
	// Background Colors
	"BACKGROUND-PRIMARY",
	"BACKGROUND-SECONDARY",
	"BACKGROUND-HIGHTLIGHT",
	"BACKGROUND-CURRENT-LINE",

	// UI Elements
	"TEXT",
	"TITLE",
	"ACCENT",
	"ACTION",
	"LIST",
	"HEADER",
	"CARET",
	"LINK",

	// Text Formatting
	"BOLD",
	"ITALICS",
	"HIGHLIGHT",
	"STRIKETHROUGH",
	"LINE_BREAK",
	"TAGS",

	// Headers
	"HEADER-1",
	"HEADER-2",
	"HEADER-3",
	"HEADER-4",
	"HEADER-5",
	"HEADER-6",
];

/**
 * Creates a new empty theme
 */
export function createEmptyTheme(id: string, name: string): Theme {
	return {
		id,
		name,
		colors: {},
		assignments: {},
		isBuiltin: false,
	};
}

/**
 * Validates that a theme has all required properties
 */
export function validateTheme(theme: any): theme is Theme {
	return (
		typeof theme === "object" &&
		typeof theme.id === "string" &&
		typeof theme.name === "string" &&
		typeof theme.colors === "object" &&
		typeof theme.assignments === "object" &&
		typeof theme.isBuiltin === "boolean"
	);
}
