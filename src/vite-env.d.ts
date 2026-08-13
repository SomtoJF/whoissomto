/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_NOTES_REPO_OWNER?: string;
	readonly VITE_NOTES_REPO_NAME?: string;
	readonly VITE_NOTES_BRANCH?: string;
	readonly VITE_NOTES_ROOT?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
