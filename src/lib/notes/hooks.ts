import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getNote, getNotes } from "./github";
import type { Note, NoteMeta } from "./types";

export const DEFAULT_NOTES_STALE_TIME = 5 * 60 * 1000;

export const notesKeys = {
	all: ["notes"] as const,
	list: () => [...notesKeys.all, "list"] as const,
	detail: (slug: string) => [...notesKeys.all, "detail", slug] as const,
};

type NotesQueryOptions = Omit<
	UseQueryOptions<NoteMeta[], Error>,
	"queryKey" | "queryFn"
>;

type NoteQueryOptions = Omit<
	UseQueryOptions<Note, Error>,
	"queryKey" | "queryFn" | "enabled"
>;

export function useNotes(options?: NotesQueryOptions) {
	return useQuery({
		queryKey: notesKeys.list(),
		queryFn: getNotes,
		staleTime: DEFAULT_NOTES_STALE_TIME,
		...options,
	});
}

export function useNote(slug: string | undefined, options?: NoteQueryOptions) {
	return useQuery({
		queryKey: notesKeys.detail(slug ?? ""),
		queryFn: () => getNote(slug!),
		enabled: Boolean(slug),
		staleTime: DEFAULT_NOTES_STALE_TIME,
		...options,
	});
}
