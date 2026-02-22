import { Theme } from "../Theme";

/**
 * Material Oceanic theme
 * Official palette from material-theme.com
 */
export const MATERIAL_OCEANIC_THEME: Theme = {
	id: "material-oceanic",
	name: "Material Oceanic",
	mode: "dark",
	isBuiltin: false,
	colors: {
		"mo-bg": "#263238",
		"mo-bg-dark": "#1e272c",
		"mo-bg-highlight": "#32424a",
		"mo-selection": "#546e7a",
		"mo-fg": "#b0bec5",
		"mo-fg-dark": "#546e7a",
		"mo-comment": "#546e7a",
		"mo-red": "#ff5370",
		"mo-orange": "#f78c6c",
		"mo-yellow": "#ffcb6b",
		"mo-green": "#c3e88d",
		"mo-cyan": "#89ddff",
		"mo-blue": "#82aaff",
		"mo-purple": "#c792ea",
		"mo-pink": "#f07178",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--mo-bg)",
		"BACKGROUND-SECONDARY": "var(--mo-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--mo-selection)",
		"BACKGROUND-CURRENT-LINE": "var(--mo-bg-highlight)",

		"TEXT": "var(--mo-fg)",
		"TITLE": "var(--mo-cyan)",
		"ACCENT": "var(--mo-blue)",
		"ACTION": "var(--mo-purple)",
		"LIST": "var(--mo-green)",
		"HEADER": "var(--mo-pink)",
		"CARET": "var(--mo-cyan)",
		"LINK": "var(--mo-cyan)",

		"BOLD": "var(--mo-orange)",
		"ITALICS": "var(--mo-pink)",
		"HIGHLIGHT": "var(--mo-yellow)",
		"STRIKETHROUGH": "var(--mo-cyan)",
		"LINE_BREAK": "var(--mo-purple)",
		"TAGS": "var(--mo-green)",

		"HEADER-1": "var(--mo-purple)",
		"HEADER-2": "var(--mo-blue)",
		"HEADER-3": "var(--mo-cyan)",
		"HEADER-4": "var(--mo-green)",
		"HEADER-5": "var(--mo-orange)",
		"HEADER-6": "var(--mo-pink)",
	},
};
