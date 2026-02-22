import { Theme } from "../Theme";

/**
 * Monokai Pro theme
 * Official palette from monokai.pro
 */
export const MONOKAI_PRO_THEME: Theme = {
	id: "monokai-pro",
	name: "Monokai Pro",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"mkp-bg": "#2d2a2e",
		"mkp-bg-dark": "#221f22",
		"mkp-bg-highlight": "#403e41",
		"mkp-fg": "#fcfcfa",
		"mkp-fg-dimmed": "#939293",
		"mkp-comment": "#727072",
		"mkp-red": "#ff6188",
		"mkp-orange": "#fc9867",
		"mkp-yellow": "#ffd866",
		"mkp-green": "#a9dc76",
		"mkp-cyan": "#78dce8",
		"mkp-purple": "#ab9df2",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--mkp-bg)",
		"BACKGROUND-SECONDARY": "var(--mkp-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--mkp-bg-highlight)",
		"BACKGROUND-CURRENT-LINE": "var(--mkp-bg-highlight)",

		"TEXT": "var(--mkp-fg)",
		"TITLE": "var(--mkp-cyan)",
		"ACCENT": "var(--mkp-cyan)",
		"ACTION": "var(--mkp-purple)",
		"LIST": "var(--mkp-green)",
		"HEADER": "var(--mkp-red)",
		"CARET": "var(--mkp-yellow)",
		"LINK": "var(--mkp-cyan)",

		"BOLD": "var(--mkp-orange)",
		"ITALICS": "var(--mkp-red)",
		"HIGHLIGHT": "var(--mkp-yellow)",
		"STRIKETHROUGH": "var(--mkp-cyan)",
		"LINE_BREAK": "var(--mkp-purple)",
		"TAGS": "var(--mkp-green)",

		"HEADER-1": "var(--mkp-red)",
		"HEADER-2": "var(--mkp-purple)",
		"HEADER-3": "var(--mkp-cyan)",
		"HEADER-4": "var(--mkp-green)",
		"HEADER-5": "var(--mkp-orange)",
		"HEADER-6": "var(--mkp-yellow)",
	},
};
