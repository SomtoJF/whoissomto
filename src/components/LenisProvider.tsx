"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import ReactLenis, { useLenis } from "@studio-freight/react-lenis";

export default function LenisProvider({ children }: { children: ReactNode }) {
	return (
		<ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothTouch: true }}>
			<RouteScroll />
			{children}
		</ReactLenis>
	);
}

function RouteScroll() {
	const pathname = usePathname();
	const lenis = useLenis();

	useEffect(() => {
		if (window.location.hash) return;
		lenis?.scrollTo(0, { immediate: true });
	}, [pathname, lenis]);

	return null;
}
