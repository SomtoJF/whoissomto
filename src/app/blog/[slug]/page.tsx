import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarkdownRenderer from "@/components/notes/MarkdownRenderer";
import { formatNoteDate } from "@/lib/notes/format";
import { getNoteOrNull, getNotes, resolveNoteAssets } from "@/lib/notes/github";
import { SITE_URL } from "@/lib/site";
import Link from "next/link";
import previewImage from "../../../../public/footer_image.jpeg";

export const revalidate = 60;

type NotePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = await getNoteOrNull(slug);
  if (!note) {
    return { title: "Note not found" };
  }

  const title = note.title;
  const description = note.description || "A note by Somto.";
  const url = `${SITE_URL}/blog/${note.slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title}`,
      siteName: "Somtochukwu Francis",
      description,
      url,
      type: "article",
      images: [{ url: previewImage.src }],
    },
    twitter: {
      card: "summary",
      title: `${title}`,
      site: "@somtochukwu",
      description,
      images: [{ url: previewImage.src }],
    },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = await getNoteOrNull(slug);
  if (!note) {
    notFound();
  }

  const [notes, assets] = await Promise.all([
    getNotes(),
    resolveNoteAssets(note.content),
  ]);

  return (
    <article className="w-full pb-24">
      <div>
        <div className="w-full flex font-regular items-center text-lg h-6">
          <Link
            href="/"
            className="font-bold transition-all duration-100 hover:underline"
          >
            home
          </Link>
          /
          <Link href="/blog" className="font-bold">
            blog
          </Link>
          /<h4 className=" text-gray-500">{note.slug}</h4>
        </div>
      </div>

      {note.date ? (
        <time dateTime={note.date} className="mt-8 block text-sm text-charcoal">
          {formatNoteDate(note.date)}
        </time>
      ) : (
        <div className="mt-8" />
      )}
      <h1 className="mt-3 font-regular text-[clamp(36px,3vw,64px)] font-extralight leading-tight text-black">
        {note.title}
      </h1>
      {note.description ? (
        <p className="mt-4 text-lg font-light leading-relaxed text-charcoal">
          {note.description}
        </p>
      ) : null}
      {note.tags.length > 0 ? (
        <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
          {note.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-grey px-3 py-1 text-xs uppercase tracking-wide text-charcoal"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="mt-12">
        <MarkdownRenderer
          content={note.content}
          notes={notes}
          assets={assets}
        />
      </div>
    </article>
  );
}
