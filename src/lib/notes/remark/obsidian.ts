import type { Root, PhrasingContent } from "mdast";
import { findAndReplace } from "mdast-util-find-and-replace";
import GithubSlugger from "github-slugger";
import { slugify } from "../parser";
import type { NoteMeta } from "../types";

const EMBED_RE = /!\[\[([^\]|#\n]+)(?:\|([^\]\n]+))?\]\]/g;
const WIKILINK_RE =
	/\[\[([^\]|#\n]+)(?:#([^\]|\n]+))?(?:\|([^\]\n]+))?\]\]/g;

type ObsidianPluginOptions = {
	notes?: NoteMeta[];
};

export function remarkObsidian(options: ObsidianPluginOptions = {}) {
	const notes = options.notes;

	return (tree: Root) => {
		findAndReplace(
			tree,
			[
				[
					EMBED_RE,
					(_match: string, target: string, alias?: string) => {
						return embedNode(target.trim(), alias?.trim());
					},
				],
				[
					WIKILINK_RE,
					(
						_match: string,
						target: string,
						heading?: string,
						alias?: string,
					) => {
						return wikiNode(target.trim(), heading?.trim(), alias?.trim(), notes);
					},
				],
			],
			{ ignore: ["code", "inlineCode"] },
		);
	};
}

function wikiNode(
	target: string,
	heading: string | undefined,
	alias: string | undefined,
	notes: NoteMeta[] | undefined,
): PhrasingContent {
	const slug = resolveSlug(target, notes);
	const label = alias || target;

	if (!slug) {
		return { type: "text", value: label };
	}

	const hash = heading ? `#${new GithubSlugger().slug(heading)}` : "";

	return {
		type: "link",
		url: `/notes/${slug}${hash}`,
		children: [{ type: "text", value: label }],
	};
}

function embedNode(target: string, alias: string | undefined): PhrasingContent {
	return {
		type: "obsidianEmbed",
		children: [],
		data: {
			hName: "obsidianembed",
			hProperties: {
				target,
				alt: alias ?? "",
			},
		},
	} as unknown as PhrasingContent;
}

function resolveSlug(target: string, notes?: NoteMeta[]): string | undefined {
	const targetSlug = slugify(target);
	if (!targetSlug) return undefined;

	if (!notes) {
		return targetSlug;
	}

	const match = notes.find((note) => {
		return (
			note.slug === targetSlug ||
			note.title.toLowerCase() === target.toLowerCase() ||
			slugify(note.path.split("/").pop() ?? "") === targetSlug
		);
	});

	return match?.slug;
}
