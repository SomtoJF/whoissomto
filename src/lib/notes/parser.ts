import { parse as parseYaml } from "yaml";
import type { Note, NoteCategory, NoteFrontmatter } from "./types";

const FRONTMATTER_RE = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?/;

export function slugify(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/\.md$/i, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

export function filenameFromPath(path: string): string {
	const segment = path.split("/").pop() ?? path;
	return segment.replace(/\.md$/i, "");
}

export function parseFrontmatter(raw: string): {
	data: NoteFrontmatter;
	content: string;
} {
	const match = raw.match(FRONTMATTER_RE);
	if (!match) {
		return { data: {}, content: raw };
	}

	const parsed = parseYaml(match[1]);
	const data = normalizeFrontmatter(
		parsed && typeof parsed === "object" ? (parsed as Record<string, unknown>) : {},
	);

	return {
		data,
		content: raw.slice(match[0].length),
	};
}

export function parseMarkdown(
	raw: string,
	path: string,
	root = "Blog",
): Note {
	const { data, content } = parseFrontmatter(raw);
	const filename = filenameFromPath(path);
	const title = data.title?.trim() || filename;

	return {
		title,
		slug: slugify(title),
		content,
		description: data.description?.trim() ?? "",
		tags: data.tags ?? [],
		date: data.date,
		published: data.published !== false,
		path,
		category: data.category ?? categoryFromPath(path, root),
	};
}

export function categoryFromPath(path: string, root = "Blog"): NoteCategory {
	const relative = path.startsWith(`${root}/`) ? path.slice(root.length + 1) : path;
	const folder = relative.split("/")[0]?.toLowerCase();
	if (folder === "personal") return "personal";
	return "professional";
}

function normalizeFrontmatter(raw: Record<string, unknown>): NoteFrontmatter {
	return {
		title: asString(raw.title),
		description: asString(raw.description),
		date: asDate(raw.date),
		tags: asTags(raw.tags),
		published: asBoolean(raw.published),
		category: asCategory(raw.category),
	};
}

function asString(value: unknown): string | undefined {
	if (typeof value === "string") return value;
	if (typeof value === "number") return String(value);
	return undefined;
}

function asDate(value: unknown): string | undefined {
	if (value instanceof Date && !Number.isNaN(value.getTime())) {
		return value.toISOString().slice(0, 10);
	}
	if (typeof value === "string" || typeof value === "number") {
		return String(value);
	}
	return undefined;
}

function asTags(value: unknown): string[] | undefined {
	if (Array.isArray(value)) {
		return value.map((tag) => String(tag).trim()).filter(Boolean);
	}
	if (typeof value === "string" && value.trim()) {
		return value
			.split(",")
			.map((tag) => tag.trim())
			.filter(Boolean);
	}
	return undefined;
}

function asBoolean(value: unknown): boolean | undefined {
	if (typeof value === "boolean") return value;
	if (value === "true") return true;
	if (value === "false") return false;
	return undefined;
}

function asCategory(value: unknown): NoteCategory | undefined {
	if (typeof value !== "string") return undefined;
	const normalized = value.trim().toLowerCase();
	if (normalized === "personal" || normalized === "professional") {
		return normalized;
	}
	return undefined;
}
