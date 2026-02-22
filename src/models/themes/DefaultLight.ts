import { Theme } from "../Theme";

/**
 * Default Light theme - based on default-light.css
 */
export const DEFAULT_LIGHT_THEME: Theme = {
	id: "default-light",
	name: "Default Light",
	mode: "light",
	isBuiltin: false,
	colors: {
		"default-blue": "#1840A1",
		"default-orange": "#F89B62",
		"default-white": "#FFFFFF",
		"default-ultralight": "#F2F2F2",
		"default-slate": "#C4C4C4",
		"default-dark": "#161616",
		"default-green": "#24956D",
		"default-red": "#F86862",
		"default-purple": "#5C259C",
		"default-pink": "#F48AB7",
		"default-gold": "#CEB888"
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--default-white)",
		"BACKGROUND-SECONDARY": "var(--default-white)",
		"BACKGROUND-HIGHTLIGHT": "var(--default-slate)",
		"BACKGROUND-CURRENT-LINE": "var(--default-ultralight)",

		"TEXT": "var(--default-dark)",
		"TITLE": "var(--default-blue)",
		"ACCENT": "var(--default-green)",
		"ACTION": "var(--default-blue)",
		"LIST": "var(--default-slate)",
		"HEADER": "var(--default-orange)",
		"CARET": "var(--default-slate)",
		"LINK": "var(--default-green)",

		"BOLD": "var(--default-blue)",
		"ITALICS": "var(--default-red)",
		"HIGHLIGHT": "var(--default-green)",
		"STRIKETHROUGH": "var(--default-purple)",
		"LINE_BREAK": "var(--default-slate)",
		"TAGS": "var(--default-green)",

		"HEADER-1": "var(--default-red)",
		"HEADER-2": "var(--default-green)",
		"HEADER-3": "var(--default-purple)",
		"HEADER-4": "var(--default-orange)",
		"HEADER-5": "var(--default-pink)",
		"HEADER-6": "var(--default-blue)",
	},
};
