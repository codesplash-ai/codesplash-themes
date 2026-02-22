import { Theme } from "../Theme";

/**
 * Gruvbox Dark theme (medium contrast)
 * Official palette from github.com/morhetz/gruvbox
 */
export const GRUVBOX_DARK_THEME: Theme = {
	id: "gruvbox-dark",
	name: "Gruvbox Dark",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"grv-bg": "#282828",
		"grv-bg-dark": "#1d2021",
		"grv-bg-highlight": "#3c3836",
		"grv-bg-selection": "#504945",
		"grv-fg": "#ebdbb2",
		"grv-fg-dark": "#a89984",
		"grv-gray": "#928374",
		"grv-red": "#fb4934",
		"grv-green": "#b8bb26",
		"grv-yellow": "#fabd2f",
		"grv-blue": "#83a598",
		"grv-purple": "#d3869b",
		"grv-aqua": "#8ec07c",
		"grv-orange": "#fe8019",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--grv-bg)",
		"BACKGROUND-SECONDARY": "var(--grv-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--grv-bg-selection)",
		"BACKGROUND-CURRENT-LINE": "var(--grv-bg-highlight)",

		"TEXT": "var(--grv-fg)",
		"TITLE": "var(--grv-aqua)",
		"ACCENT": "var(--grv-blue)",
		"ACTION": "var(--grv-purple)",
		"LIST": "var(--grv-green)",
		"HEADER": "var(--grv-red)",
		"CARET": "var(--grv-orange)",
		"LINK": "var(--grv-aqua)",

		"BOLD": "var(--grv-orange)",
		"ITALICS": "var(--grv-red)",
		"HIGHLIGHT": "var(--grv-yellow)",
		"STRIKETHROUGH": "var(--grv-aqua)",
		"LINE_BREAK": "var(--grv-purple)",
		"TAGS": "var(--grv-green)",

		"HEADER-1": "var(--grv-purple)",
		"HEADER-2": "var(--grv-blue)",
		"HEADER-3": "var(--grv-aqua)",
		"HEADER-4": "var(--grv-green)",
		"HEADER-5": "var(--grv-orange)",
		"HEADER-6": "var(--grv-red)",
	},
};
