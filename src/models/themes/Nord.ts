import { Theme } from "../Theme";

/**
 * Nord theme
 * Official palette from nordtheme.com
 */
export const NORD_THEME: Theme = {
	id: "nord",
	name: "Nord",
	mode: "dark",
	isBuiltin: false,
	colors: {
		// Polar Night (backgrounds)
		"nord-bg": "#2e3440",
		"nord-bg-dark": "#3b4252",
		"nord-bg-highlight": "#434c5e",
		"nord-comment": "#4c566a",
		// Snow Storm (text)
		"nord-fg": "#d8dee9",
		"nord-fg-bright": "#e5e9f0",
		"nord-fg-brightest": "#eceff4",
		// Frost (accents)
		"nord-teal": "#8fbcbb",
		"nord-cyan": "#88c0d0",
		"nord-blue": "#81a1c1",
		"nord-blue-dark": "#5e81ac",
		// Aurora (colors)
		"nord-red": "#bf616a",
		"nord-orange": "#d08770",
		"nord-yellow": "#ebcb8b",
		"nord-green": "#a3be8c",
		"nord-purple": "#b48ead",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--nord-bg)",
		"BACKGROUND-SECONDARY": "var(--nord-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--nord-bg-highlight)",
		"BACKGROUND-CURRENT-LINE": "var(--nord-bg-highlight)",

		"TEXT": "var(--nord-fg)",
		"TITLE": "var(--nord-cyan)",
		"ACCENT": "var(--nord-blue)",
		"ACTION": "var(--nord-purple)",
		"LIST": "var(--nord-green)",
		"HEADER": "var(--nord-red)",
		"CARET": "var(--nord-cyan)",
		"LINK": "var(--nord-teal)",

		"BOLD": "var(--nord-orange)",
		"ITALICS": "var(--nord-red)",
		"HIGHLIGHT": "var(--nord-yellow)",
		"STRIKETHROUGH": "var(--nord-teal)",
		"LINE_BREAK": "var(--nord-purple)",
		"TAGS": "var(--nord-cyan)",

		"HEADER-1": "var(--nord-purple)",
		"HEADER-2": "var(--nord-blue)",
		"HEADER-3": "var(--nord-cyan)",
		"HEADER-4": "var(--nord-green)",
		"HEADER-5": "var(--nord-orange)",
		"HEADER-6": "var(--nord-red)",
	},
};
