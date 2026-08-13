import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getAsset } from "../../lib/notes/github";
import { slugify } from "../../lib/notes/parser";

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i;

type EmbedKind = "image" | "note" | "unknown";

type ObsidianEmbedProps = {
	target?: string;
	alt?: string;
};

const embedResolvers: Record<
	EmbedKind,
	(target: string, alt?: string) => JSX.Element
> = {
	image: (target, alt) => <ImageEmbed target={target} alt={alt} />,
	note: (target, alt) => (
		<Link
			to={`/notes/${slugify(target)}`}
			className="link-underline my-4 inline-block font-header font-light text-inherit no-underline"
		>
			{alt || target}
		</Link>
	),
	unknown: (target) => (
		<span className="font-header text-sm font-light text-charcoal">
			Unsupported embed: {target}
		</span>
	),
};

export default function ObsidianEmbed({ target = "", alt }: ObsidianEmbedProps) {
	const kind = classifyEmbed(target);
	return embedResolvers[kind](target, alt || undefined);
}

function classifyEmbed(target: string): EmbedKind {
	if (IMAGE_EXT.test(target)) return "image";
	if (target.trim()) return "note";
	return "unknown";
}

function ImageEmbed({ target, alt }: { target: string; alt?: string }) {
	const { data: src, isLoading, isError } = useQuery({
		queryKey: ["notes", "asset", target],
		queryFn: () => getAsset(target),
		staleTime: 5 * 60 * 1000,
	});

	if (isLoading) {
		return (
			<span className="my-6 block h-40 animate-pulse rounded-md bg-grey/60" />
		);
	}

	if (isError || !src) {
		return (
			<span className="font-header text-sm font-light text-charcoal">
				Missing image: {alt || target}
			</span>
		);
	}

	return (
		<img
			src={src}
			alt={alt || target}
			className="my-6 max-w-full rounded-md"
		/>
	);
}
