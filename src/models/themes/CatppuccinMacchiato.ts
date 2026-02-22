import { Theme } from "../Theme";

/**
 * Catppuccin Macchiato theme - dark mode (medium contrast)
 * Official palette from catppuccin.com/palette
 */
export const CATPPUCCIN_MACCHIATO_THEME: Theme = {
	id: "catppuccin-macchiato",
	name: "Catppuccin Macchiato",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"ctp-rosewater": "#f4dbd6",
		"ctp-flamingo": "#f0c6c6",
		"ctp-pink": "#f5bde6",
		"ctp-mauve": "#c6a0f6",
		"ctp-red": "#ed8796",
		"ctp-maroon": "#ee99a0",
		"ctp-peach": "#f5a97f",
		"ctp-yellow": "#eed49f",
		"ctp-green": "#a6da95",
		"ctp-teal": "#8bd5ca",
		"ctp-sky": "#91d7e3",
		"ctp-sapphire": "#7dc4e4",
		"ctp-blue": "#8aadf4",
		"ctp-lavender": "#b7bdf8",
		"ctp-text": "#cad3f5",
		"ctp-subtext1": "#b8c0e0",
		"ctp-subtext0": "#a5adcb",
		"ctp-overlay2": "#939ab7",
		"ctp-overlay1": "#8087a2",
		"ctp-overlay0": "#6e738d",
		"ctp-surface2": "#5b6078",
		"ctp-surface1": "#494d64",
		"ctp-surface0": "#363a4f",
		"ctp-base": "#24273a",
		"ctp-mantle": "#1e2030",
		"ctp-crust": "#181926",
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
