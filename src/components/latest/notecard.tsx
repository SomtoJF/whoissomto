import Link from "next/link";
import type { NoteMeta } from "../../lib/notes/types";
import { formatNoteDate } from "../../lib/notes/format";

type NoteCardProps = {
  note: NoteMeta;
};

export default function NoteCard({ note }: NoteCardProps) {
  return (
    <article className="">
      <Link href={`/blog/${note.slug}`} className="group block no-underline">
        {note.date ? (
          <time
            dateTime={note.date}
            className="font-header text-sm font-light text-charcoal"
          >
            {formatNoteDate(note.date)}
          </time>
        ) : null}
        <h2 className="mt-2 font-header group-hover:underline text-charcoal">
          {note.title}
        </h2>
        {note.description ? (
          <p className="mt-3 max-w-2xl font-header text-lg font-light leading-relaxed text-charcoal">
            {note.description}
          </p>
        ) : null}
      </Link>
      {note.tags.length > 0 ? (
        <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
          {note.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-grey px-3 py-1 font-header text-xs font-light uppercase tracking-wide text-charcoal"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
