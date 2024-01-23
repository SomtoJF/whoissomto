import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";

export default function Layout() {
	return (
		<ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothTouch: true }}>
			<Navbar />
			<Outlet />
		</ReactLenis>
	);
}
