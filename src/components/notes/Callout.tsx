import { type ReactNode } from "react";

const CALLOUT_LABELS: Record<string, string> = {
	note: "Note",
	abstract: "Abstract",
	info: "Info",
	todo: "Todo",
	tip: "Tip",
	success: "Success",
	question: "Question",
	warning: "Warning",
	failure: "Failure",
	danger: "Danger",
	bug: "Bug",
	example: "Example",
	quote: "Quote",
	error: "Error",
};

const CALLOUT_STYLES: Record<string, string> = {
	note: "border-charcoal/20 bg-grey/30",
	info: "border-charcoal/20 bg-grey/30",
	abstract: "border-charcoal/20 bg-grey/30",
	tip: "border-charcoal/30 bg-white",
	success: "border-charcoal/30 bg-white",
	todo: "border-charcoal/20 bg-grey/30",
	question: "border-orange/50 bg-orange/10",
	warning: "border-orange bg-orange/10",
	danger: "border-red bg-red/10",
	error: "border-red bg-red/10",
	failure: "border-red bg-red/10",
	bug: "border-red bg-red/10",
	example: "border-charcoal/20 bg-grey/30",
	quote: "border-charcoal/20 bg-grey/20",
};

type CalloutProps = {
	type?: string;
	title?: string;
	children?: ReactNode;
};

export default function Callout({
	type = "note",
	title,
	children,
}: CalloutProps) {
	const kind = type.toLowerCase();
	const label = title || CALLOUT_LABELS[kind] || type;
	const styles = CALLOUT_STYLES[kind] ?? CALLOUT_STYLES.note;

	return (
		<aside
			data-callout={kind}
			className={`my-6 rounded-md border-l-4 px-4 py-3 font-header text-[0.95rem] font-light ${styles}`}
		>
			<p className="mb-2 font-medium tracking-wide">{label}</p>
			<div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">{children}</div>
		</aside>
	);
}
