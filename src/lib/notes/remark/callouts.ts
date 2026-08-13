import type { Root, Paragraph, Text } from "mdast";
import { visit } from "unist-util-visit";

const CALLOUT_RE = /^\[!([a-zA-Z][\w-]*)\][ \t]*(.*)$/;

export function remarkCallouts() {
	return (tree: Root) => {
		visit(tree, "blockquote", (node) => {
			const first = node.children[0];
			if (!first || first.type !== "paragraph") return;

			const marker = extractCalloutMarker(first);
			if (!marker) return;

			if (first.children.length === 0) {
				node.children.shift();
			}

			node.data = {
				...node.data,
				hName: "callout",
				hProperties: {
					type: marker.type,
					title: marker.title,
				},
			};
		});
	};
}

function extractCalloutMarker(
	paragraph: Paragraph,
): { type: string; title: string } | undefined {
	const first = paragraph.children[0];
	if (!first || first.type !== "text") return undefined;

	const textNode = first as Text;
	const [firstLine, ...rest] = textNode.value.split("\n");
	const match = firstLine.trim().match(CALLOUT_RE);
	if (!match) return undefined;

	textNode.value = rest.join("\n");
	if (!textNode.value) {
		paragraph.children.shift();
	}

	return {
		type: match[1].toLowerCase(),
		title: match[2].trim(),
	};
}
