import { filenameFromPath, parseMarkdown, slugify } from "./parser";
import type { GitTreeItem, GitTreeResponse, Note, NoteMeta } from "./types";

const OWNER = import.meta.env.VITE_NOTES_REPO_OWNER ?? "SomtoJF";
const REPO = import.meta.env.VITE_NOTES_REPO_NAME ?? "Obsidian";
const BRANCH = import.meta.env.VITE_NOTES_BRANCH ?? "main";
const NOTES_ROOT = (import.meta.env.VITE_NOTES_ROOT ?? "Blog").replace(
	/\/+$/,
	"",
);

const TREE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;

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

	const resolved = parseMarkdown(await fetchRaw(match.path), match.path, NOTES_ROOT);
	if (!resolved.published) {
		throw new Error(`Note not found: ${slug}`);
	}

	return resolved;
}

export async function getAsset(path: string): Promise<string> {
	const decoded = decodeURIComponent(path.trim()).replace(/^\/+/, "");
	const tree = await getTree();

	const exact =
		tree.find((item) => item.path === decoded) ??
		tree.find((item) => item.path === `${NOTES_ROOT}/${decoded}`);
	if (exact) {
		return rawUrl(exact.path);
	}

	const basename = decoded.split("/").pop() ?? decoded;
	const inBlog = tree.find(
		(item) =>
			isUnderNotesRoot(item.path) &&
			(item.path.endsWith(`/${basename}`) || item.path === `${NOTES_ROOT}/${basename}`),
	);
	if (inBlog) {
		return rawUrl(inBlog.path);
	}

	return rawUrl(decoded.includes("/") ? decoded : `${NOTES_ROOT}/${decoded}`);
}

export function rawUrl(path: string): string {
	const segments = path.split("/").map(encodeURIComponent).join("/");
	return `${RAW_BASE}/${segments}`;
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
		headers: { Accept: "application/vnd.github+json" },
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
	const response = await fetch(rawUrl(path));
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

function compareNotes(a: NoteMeta, b: NoteMeta): number {
	if (a.date && b.date) {
		return b.date.localeCompare(a.date);
	}
	if (a.date) return -1;
	if (b.date) return 1;
	return a.title.localeCompare(b.title);
}
