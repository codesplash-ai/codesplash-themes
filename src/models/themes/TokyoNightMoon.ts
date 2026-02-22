import { Theme } from "../Theme";

/**
 * Tokyo Night Moon theme - dark mode (vibrant)
 * Official palette from github.com/folke/tokyonight.nvim
 */
export const TOKYO_NIGHT_MOON_THEME: Theme = {
	id: "tokyo-night-moon",
	name: "Tokyo Night Moon",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"tn-bg": "#222436",
		"tn-bg-dark": "#1e2030",
		"tn-bg-highlight": "#2f334d",
		"tn-fg": "#c8d3f5",
		"tn-fg-dark": "#828bb8",
		"tn-comment": "#636da6",
		"tn-blue": "#82aaff",
		"tn-blue0": "#3e68d7",
		"tn-cyan": "#86e1fc",
		"tn-green": "#c3e88d",
		"tn-green1": "#4fd6be",
		"tn-magenta": "#c099ff",
		"tn-orange": "#ff966c",
		"tn-purple": "#fca7ea",
		"tn-red": "#ff757f",
		"tn-red1": "#c53b53",
		"tn-teal": "#4fd6be",
		"tn-yellow": "#ffc777",
		"tn-terminal-black": "#444a73",
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
