import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";
import { Link } from "react-router-dom";
import type { Components } from "react-markdown";
import type { ReactNode } from "react";
import { remarkObsidian } from "../../lib/notes/remark/obsidian";
import { remarkCallouts } from "../../lib/notes/remark/callouts";
import type { NoteMeta } from "../../lib/notes/types";
import Callout from "./Callout";
import ObsidianEmbed from "./ObsidianEmbed";
import "katex/dist/katex.min.css";
import "highlight.js/styles/github.css";

type MarkdownRendererProps = {
	content: string;
	notes?: NoteMeta[];
};

export default function MarkdownRenderer({
	content,
	notes,
}: MarkdownRendererProps) {
	const components = {
		a: ({ href, children }) => {
			if (href?.startsWith("/")) {
				return (
					<Link to={href} className="note-link">
						{children}
					</Link>
				);
			}

			return (
				<a
					href={href}
					className="note-link"
					target="_blank"
					rel="noopener noreferrer"
				>
					{children}
				</a>
			);
		},
		callout: ({
			type,
			title,
			children,
		}: {
			type?: string;
			title?: string;
			children?: ReactNode;
		}) => (
			<Callout type={type} title={title}>
				{children}
			</Callout>
		),
		obsidianembed: ({ target, alt }: { target?: string; alt?: string }) => (
			<ObsidianEmbed target={target} alt={alt} />
		),
	} as Components & {
		callout: typeof Callout;
		obsidianembed: typeof ObsidianEmbed;
	};

	return (
		<div className="note-prose">
			<Markdown
				remarkPlugins={[
					remarkGfm,
					remarkMath,
					remarkCallouts,
					[remarkObsidian, { notes }],
				]}
				rehypePlugins={[rehypeSlug, rehypeKatex, rehypeHighlight]}
				components={components}
			>
				{content}
			</Markdown>
		</div>
	);
}
