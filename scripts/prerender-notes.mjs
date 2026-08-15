import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const TEMPLATE = path.join(DIST, "index.html");

const OWNER = process.env.VITE_NOTES_REPO_OWNER ?? "SomtoJF";
const REPO = process.env.VITE_NOTES_REPO_NAME ?? "Obsidian";
const BRANCH = process.env.VITE_NOTES_BRANCH ?? "main";
const NOTES_ROOT = (process.env.VITE_NOTES_ROOT ?? "Blog").replace(/\/+$/, "");
const SITE_URL = (
	process.env.SITE_URL ??
	process.env.VITE_SITE_URL ??
	"https://somtochukwu.com"
).replace(/\/+$/, "");
const TOKEN = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;

const TREE_URL = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;
const RAW_BASE = `https://raw.githubusercontent.com/${OWNER}/${REPO}/${BRANCH}`;
const FRONTMATTER_RE = /^---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?/;

const NOTES_INDEX_DESCRIPTION = "Trying to keep track of my thoughts and learnings.";
const NOTE_FALLBACK_DESCRIPTION = "A note by Somto.";

function slugify(value) {
	return value
		.trim()
		.toLowerCase()
		.normalize("NFKD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/\.md$/i, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

function filenameFromPath(filePath) {
	const segment = filePath.split("/").pop() ?? filePath;
	return segment.replace(/\.md$/i, "");
}

function escapeHtml(value) {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll('"', "&quot;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;");
}

function asString(value) {
	if (typeof value === "string") return value;
	if (typeof value === "number") return String(value);
	return undefined;
}

function asBoolean(value) {
	if (typeof value === "boolean") return value;
	if (value === "true") return true;
	if (value === "false") return false;
	return undefined;
}

function parseNote(raw, filePath) {
	const match = raw.match(FRONTMATTER_RE);
	const parsed = match ? parseYaml(match[1]) : {};
	const data =
		parsed && typeof parsed === "object" ? parsed : {};
	const filename = filenameFromPath(filePath);
	const title = asString(data.title)?.trim() || filename;

	return {
		title,
		slug: slugify(title),
		description: asString(data.description)?.trim() ?? "",
		published: asBoolean(data.published) !== false,
	};
}

function rawUrl(filePath) {
	const segments = filePath.split("/").map(encodeURIComponent).join("/");
	return `${RAW_BASE}/${segments}`;
}

function githubHeaders() {
	return {
		Accept: "application/vnd.github+json",
		"User-Agent": "whoissomto-prerender",
		...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
	};
}

async function getNotes() {
	const treeResponse = await fetch(TREE_URL, { headers: githubHeaders() });
	if (!treeResponse.ok) {
		throw new Error(
			`Failed to list notes (${treeResponse.status} ${treeResponse.statusText})`,
		);
	}

	const data = await treeResponse.json();
	const files = data.tree.filter(
		(item) =>
			item.type === "blob" &&
			(item.path === NOTES_ROOT || item.path.startsWith(`${NOTES_ROOT}/`)) &&
			item.path.toLowerCase().endsWith(".md"),
	);

	const parsed = await Promise.all(
		files.map(async (file) => {
			const response = await fetch(rawUrl(file.path));
			if (!response.ok) {
				throw new Error(
					`Failed to fetch ${file.path} (${response.status} ${response.statusText})`,
				);
			}
			return parseNote(await response.text(), file.path);
		}),
	);

	return parsed.filter((note) => note.published);
}

function inject(html, { title, description, url, type }) {
	const t = escapeHtml(title);
	const d = escapeHtml(description);
	const u = escapeHtml(url);

	return html
		.replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
		.replace(
			/(<meta name="description" content=")[^"]*(")/,
			`$1${d}$2`,
		)
		.replace(
			/(property="og:title" content=")[^"]*(")/,
			`$1${t}$2`,
		)
		.replace(
			/(property="og:description" content=")[^"]*(")/,
			`$1${d}$2`,
		)
		.replace(/(property="og:url" content=")[^"]*(")/, `$1${u}$2`)
		.replace(/(property="og:type" content=")[^"]*(")/, `$1${type}$2`)
		.replace(
			/(name="twitter:title" content=")[^"]*(")/,
			`$1${t}$2`,
		)
		.replace(
			/(name="twitter:description" content=")[^"]*(")/,
			`$1${d}$2`,
		);
}

function writePage(relativeDir, html) {
	const dir = path.join(DIST, relativeDir);
	fs.mkdirSync(dir, { recursive: true });
	fs.writeFileSync(path.join(dir, "index.html"), html);
}

const template = fs.readFileSync(TEMPLATE, "utf8");
const notes = await getNotes();

writePage(
	"notes",
	inject(template, {
		title: "Notes — Somto",
		description: NOTES_INDEX_DESCRIPTION,
		url: `${SITE_URL}/notes`,
		type: "website",
	}),
);

for (const note of notes) {
	writePage(
		path.join("notes", note.slug),
		inject(template, {
			title: `${note.title} — Somto`,
			description: note.description || NOTE_FALLBACK_DESCRIPTION,
			url: `${SITE_URL}/notes/${note.slug}`,
			type: "article",
		}),
	);
}

console.log(`Prerendered ${notes.length} note shell(s) into dist/notes.`);
