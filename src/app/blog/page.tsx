import type { Metadata } from "next";
import Link from "next/link";
import NoteCard from "@/components/latest/notecard";
import NotesStatus from "@/components/notes/NotesStatus";
import { getNotes } from "@/lib/notes/github";
import type { NoteMeta } from "@/lib/notes/types";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Notes",
  description: "Trying to keep track of my thoughts and learnings.",
  openGraph: {
    title: "Notes — Somto",
    description: "Trying to keep track of my thoughts and learnings.",
    type: "website",
  },
};

export default async function NotesIndexPage() {
  let notes: NoteMeta[] = [];
  let errorMessage: string | null = null;

  try {
    notes = await getNotes();
  } catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Could not load notes.";
  }

  const personal = notes.filter((note) => note.category === "personal");
  const professional = notes.filter((note) => note.category === "professional");

  return (
    <section className="mx-auto max-w-screen-xl pb-24 flex-1">
      <div className="mt-12">
        {errorMessage ? <NotesStatus message={errorMessage} /> : null}
        {!errorMessage && notes.length === 0 ? (
          <NotesStatus message="No published notes in Blog yet." />
        ) : null}
        {notes.length > 0 ? (
          <div className="">
            <NoteSection
              title="Personal"
              notes={personal}
              className="md:pr-12"
            />
            <NoteSection
              title="Professional"
              notes={professional}
              className=""
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function NoteSection({
  title,
  notes,
  className = "",
}: {
  title: string;
  notes: NoteMeta[];
  className?: string;
}) {
  return (
    <section className={className}>
      <h2 className="mb-2 font-regular text-lg font-bold text-gray-600">
        {title}
      </h2>
      {notes.length === 0 ? (
        <p className="border-t border-grey py-6 font-header font-light text-charcoal">
          Nothing here yet.
        </p>
      ) : (
        notes.map((note) => <NoteCard key={note.path} note={note} />)
      )}
    </section>
  );
}
