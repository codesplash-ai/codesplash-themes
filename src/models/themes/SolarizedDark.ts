import { Theme } from "../Theme";

/**
 * Solarized Dark theme
 * Official palette from ethanschoonover.com/solarized
 */
export const SOLARIZED_DARK_THEME: Theme = {
	id: "solarized-dark",
	name: "Solarized Dark",
	mode: "dark",
	isBuiltin: false,
	colors: {
		// Base colors
		"sol-base03": "#002b36",
		"sol-base02": "#073642",
		"sol-base01": "#586e75",
		"sol-base00": "#657b83",
		"sol-base0": "#839496",
		"sol-base1": "#93a1a1",
		// Accents
		"sol-yellow": "#b58900",
		"sol-orange": "#cb4b16",
		"sol-red": "#dc322f",
		"sol-magenta": "#d33682",
		"sol-violet": "#6c71c4",
		"sol-blue": "#268bd2",
		"sol-cyan": "#2aa198",
		"sol-green": "#859900",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--sol-base03)",
		"BACKGROUND-SECONDARY": "var(--sol-base02)",
		"BACKGROUND-HIGHTLIGHT": "var(--sol-base02)",
		"BACKGROUND-CURRENT-LINE": "var(--sol-base02)",

		"TEXT": "var(--sol-base0)",
		"TITLE": "var(--sol-cyan)",
		"ACCENT": "var(--sol-blue)",
		"ACTION": "var(--sol-violet)",
		"LIST": "var(--sol-green)",
		"HEADER": "var(--sol-magenta)",
		"CARET": "var(--sol-blue)",
		"LINK": "var(--sol-cyan)",

		"BOLD": "var(--sol-orange)",
		"ITALICS": "var(--sol-magenta)",
		"HIGHLIGHT": "var(--sol-yellow)",
		"STRIKETHROUGH": "var(--sol-cyan)",
		"LINE_BREAK": "var(--sol-violet)",
		"TAGS": "var(--sol-green)",

		"HEADER-1": "var(--sol-magenta)",
		"HEADER-2": "var(--sol-violet)",
		"HEADER-3": "var(--sol-blue)",
		"HEADER-4": "var(--sol-cyan)",
		"HEADER-5": "var(--sol-green)",
		"HEADER-6": "var(--sol-yellow)",
	},
};
