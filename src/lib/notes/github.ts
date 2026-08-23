import "server-only";

import { filenameFromPath, parseMarkdown, slugify } from "./parser";
import type { GitTreeItem, GitTreeResponse, Note, NoteMeta } from "./types";

const OWNER = process.env.NOTES_REPO_OWNER ?? "SomtoJF";
const REPO = process.env.NOTES_REPO_NAME ?? "Obsidian";
const BRANCH = process.env.NOTES_BRANCH ?? "main";
const NOTES_ROOT = (process.env.NOTES_ROOT ?? "Blog").replace(/\/+$/, "");
const TOKEN = process.env.GITHUB_TOKEN;

const TREE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;
const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i;
const EMBED_RE = /!\[\[([^\]|#\n]+)(?:\|([^\]\n]+))?\]\]/g;

const FETCH_INIT: RequestInit & { next: { revalidate: number } } = {
	next: { revalidate: 60 },
};

let inFlightTree: Promise<GitTreeItem[]> | null = null;

export async function getNotes(): Promise<NoteMeta[]> {
	return loadNotesMeta();
}

export async function getNote(slug: string): Promise<Note> {
	const path = await resolveNotePath(slug);
	if (!path) {
		throw new Error(`Note not found: ${slug}`);
	}

	const note = parseMarkdown(await fetchRaw(path), path, NOTES_ROOT);
	if (note.published && note.slug === slug) {
		return note;
	}

	const match = (await getNotes()).find((item) => item.slug === slug);
	if (!match) {
		throw new Error(`Note not found: ${slug}`);
	}

	const resolved = parseMarkdown(
		await fetchRaw(match.path),
		match.path,
		NOTES_ROOT,
	);
	if (!resolved.published) {
		throw new Error(`Note not found: ${slug}`);
	}

	return resolved;
}

export async function getNoteOrNull(slug: string): Promise<Note | null> {
	try {
		return await getNote(slug);
	} catch {
		return null;
	}
}

export async function getAsset(path: string): Promise<string> {
	const decoded = decodeURIComponent(path.trim()).replace(/^\/+/, "");
	if (!decoded) {
		throw new Error("Asset not found: empty path");
	}

	const tree = await getTree();
	const match = resolveAssetPath(decoded, tree);
	if (!match) {
		throw new Error(`Asset not found: ${decoded}`);
	}

	return rawUrl(match);
}

export async function resolveNoteAssets(
	content: string,
): Promise<Record<string, string>> {
	const targets = new Set<string>();
	for (const match of content.matchAll(new RegExp(EMBED_RE.source, "g"))) {
		const target = match[1]?.trim();
		if (target && IMAGE_EXT.test(target)) {
			targets.add(target);
		}
	}

	const entries = await Promise.all(
		[...targets].map(async (target) => {
			try {
				return [target, await getAsset(target)] as const;
			} catch {
				return [target, ""] as const;
			}
		}),
	);

	return Object.fromEntries(entries.filter(([, src]) => src));
}

export function rawUrl(path: string): string {
	const segments = path.split("/").map(encodeURIComponent).join("/");
	return `${RAW_BASE}/${segments}`;
}

function githubHeaders(extra?: HeadersInit): HeadersInit {
	return {
		Accept: "application/vnd.github+json",
		"User-Agent": "whoissomto",
		...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
		...extra,
	};
}

async function resolveNotePath(slug: string): Promise<string | undefined> {
	const files = await listBlogMarkdownFiles();
	const byFilename = files.find(
		(file) => slugify(filenameFromPath(file.path)) === slug,
	);
	if (byFilename) {
		return byFilename.path;
	}

	const notes = await getNotes();
	return notes.find((note) => note.slug === slug)?.path;
}

async function loadNotesMeta(): Promise<NoteMeta[]> {
	const files = await listBlogMarkdownFiles();
	const parsed = await Promise.all(
		files.map(async (file) => {
			const raw = await fetchRaw(file.path);
			return parseMarkdown(raw, file.path, NOTES_ROOT);
		}),
	);

	return parsed
		.filter((note) => note.published)
		.map((note) => ({
			title: note.title,
			slug: note.slug,
			description: note.description,
			tags: note.tags,
			date: note.date,
			published: note.published,
			path: note.path,
			category: note.category,
		}))
		.sort(compareNotes);
}

async function listBlogMarkdownFiles(): Promise<GitTreeItem[]> {
	const tree = await getTree();
	return tree.filter(
		(item) => item.type === "blob" && isBlogMarkdown(item.path),
	);
}

async function getTree(): Promise<GitTreeItem[]> {
	if (!inFlightTree) {
		inFlightTree = fetchTree().finally(() => {
			inFlightTree = null;
		});
	}
	return inFlightTree;
}

async function fetchTree(): Promise<GitTreeItem[]> {
	const response = await fetch(TREE_URL, {
		...FETCH_INIT,
		headers: githubHeaders(),
	});

	if (!response.ok) {
		throw new Error(
			`Failed to list notes (${response.status} ${response.statusText})`,
		);
	}

	const data = (await response.json()) as GitTreeResponse;
	return data.tree.filter((item) => item.type === "blob");
}

async function fetchRaw(path: string): Promise<string> {
	const response = await fetch(rawUrl(path), FETCH_INIT);
	if (!response.ok) {
		throw new Error(
			`Failed to fetch ${path} (${response.status} ${response.statusText})`,
		);
	}
	return response.text();
}

function isBlogMarkdown(path: string): boolean {
	return isUnderNotesRoot(path) && path.toLowerCase().endsWith(".md");
}

function isUnderNotesRoot(path: string): boolean {
	return path === NOTES_ROOT || path.startsWith(`${NOTES_ROOT}/`);
}

function resolveAssetPath(
	decoded: string,
	tree: GitTreeItem[],
): string | undefined {
	const exact =
		tree.find((item) => item.path === decoded) ??
		tree.find((item) => item.path === `${NOTES_ROOT}/${decoded}`);
	if (exact) {
		return exact.path;
	}

	const basename = decoded.split("/").pop() ?? decoded;
	const byBasename = tree.filter(
		(item) => item.path === basename || item.path.endsWith(`/${basename}`),
	);
	if (byBasename.length === 0) {
		return undefined;
	}

	const inBlog = byBasename.find((item) => isUnderNotesRoot(item.path));
	return (inBlog ?? byBasename[0]).path;
}

function compareNotes(a: NoteMeta, b: NoteMeta): number {
	if (a.date && b.date) {
		return b.date.localeCompare(a.date);
	}
	if (a.date) return -1;
	if (b.date) return 1;
	return a.title.localeCompare(b.title);
}
