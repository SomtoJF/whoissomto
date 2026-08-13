import { useLenis } from "@studio-freight/react-lenis";
import { MouseEvent } from "react";

export default function SpaNavbar() {
	const lenis = useLenis();

	const scrollToSection = (
		event: MouseEvent<HTMLAnchorElement>,
		target: string
	) => {
		event.preventDefault();
		lenis?.scrollTo(target, { duration: 1.5 });
	};

	return (
		<nav
			id="spa-navbar"
			className="fixed z-10 box-border flex h-[10vh] w-full items-center justify-between bg-transparent px-[5%] font-header font-light text-white mix-blend-difference"
		>
			<div>
				Francis Somtochukwu{" "}
				<span className="max-[700px]:hidden">Jeremy</span>
			</div>
			<ul className="flex list-none justify-between gap-5">
				<li>
					<a
						href="#spa-projects"
						onClick={(event) => scrollToSection(event, "#spa-projects")}
						className="link-underline link-underline-white text-inherit no-underline hover:underline"
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href="#info"
						onClick={(event) => scrollToSection(event, "#info")}
						className="link-underline link-underline-white text-inherit no-underline hover:underline"
					>
						Info
					</a>
				</li>
				<li>
					<a
						href="https://rewrite-blog.vercel.app"
						target="_blank"
						rel="noopener noreferrer"
						className="link-underline link-underline-white text-inherit no-underline hover:underline"
					>
						Blog
					</a>
				</li>
			</ul>
		</nav>
	);
}
