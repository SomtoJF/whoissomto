"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactLenis, { useLenis } from "@studio-freight/react-lenis";
import SpaNavbar from "@/components/spa/SpaNavbar";
import Footer from "@/components/spa/Footer";
import Portfolio from "@/home/Portfolio";

export default function HomePage() {
	return (
		<ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothTouch: true }}>
			<HashScroller />
			<SpaNavbar />
			<Portfolio />
			<Footer />
		</ReactLenis>
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
