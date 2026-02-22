import { Theme } from "../Theme";

/**
 * Catppuccin Frappé theme - dark mode (muted)
 * Official palette from catppuccin.com/palette
 */
export const CATPPUCCIN_FRAPPE_THEME: Theme = {
	id: "catppuccin-frappe",
	name: "Catppuccin Frappé",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"ctp-rosewater": "#f2d5cf",
		"ctp-flamingo": "#eebebe",
		"ctp-pink": "#f4b8e4",
		"ctp-mauve": "#ca9ee6",
		"ctp-red": "#e78284",
		"ctp-maroon": "#ea999c",
		"ctp-peach": "#ef9f76",
		"ctp-yellow": "#e5c890",
		"ctp-green": "#a6d189",
		"ctp-teal": "#81c8be",
		"ctp-sky": "#99d1db",
		"ctp-sapphire": "#85c1dc",
		"ctp-blue": "#8caaee",
		"ctp-lavender": "#babbf1",
		"ctp-text": "#c6d0f5",
		"ctp-subtext1": "#b5bfe2",
		"ctp-subtext0": "#a5adce",
		"ctp-overlay2": "#949cbb",
		"ctp-overlay1": "#838ba7",
		"ctp-overlay0": "#737994",
		"ctp-surface2": "#626880",
		"ctp-surface1": "#51576d",
		"ctp-surface0": "#414559",
		"ctp-base": "#303446",
		"ctp-mantle": "#292c3c",
		"ctp-crust": "#232634",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--ctp-base)",
		"BACKGROUND-SECONDARY": "var(--ctp-mantle)",
		"BACKGROUND-HIGHTLIGHT": "var(--ctp-surface1)",
		"BACKGROUND-CURRENT-LINE": "var(--ctp-surface0)",

		"TEXT": "var(--ctp-text)",
		"TITLE": "var(--ctp-sky)",
		"ACCENT": "var(--ctp-blue)",
		"ACTION": "var(--ctp-pink)",
		"LIST": "var(--ctp-sapphire)",
		"HEADER": "var(--ctp-lavender)",
		"CARET": "var(--ctp-rosewater)",
		"LINK": "var(--ctp-blue)",

		"BOLD": "var(--ctp-peach)",
		"ITALICS": "var(--ctp-maroon)",
		"HIGHLIGHT": "var(--ctp-yellow)",
		"STRIKETHROUGH": "var(--ctp-sapphire)",
		"LINE_BREAK": "var(--ctp-mauve)",
		"TAGS": "var(--ctp-teal)",

		"HEADER-1": "var(--ctp-mauve)",
		"HEADER-2": "var(--ctp-red)",
		"HEADER-3": "var(--ctp-peach)",
		"HEADER-4": "var(--ctp-green)",
		"HEADER-5": "var(--ctp-sapphire)",
		"HEADER-6": "var(--ctp-lavender)",
	},
};
