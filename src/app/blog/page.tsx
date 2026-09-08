import type { Metadata } from "next";
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
    <section className="w-full pb-24 flex-1">
      <div className="mt-12">
        {errorMessage ? <NotesStatus message={errorMessage} /> : null}
        {!errorMessage && notes.length === 0 ? (
          <NotesStatus message="No published notes in Blog yet." />
        ) : null}
        {notes.length > 0 ? (
          <div className="">
            <NoteSection
              title="Professional"
              notes={professional}
              className="mb-4"
            />
            <NoteSection title="Personal" notes={personal} />
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
  const shouldAddEmptyLines = notes.length < 10 && notes.length > 0;
  const emptyLinesToAdd = shouldAddEmptyLines ? 3 : 0;

  return (
    <section className={className}>
      <h2 className="mb-2 font-regular text-lg font-bold text-gray-600">
        {title}
      </h2>
      {notes.length === 0 ? (
        <>
          <p className="border-y border-gray-300 pt-3 pb-0.5 w-full text-gray-600 font-light font-regular">
            Nothing to see here.
          </p>
          {Array.from({ length: 3 }).map((_, index) => (
            <EmptyLines key={index} />
          ))}
        </>
      ) : (
        <>
          {notes.map((note, index) => (
            <div
              className={`pt-3 pb-0.5 border-t border-gray-300 ${index === notes.length - 1 ? "border-b" : ""}`}
              key={note.path}
            >
              <NoteCard note={note} />
            </div>
          ))}
          {Array.from({ length: emptyLinesToAdd }).map((_, index) => (
            <EmptyLines key={`empty-${index}`} />
          ))}
        </>
      )}
    </section>
  );
}

function EmptyLines() {
  return <p className="border-b border-gray-300 h-10.5"></p>;
}
