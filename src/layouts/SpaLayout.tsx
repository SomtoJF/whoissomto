import { Outlet } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";
import SpaNavbar from "../components/Navbar/SpaNavbar";

export default function SinglePageLayout() {
	return (
		<ReactLenis root options={{ lerp: 0.07, duration: 1.5, smoothTouch: true }}>
			<SpaNavbar />
			<Outlet />
		</ReactLenis>
	);
}
