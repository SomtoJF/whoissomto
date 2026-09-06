import Link from "next/link";
import type { NoteMeta } from "../../lib/notes/types";
import { formatNoteDate } from "../../lib/notes/format";

type NoteCardProps = {
  note: NoteMeta;
  isLast?: boolean;
};

export default function NoteCard({ note, isLast }: NoteCardProps) {
  const dateStr = note.date ? formatNoteDate(note.date) : "";
  const title = note.title || "";
  const description = note.description || "";

  // Full text for tooltip
  const fullText = `${dateStr}${dateStr ? " - " : ""}${title}${description ? ": " + description : ""}`;

  return (
    <Link
      href={`/blog/${note.slug}`}
      className="block no-underline text-indigo-700 hover:text-indigo-900 font-regular font-light group"
      title={fullText}
    >
      <p
        className={`truncate text-indigo-700 font-regular py-2 border-t border-gray-300 ${isLast ? "border-b" : ""}`}
      >
        {dateStr && <span>{dateStr}</span>}
        {dateStr && <span> - </span>}
        <span className="text-red-600 group-hover:underline" title={title}>
          {title}
        </span>
        {description && (
          <>
            <span>: </span>
            <span title={description}>{description}</span>
          </>
        )}
      </p>
    </Link>
  );
}
