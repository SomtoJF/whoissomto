import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import MarkdownRenderer from "../components/notes/MarkdownRenderer";
import { formatNoteDate } from "../lib/notes/format";
import NotesStatus from "../components/notes/NotesStatus";
import { useNote, useNotes } from "../lib/notes/hooks";

export default function NotePage() {
	const { slug } = useParams<{ slug: string }>();
	const { data: notes } = useNotes();
	const { data: note, isPending, isError, error } = useNote(slug);

	useEffect(() => {
		const previous = document.title;
		if (note?.title) {
			document.title = `${note.title} — Somto`;
		}
		return () => {
			document.title = previous;
		};
	}, [note?.title]);

	return (
		<AnimatedPage
			id="note-page"
			className="box-border min-h-screen w-full bg-white font-header font-light"
		>
			<article className="mx-auto max-w-screen-md px-[5%] pb-24 pt-[12vh]">
				<p className="text-sm uppercase tracking-[0.2em] text-charcoal">
					<Link to="/" className="link-underline text-inherit no-underline">
						Home
					</Link>
					<span className="mx-2">/</span>
					<Link
						to="/notes"
						className="link-underline text-inherit no-underline"
					>
						Notes
					</Link>
				</p>

				{isPending ? <NotesStatus message="Loading note…" /> : null}
				{isError ? (
					<NotesStatus
						message={error.message || "This note could not be found."}
						action={
							<Link
								to="/notes"
								className="link-underline mt-4 inline-block text-inherit no-underline"
							>
								Back to notes
							</Link>
						}
					/>
				) : null}

				{note ? (
					<>
						{note.date ? (
							<time
								dateTime={note.date}
								className="mt-8 block text-sm text-charcoal"
							>
								{formatNoteDate(note.date)}
							</time>
						) : (
							<div className="mt-8" />
						)}
						<h1 className="mt-3 font-display text-[clamp(36px,6vw,64px)] font-extralight leading-tight text-black">
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
							<MarkdownRenderer content={note.content} notes={notes} />
						</div>
					</>
				) : null}
			</article>
		</AnimatedPage>
	);
}
