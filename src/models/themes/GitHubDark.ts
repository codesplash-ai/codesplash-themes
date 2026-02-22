import { Theme } from "../Theme";

/**
 * GitHub Dark theme
 * Official palette from Primer design system
 */
export const GITHUB_DARK_THEME: Theme = {
	id: "github-dark",
	name: "GitHub Dark",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"ghd-bg": "#0d1117",
		"ghd-bg-dark": "#010409",
		"ghd-bg-highlight": "#161b22",
		"ghd-selection": "#3b5070",
		"ghd-fg": "#c9d1d9",
		"ghd-fg-dark": "#8b949e",
		"ghd-comment": "#8b949e",
		"ghd-red": "#ff7b72",
		"ghd-orange": "#ffa657",
		"ghd-yellow": "#e3b341",
		"ghd-green": "#7ee787",
		"ghd-cyan": "#a5d6ff",
		"ghd-blue": "#79c0ff",
		"ghd-purple": "#d2a8ff",
		"ghd-pink": "#ff9bce",
		"ghd-accent": "#58a6ff",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--ghd-bg)",
		"BACKGROUND-SECONDARY": "var(--ghd-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--ghd-selection)",
		"BACKGROUND-CURRENT-LINE": "var(--ghd-bg-highlight)",

		"TEXT": "var(--ghd-fg)",
		"TITLE": "var(--ghd-accent)",
		"ACCENT": "var(--ghd-blue)",
		"ACTION": "var(--ghd-purple)",
		"LIST": "var(--ghd-green)",
		"HEADER": "var(--ghd-pink)",
		"CARET": "var(--ghd-accent)",
		"LINK": "var(--ghd-accent)",

		"BOLD": "var(--ghd-orange)",
		"ITALICS": "var(--ghd-pink)",
		"HIGHLIGHT": "var(--ghd-yellow)",
		"STRIKETHROUGH": "var(--ghd-cyan)",
		"LINE_BREAK": "var(--ghd-purple)",
		"TAGS": "var(--ghd-green)",

		"HEADER-1": "var(--ghd-purple)",
		"HEADER-2": "var(--ghd-blue)",
		"HEADER-3": "var(--ghd-cyan)",
		"HEADER-4": "var(--ghd-green)",
		"HEADER-5": "var(--ghd-orange)",
		"HEADER-6": "var(--ghd-yellow)",
	},
};
