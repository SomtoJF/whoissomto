import type { ReactNode } from "react";
import Link from "next/link";
import Footer from "@/components/spa/Footer";

export default function NotesLayout({ children }: { children: ReactNode }) {
	return (
		<div className="box-border min-h-screen w-full bg-white font-header font-light text-black">
			<header className="mx-auto flex max-w-screen-xl items-center justify-between px-[5%] py-8">
				<Link href="/" className="link-underline text-inherit no-underline">
					Home
				</Link>
				<Link
					href="/notes"
					className="link-underline text-inherit no-underline"
				>
					Notes
				</Link>
			</header>
			{children}
			<Footer />
		</div>
	);
}
