import Link from "next/link";

export default function NoteNotFound() {
	return (
		<section className="mx-auto max-w-screen-md px-[5%] py-24">
			<h1 className="font-display text-[clamp(36px,6vw,64px)] font-extralight text-black">
				Note not found
			</h1>
			<p className="mt-4 text-charcoal">
				That note is unpublished or does not exist.
			</p>
			<Link
				href="/notes"
				className="link-underline mt-8 inline-block text-inherit no-underline"
			>
				Back to notes
			</Link>
		</section>
	);
}
