import { Theme } from "../Theme";

/**
 * Catppuccin Latte theme - light mode
 * Official palette from catppuccin.com/palette
 */
export const CATPPUCCIN_LATTE_THEME: Theme = {
	id: "catppuccin-latte",
	name: "Catppuccin Latte",
	mode: "light",
	isBuiltin: false,
	colors: {
		"ctp-rosewater": "#dc8a78",
		"ctp-flamingo": "#dd7878",
		"ctp-pink": "#ea76cb",
		"ctp-mauve": "#8839ef",
		"ctp-red": "#d20f39",
		"ctp-maroon": "#e64553",
		"ctp-peach": "#fe640b",
		"ctp-yellow": "#df8e1d",
		"ctp-green": "#40a02b",
		"ctp-teal": "#179299",
		"ctp-sky": "#04a5e5",
		"ctp-sapphire": "#209fb5",
		"ctp-blue": "#1e66f5",
		"ctp-lavender": "#7287fd",
		"ctp-text": "#4c4f69",
		"ctp-subtext1": "#5c5f77",
		"ctp-subtext0": "#6c6f85",
		"ctp-overlay2": "#7c7f93",
		"ctp-overlay1": "#8c8fa1",
		"ctp-overlay0": "#9ca0b0",
		"ctp-surface2": "#acb0be",
		"ctp-surface1": "#bcc0cc",
		"ctp-surface0": "#ccd0da",
		"ctp-base": "#eff1f5",
		"ctp-mantle": "#e6e9ef",
		"ctp-crust": "#dce0e8",
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
