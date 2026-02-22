import { Theme } from "../Theme";

/**
 * Catppuccin Mocha theme - dark mode (original, darkest)
 * Official palette from catppuccin.com/palette
 */
export const CATPPUCCIN_MOCHA_THEME: Theme = {
	id: "catppuccin-mocha",
	name: "Catppuccin Mocha",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"ctp-rosewater": "#f5e0dc",
		"ctp-flamingo": "#f2cdcd",
		"ctp-pink": "#f5c2e7",
		"ctp-mauve": "#cba6f7",
		"ctp-red": "#f38ba8",
		"ctp-maroon": "#eba0ac",
		"ctp-peach": "#fab387",
		"ctp-yellow": "#f9e2af",
		"ctp-green": "#a6e3a1",
		"ctp-teal": "#94e2d5",
		"ctp-sky": "#89dceb",
		"ctp-sapphire": "#74c7ec",
		"ctp-blue": "#89b4fa",
		"ctp-lavender": "#b4befe",
		"ctp-text": "#cdd6f4",
		"ctp-subtext1": "#bac2de",
		"ctp-subtext0": "#a6adc8",
		"ctp-overlay2": "#9399b2",
		"ctp-overlay1": "#7f849c",
		"ctp-overlay0": "#6c7086",
		"ctp-surface2": "#585b70",
		"ctp-surface1": "#45475a",
		"ctp-surface0": "#313244",
		"ctp-base": "#1e1e2e",
		"ctp-mantle": "#181825",
		"ctp-crust": "#11111b",
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
