import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import SpaNavbar from "../components/spa/SpaNavbar";
import Footer from "../components/spa/Footer";

export default function SinglePageLayout() {
	return (
		<ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothTouch: true }}>
			<HashScroller />
			<SpaNavbar />
			<Outlet />
			<Footer />
		</ReactLenis>
	);
}

function HashScroller() {
	const location = useLocation();
	const lenis = useLenis();

	useEffect(() => {
		if (location.pathname !== "/" || !location.hash) return;

		const timeout = window.setTimeout(() => {
			lenis?.scrollTo(location.hash, { duration: 1.5 });
		}, 150);

		return () => window.clearTimeout(timeout);
	}, [location.pathname, location.hash, lenis]);

	return null;
}
