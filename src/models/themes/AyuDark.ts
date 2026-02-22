import { Theme } from "../Theme";

/**
 * Ayu Dark theme
 * Official palette from github.com/ayu-theme/ayu-colors
 */
export const AYU_DARK_THEME: Theme = {
	id: "ayu-dark",
	name: "Ayu Dark",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"ayu-bg": "#0f1419",
		"ayu-bg-dark": "#0d1017",
		"ayu-bg-highlight": "#191f26",
		"ayu-selection": "#273747",
		"ayu-fg": "#bfbdb6",
		"ayu-fg-dark": "#5c6773",
		"ayu-comment": "#5c6773",
		"ayu-red": "#f07178",
		"ayu-orange": "#ff8f40",
		"ayu-yellow": "#ffb454",
		"ayu-green": "#aad94c",
		"ayu-cyan": "#95e6cb",
		"ayu-blue": "#59c2ff",
		"ayu-purple": "#d2a6ff",
		"ayu-accent": "#e6b450",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--ayu-bg)",
		"BACKGROUND-SECONDARY": "var(--ayu-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--ayu-selection)",
		"BACKGROUND-CURRENT-LINE": "var(--ayu-bg-highlight)",

		"TEXT": "var(--ayu-fg)",
		"TITLE": "var(--ayu-cyan)",
		"ACCENT": "var(--ayu-blue)",
		"ACTION": "var(--ayu-purple)",
		"LIST": "var(--ayu-green)",
		"HEADER": "var(--ayu-red)",
		"CARET": "var(--ayu-accent)",
		"LINK": "var(--ayu-cyan)",

		"BOLD": "var(--ayu-orange)",
		"ITALICS": "var(--ayu-red)",
		"HIGHLIGHT": "var(--ayu-yellow)",
		"STRIKETHROUGH": "var(--ayu-cyan)",
		"LINE_BREAK": "var(--ayu-purple)",
		"TAGS": "var(--ayu-green)",

		"HEADER-1": "var(--ayu-purple)",
		"HEADER-2": "var(--ayu-blue)",
		"HEADER-3": "var(--ayu-cyan)",
		"HEADER-4": "var(--ayu-green)",
		"HEADER-5": "var(--ayu-orange)",
		"HEADER-6": "var(--ayu-yellow)",
	},
};
