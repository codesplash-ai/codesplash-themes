import { Theme } from "../Theme";

/**
 * Tokyo Night theme - dark mode (darkest)
 * Official palette from github.com/folke/tokyonight.nvim
 */
export const TOKYO_NIGHT_THEME: Theme = {
	id: "tokyo-night",
	name: "Tokyo Night",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"tn-bg": "#1a1b26",
		"tn-bg-dark": "#16161e",
		"tn-bg-highlight": "#292e42",
		"tn-fg": "#c0caf5",
		"tn-fg-dark": "#a9b1d6",
		"tn-comment": "#565f89",
		"tn-blue": "#7aa2f7",
		"tn-blue0": "#3d59a1",
		"tn-cyan": "#7dcfff",
		"tn-green": "#9ece6a",
		"tn-green1": "#73daca",
		"tn-magenta": "#bb9af7",
		"tn-orange": "#ff9e64",
		"tn-purple": "#9d7cd8",
		"tn-red": "#f7768e",
		"tn-red1": "#db4b4b",
		"tn-teal": "#1abc9c",
		"tn-yellow": "#e0af68",
		"tn-terminal-black": "#414868",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--tn-bg)",
		"BACKGROUND-SECONDARY": "var(--tn-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--tn-bg-highlight)",
		"BACKGROUND-CURRENT-LINE": "var(--tn-bg-highlight)",

		"TEXT": "var(--tn-fg)",
		"TITLE": "var(--tn-cyan)",
		"ACCENT": "var(--tn-blue)",
		"ACTION": "var(--tn-magenta)",
		"LIST": "var(--tn-green1)",
		"HEADER": "var(--tn-purple)",
		"CARET": "var(--tn-blue)",
		"LINK": "var(--tn-cyan)",

		"BOLD": "var(--tn-orange)",
		"ITALICS": "var(--tn-red)",
		"HIGHLIGHT": "var(--tn-yellow)",
		"STRIKETHROUGH": "var(--tn-teal)",
		"LINE_BREAK": "var(--tn-purple)",
		"TAGS": "var(--tn-green1)",

		"HEADER-1": "var(--tn-magenta)",
		"HEADER-2": "var(--tn-blue)",
		"HEADER-3": "var(--tn-cyan)",
		"HEADER-4": "var(--tn-green)",
		"HEADER-5": "var(--tn-orange)",
		"HEADER-6": "var(--tn-yellow)",
	},
};
