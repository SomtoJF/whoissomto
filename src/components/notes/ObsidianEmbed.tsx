import Link from "next/link";
import { slugify } from "../../lib/notes/parser";

const IMAGE_EXT = /\.(png|jpe?g|gif|webp|svg|avif|bmp|ico)$/i;

type EmbedKind = "image" | "note" | "unknown";

type ObsidianEmbedProps = {
	target?: string;
	alt?: string;
	assets?: Record<string, string>;
};

export default function ObsidianEmbed({
	target = "",
	alt,
	assets,
}: ObsidianEmbedProps) {
	const kind = classifyEmbed(target);
	if (kind === "image") {
		return <ImageEmbed target={target} alt={alt} src={assets?.[target]} />;
	}
	if (kind === "note") {
		return (
			<Link
				href={`/notes/${slugify(target)}`}
				className="link-underline my-4 inline-block font-header font-light text-inherit no-underline"
			>
				{alt || target}
			</Link>
		);
	}
	return (
		<span className="font-header text-sm font-light text-charcoal">
			Unsupported embed: {target}
		</span>
	);
}

function classifyEmbed(target: string): EmbedKind {
	if (IMAGE_EXT.test(target)) return "image";
	if (target.trim()) return "note";
	return "unknown";
}

function ImageEmbed({
	target,
	alt,
	src,
}: {
	target: string;
	alt?: string;
	src?: string;
}) {
	if (!src) {
		return (
			<span className="font-header text-sm font-light text-charcoal">
				Missing image: {alt || target}
			</span>
		);
	}

	return (
		// GitHub raw URLs vary in size; keep native img to avoid next/image config.
		// eslint-disable-next-line @next/next/no-img-element
		<img src={src} alt={alt || target} className="my-6 max-w-full rounded-md" />
	);
}
