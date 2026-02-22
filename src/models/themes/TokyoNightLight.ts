import { Theme } from "../Theme";

/**
 * Tokyo Night Light theme - light mode (day)
 * Official palette from github.com/tokyo-night/tokyo-night-vscode-theme
 */
export const TOKYO_NIGHT_LIGHT_THEME: Theme = {
	id: "tokyo-night-light",
	name: "Tokyo Night Light",
	mode: "light",
	isBuiltin: false,
	colors: {
		"tn-bg": "#e6e7ed",
		"tn-bg-dark": "#d6d8df",
		"tn-bg-highlight": "#c1c2c7",
		"tn-fg": "#363c4d",
		"tn-fg-dark": "#707280",
		"tn-comment": "#9699a3",
		"tn-blue": "#2959aa",
		"tn-blue0": "#3366b2",
		"tn-cyan": "#006c86",
		"tn-green": "#385f0d",
		"tn-green1": "#33635c",
		"tn-magenta": "#7b43ba",
		"tn-orange": "#965027",
		"tn-purple": "#65359d",
		"tn-red": "#8c4351",
		"tn-red1": "#942f2f",
		"tn-teal": "#25aac2",
		"tn-yellow": "#8f5e15",
		"tn-terminal-black": "#acb0bf",
	},
	assignments: {
		"BACKGROUND-PRIMARY": "var(--tn-bg)",
		"BACKGROUND-SECONDARY": "var(--tn-bg-dark)",
		"BACKGROUND-HIGHTLIGHT": "var(--tn-bg-highlight)",
		"BACKGROUND-CURRENT-LINE": "var(--tn-bg-highlight)",

		"TEXT": "var(--tn-fg)",
		"TITLE": "var(--tn-cyan)",
		"ACCENT": "var(--tn-blue)",
		"ACTION": "var(--tn-magenta)",
		"LIST": "var(--tn-green1)",
		"HEADER": "var(--tn-purple)",
		"CARET": "var(--tn-blue)",
		"LINK": "var(--tn-cyan)",

		"BOLD": "var(--tn-orange)",
		"ITALICS": "var(--tn-red)",
		"HIGHLIGHT": "var(--tn-yellow)",
		"STRIKETHROUGH": "var(--tn-teal)",
		"LINE_BREAK": "var(--tn-purple)",
		"TAGS": "var(--tn-green1)",

		"HEADER-1": "var(--tn-magenta)",
		"HEADER-2": "var(--tn-blue)",
		"HEADER-3": "var(--tn-cyan)",
		"HEADER-4": "var(--tn-green)",
		"HEADER-5": "var(--tn-orange)",
		"HEADER-6": "var(--tn-yellow)",
	},
};
