import { Link } from "react-router-dom";
import { useEffect } from "react";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import NoteCard from "../components/notes/NoteCard";
import NotesStatus from "../components/notes/NotesStatus";
import { useNotes } from "../lib/notes/hooks";
import type { NoteMeta } from "../lib/notes/types";

export default function NotesIndex() {
  const { data: notes, isPending, isError, error, refetch } = useNotes();

  useEffect(() => {
    const previous = document.title;
    document.title = "Notes — Somto";
    return () => {
      document.title = previous;
    };
  }, []);

  const personal = notes?.filter((note) => note.category === "personal") ?? [];
  const professional =
    notes?.filter((note) => note.category === "professional") ?? [];

  return (
    <AnimatedPage
      id="notes-index"
      className="box-border min-h-screen w-full bg-white font-header font-light"
    >
      <section className="mx-auto max-w-screen-xl px-[5%] pb-24 pt-[12vh]">
        <p className="text-sm uppercase tracking-[0.2em] text-charcoal">
          <Link to="/" className="link-underline text-inherit no-underline">
            Home
          </Link>
          <span className="mx-2">/</span>
          Notes
        </p>
        <h1 className="mt-6 font-display text-[clamp(40px,7vw,84px)] font-extralight text-black">
          Notes
        </h1>
        <p className="mt-4 max-w-xl text-lg font-light leading-relaxed text-charcoal">
          Trying to keep track of my thoughts and learnings.
        </p>

        <div className="mt-12">
          {isPending ? <NotesStatus message="Loading notes…" /> : null}
          {isError ? (
            <NotesStatus
              message={error.message || "Could not load notes."}
              action={
                <button
                  type="button"
                  onClick={() => refetch()}
                  className="link-underline mt-4 font-header font-light"
                >
                  Try again
                </button>
              }
            />
          ) : null}
          {notes && notes.length === 0 ? (
            <NotesStatus message="No published notes in Blog yet." />
          ) : null}
          {notes && notes.length > 0 ? (
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-0">
              <NoteSection
                title="Personal"
                notes={personal}
                className="md:pr-12"
              />
              <NoteSection
                title="Professional"
                notes={professional}
                className="md:border-l md:border-grey md:pl-12"
              />
            </div>
          ) : null}
        </div>
      </section>
    </AnimatedPage>
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
      <h2 className="mb-2 font-display text-[clamp(28px,4vw,48px)] font-extralight text-black">
        {title}
      </h2>
      {notes.length === 0 ? (
        <p className="border-t border-grey py-8 font-header font-light text-charcoal">
          Nothing here yet.
        </p>
      ) : (
        notes.map((note) => <NoteCard key={note.path} note={note} />)
      )}
    </section>
  );
}
