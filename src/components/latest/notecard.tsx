import Link from "next/link";
import type { NoteMeta } from "../../lib/notes/types";
import { formatNoteDate } from "../../lib/notes/format";

type NoteCardProps = {
  note: NoteMeta;
};

export default function NoteCard({ note }: NoteCardProps) {
  const dateStr = note.date ? formatNoteDate(note.date) : "";
  const title = note.title || "";
  const description = note.description || "";

  // Full text for tooltip
  const fullText = `${dateStr}${dateStr ? " - " : ""}${title}${description ? ": " + description : ""}`;

  return (
    <Link
      href={`/blog/${note.slug}`}
      className="block no-underline text-indigo-700 hover:text-indigo-900 font-regular font-light group w-fit max-w-full"
      title={fullText}
    >
      <p className={`truncate text-indigo-700 font-regular `}>
        <span className="text-red-600 group-hover:underline" title={title}>
          {title}
        </span>
        {/* {dateStr && <span className="text-yellow-700"> - {dateStr}</span>} */}
        {description && (
          <>
            <span>: </span>
            <span title={description} className="w-full truncate">
              {description}
            </span>
          </>
        )}
      </p>
    </Link>
  );
}
