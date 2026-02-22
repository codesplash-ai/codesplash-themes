import { Theme } from "../Theme";

/**
 * One Dark Pro theme
 * Official palette from github.com/Binaryify/OneDark-Pro
 */
export const ONE_DARK_PRO_THEME: Theme = {
	id: "one-dark-pro",
	name: "One Dark Pro",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"odp-bg": "#282c34",
		"odp-bg-dark": "#21252b",
		"odp-bg-highlight": "#2c313c",
		"odp-selection": "#67769660",
		"odp-fg": "#abb2bf",
		"odp-fg-dark": "#5c6370",
		"odp-comment": "#5c6370",
		"odp-red": "#e06c75",
		"odp-green": "#98c379",
		"odp-yellow": "#e5c07b",
		"odp-blue": "#61afef",
		"odp-cyan": "#56b6c2",
		"odp-purple": "#c678dd",
		"odp-orange": "#d19a66",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--odp-bg)",
		"BACKGROUND-SECONDARY": "var(--odp-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--odp-selection)",
		"BACKGROUND-CURRENT-LINE": "var(--odp-bg-highlight)",

		"TEXT": "var(--odp-fg)",
		"TITLE": "var(--odp-green)",
		"ACCENT": "var(--odp-cyan)",
		"ACTION": "var(--odp-purple)",
		"LIST": "var(--odp-blue)",
		"HEADER": "var(--odp-red)",
		"CARET": "var(--odp-cyan)",
		"LINK": "var(--odp-cyan)",

		"BOLD": "var(--odp-orange)",
		"ITALICS": "var(--odp-red)",
		"HIGHLIGHT": "var(--odp-yellow)",
		"STRIKETHROUGH": "var(--odp-cyan)",
		"LINE_BREAK": "var(--odp-purple)",
		"TAGS": "var(--odp-green)",

		"HEADER-1": "var(--odp-purple)",
		"HEADER-2": "var(--odp-blue)",
		"HEADER-3": "var(--odp-cyan)",
		"HEADER-4": "var(--odp-green)",
		"HEADER-5": "var(--odp-orange)",
		"HEADER-6": "var(--odp-red)",
	},
};
