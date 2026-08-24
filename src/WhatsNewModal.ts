import { App, Modal, requestUrl } from "obsidian";

const FEED_URL = "https://codesplash.ai/updates/feed/themes";

interface WhatsNewCategories {
	features: string[];
	fixes: string[];
	improvements: string[];
}

interface WhatsNewScreenshot {
	src: string;
	alt: string;
}

interface WhatsNewTutorial {
	title: string;
	target: string;
	note?: string;
}

export interface WhatsNewEntry {
	version: string;
	date: string;
	summary: string;
	highlights: string[];
	categories: WhatsNewCategories;
	screenshots?: WhatsNewScreenshot[];
	tutorials?: WhatsNewTutorial[];
}

/**
 * Compare dotted numeric versions. Returns <0, 0, or >0 like a comparator.
 */
export function compareVersions(a: string, b: string): number {
	const aParts = a.split(".").map(Number);
	const bParts = b.split(".").map(Number);
	for (let i = 0; i < Math.max(aParts.length, bParts.length); i++) {
		const diff = (aParts[i] || 0) - (bParts[i] || 0);
		if (diff !== 0) {
			return diff;
		}
	}
	return 0;
}

/**
 * Fetch release notes newer than lastSeenVersion, up to currentVersion.
 * Returns null when the feed is unreachable so callers can retry next launch.
 */
export async function fetchWhatsNewEntries(
	lastSeenVersion: string,
	currentVersion: string
): Promise<WhatsNewEntry[] | null> {
	try {
		const response = await requestUrl({ url: FEED_URL });
		const entries: unknown = response.json?.entries;
		if (!Array.isArray(entries)) {
			return null;
		}
		return (entries as WhatsNewEntry[])
			.filter(entry =>
				typeof entry?.version === "string" &&
				compareVersions(entry.version, lastSeenVersion) > 0 &&
				compareVersions(entry.version, currentVersion) <= 0
			)
			.sort((a, b) => compareVersions(b.version, a.version));
	} catch {
		return null;
	}
}

/**
 * Release notes modal aggregating every version since the last seen one.
 */
export class WhatsNewModal extends Modal {
	private entries: WhatsNewEntry[];
	private onDismiss: () => void;

	constructor(app: App, entries: WhatsNewEntry[], onDismiss: () => void) {
		super(app);
		this.entries = entries;
		this.onDismiss = onDismiss;
	}

	onOpen() {
		this.setTitle("What's new in CodeSplash Themes");
		const { contentEl } = this;
		contentEl.addClass("whats-new-modal");
		this.entries.forEach(entry => this.renderEntry(contentEl, entry));
	}

	private renderEntry(container: HTMLElement, entry: WhatsNewEntry) {
		const section = container.createDiv({ cls: "whats-new-entry" });
		section.createEl("h3", { text: `${entry.version} — ${entry.date}` });
		if (entry.summary) {
			section.createEl("p", { text: entry.summary });
		}
		if (entry.highlights?.length) {
			const list = section.createEl("ul");
			entry.highlights.forEach(highlight => list.createEl("li", { text: highlight }));
		}
		this.renderCategory(section, "Features", entry.categories?.features);
		this.renderCategory(section, "Fixes", entry.categories?.fixes);
		this.renderCategory(section, "Improvements", entry.categories?.improvements);
		entry.screenshots?.forEach(screenshot => {
			if (!screenshot?.src?.startsWith("https://")) {
				return;
			}
			const img = section.createEl("img", {
				cls: "whats-new-screenshot",
				attr: { src: screenshot.src, alt: screenshot.alt || "" },
			});
			img.addEventListener("error", () => img.remove());
		});
		entry.tutorials?.forEach(tutorial => {
			if (!tutorial?.title) {
				return;
			}
			section.createEl("p", {
				cls: "whats-new-tutorial",
				text: tutorial.note ? `${tutorial.title} — ${tutorial.note}` : tutorial.title,
			});
		});
	}

	private renderCategory(container: HTMLElement, label: string, items?: string[]) {
		if (!items?.length) {
			return;
		}
		container.createEl("h4", { text: label });
		const list = container.createEl("ul");
		items.forEach(item => list.createEl("li", { text: item }));
	}

	onClose() {
		this.contentEl.empty();
		this.onDismiss();
	}
}
