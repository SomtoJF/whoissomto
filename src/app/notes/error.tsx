"use client";

export default function NotesError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<section className="mx-auto max-w-screen-md px-[5%] py-24">
			<h1 className="font-display text-4xl font-extralight text-black">
				Could not load notes
			</h1>
			<p className="mt-4 text-charcoal">{error.message}</p>
			<button
				type="button"
				onClick={reset}
				className="link-underline mt-8 font-header font-light"
			>
				Try again
			</button>
		</section>
	);
}
