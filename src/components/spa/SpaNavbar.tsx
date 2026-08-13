import { useLenis } from "@studio-freight/react-lenis";
import { MouseEvent } from "react";
import { Link, useLocation } from "react-router-dom";

export default function SpaNavbar() {
	const lenis = useLenis();
	const location = useLocation();
	const onHome = location.pathname === "/";

	const scrollToSection = (
		event: MouseEvent<HTMLAnchorElement>,
		target: string,
	) => {
		if (!onHome) return;
		event.preventDefault();
		lenis?.scrollTo(target, { duration: 1.5 });
	};

	return (
		<nav
			id="spa-navbar"
			className="fixed z-10 box-border h-[10vh] w-full bg-transparent font-header font-light text-white mix-blend-difference"
		>
			<div className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-[5%]">
				<Link to="/" className="text-inherit no-underline">
					Francis Somtochukwu{" "}
					<span className="max-[700px]:hidden">Jeremy</span>
				</Link>
				<ul className="flex list-none justify-between gap-5">
					<li>
						<Link
							to="/#spa-projects"
							onClick={(event) => scrollToSection(event, "#spa-projects")}
							className="link-underline link-underline-white text-inherit no-underline hover:underline"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							to="/#info"
							onClick={(event) => scrollToSection(event, "#info")}
							className="link-underline link-underline-white text-inherit no-underline hover:underline"
						>
							Info
						</Link>
					</li>
					<li>
						<Link
							to="/notes"
							className="link-underline link-underline-white text-inherit no-underline hover:underline"
						>
							Notes
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
