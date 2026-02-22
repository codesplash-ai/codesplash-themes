import { Theme } from "../Theme";

/**
 * Night Owl theme
 * Official palette from github.com/sdras/night-owl-vscode-theme
 */
export const NIGHT_OWL_THEME: Theme = {
	id: "night-owl",
	name: "Night Owl",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"no-bg": "#011627",
		"no-bg-dark": "#010e1a",
		"no-bg-highlight": "#0b2942",
		"no-selection": "#5f7e9790",
		"no-fg": "#d6deeb",
		"no-fg-dark": "#7fdbca",
		"no-comment": "#637777",
		"no-red": "#ef5350",
		"no-green": "#addb67",
		"no-yellow": "#ecc48d",
		"no-blue": "#82aaff",
		"no-cyan": "#7fdbca",
		"no-purple": "#c792ea",
		"no-orange": "#f78c6c",
		"no-accent": "#7e57c2",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--no-bg)",
		"BACKGROUND-SECONDARY": "var(--no-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--no-selection)",
		"BACKGROUND-CURRENT-LINE": "var(--no-bg-highlight)",

		"TEXT": "var(--no-fg)",
		"TITLE": "var(--no-cyan)",
		"ACCENT": "var(--no-blue)",
		"ACTION": "var(--no-purple)",
		"LIST": "var(--no-green)",
		"HEADER": "var(--no-red)",
		"CARET": "var(--no-yellow)",
		"LINK": "var(--no-cyan)",

		"BOLD": "var(--no-orange)",
		"ITALICS": "var(--no-red)",
		"HIGHLIGHT": "var(--no-yellow)",
		"STRIKETHROUGH": "var(--no-cyan)",
		"LINE_BREAK": "var(--no-purple)",
		"TAGS": "var(--no-green)",

		"HEADER-1": "var(--no-purple)",
		"HEADER-2": "var(--no-blue)",
		"HEADER-3": "var(--no-cyan)",
		"HEADER-4": "var(--no-green)",
		"HEADER-5": "var(--no-orange)",
		"HEADER-6": "var(--no-yellow)",
	},
};
