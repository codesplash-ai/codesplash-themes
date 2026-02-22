import { Theme } from "../Theme";

/**
 * Rosé Pine theme
 * Official palette from rosepinetheme.com
 */
export const ROSE_PINE_THEME: Theme = {
	id: "rose-pine",
	name: "Rosé Pine",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"rp-base": "#191724",
		"rp-surface": "#1f1d2e",
		"rp-overlay": "#26233a",
		"rp-highlight-low": "#21202e",
		"rp-highlight-med": "#403d52",
		"rp-highlight-high": "#524f67",
		"rp-muted": "#6e6a86",
		"rp-subtle": "#908caa",
		"rp-text": "#e0def4",
		"rp-love": "#eb6f92",
		"rp-gold": "#f6c177",
		"rp-rose": "#ebbcba",
		"rp-pine": "#31748f",
		"rp-foam": "#9ccfd8",
		"rp-iris": "#c4a7e7",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--rp-base)",
		"BACKGROUND-SECONDARY": "var(--rp-surface)",
		"BACKGROUND-HIGHTLIGHT": "var(--rp-highlight-med)",
		"BACKGROUND-CURRENT-LINE": "var(--rp-highlight-low)",

		"TEXT": "var(--rp-text)",
		"TITLE": "var(--rp-foam)",
		"ACCENT": "var(--rp-iris)",
		"ACTION": "var(--rp-love)",
		"LIST": "var(--rp-pine)",
		"HEADER": "var(--rp-iris)",
		"CARET": "var(--rp-rose)",
		"LINK": "var(--rp-foam)",

		"BOLD": "var(--rp-gold)",
		"ITALICS": "var(--rp-rose)",
		"HIGHLIGHT": "var(--rp-gold)",
		"STRIKETHROUGH": "var(--rp-foam)",
		"LINE_BREAK": "var(--rp-iris)",
		"TAGS": "var(--rp-pine)",

		"HEADER-1": "var(--rp-love)",
		"HEADER-2": "var(--rp-iris)",
		"HEADER-3": "var(--rp-foam)",
		"HEADER-4": "var(--rp-pine)",
		"HEADER-5": "var(--rp-gold)",
		"HEADER-6": "var(--rp-rose)",
	},
};
