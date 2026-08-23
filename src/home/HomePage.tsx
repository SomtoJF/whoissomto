"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLenis } from "@studio-freight/react-lenis";
import SpaNavbar from "@/components/spa/SpaNavbar";
import Footer from "@/components/spa/Footer";
import Portfolio from "@/home/Portfolio";

export default function HomePage() {
	return (
		<>
			<HashScroller />
			<SpaNavbar />
			<Portfolio />
			<Footer />
		</>
	);
}

function HashScroller() {
	const pathname = usePathname();
	const lenis = useLenis();

	useEffect(() => {
		if (pathname !== "/") return;

		const scrollToHash = () => {
			const hash = window.location.hash;
			if (!hash) return;
			window.setTimeout(() => {
				lenis?.scrollTo(hash, { duration: 1.5 });
			}, 150);
		};

		scrollToHash();
		window.addEventListener("hashchange", scrollToHash);
		return () => window.removeEventListener("hashchange", scrollToHash);
	}, [pathname, lenis]);

	return null;
}
