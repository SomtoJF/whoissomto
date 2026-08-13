import type { ReactNode } from "react";

type NotesStatusProps = {
	message: string;
	action?: ReactNode;
};

export default function NotesStatus({ message, action }: NotesStatusProps) {
	return (
		<div className="py-16 text-charcoal">
			<p>{message}</p>
			{action}
		</div>
	);
}
