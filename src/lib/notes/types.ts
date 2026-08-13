export type NoteCategory = "personal" | "professional";

export type NoteFrontmatter = {
	title?: string;
	description?: string;
	date?: string;
	tags?: string[];
	published?: boolean;
	category?: NoteCategory;
};

export type Note = {
	title: string;
	slug: string;
	content: string;
	description: string;
	tags: string[];
	date?: string;
	published: boolean;
	path: string;
	category: NoteCategory;
};

export type NoteMeta = Omit<Note, "content">;

export type GitTreeItem = {
	path: string;
	mode: string;
	type: "blob" | "tree" | "commit";
	sha: string;
	size?: number;
	url: string;
};

export type GitTreeResponse = {
	sha: string;
	url: string;
	tree: GitTreeItem[];
	truncated: boolean;
};
