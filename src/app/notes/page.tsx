import type { Metadata } from "next";
import Link from "next/link";
import NoteCard from "@/components/notes/NoteCard";
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
		<section className="mx-auto max-w-screen-xl px-[5%] pb-24">
			<p className="text-sm uppercase tracking-[0.2em] text-charcoal">
				<Link href="/" className="link-underline text-inherit no-underline">
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
				{errorMessage ? <NotesStatus message={errorMessage} /> : null}
				{!errorMessage && notes.length === 0 ? (
					<NotesStatus message="No published notes in Blog yet." />
				) : null}
				{notes.length > 0 ? (
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
