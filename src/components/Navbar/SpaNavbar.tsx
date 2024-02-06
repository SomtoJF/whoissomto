import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./SpaNavbar.styles.sass";

gsap.registerPlugin(ScrollTrigger);

export default function SpaNavbar() {
	useGSAP(() => {
		const timeline = gsap.timeline();

		timeline.to("#spa-navbar", {
			color: "#f4f4f4",
		});

		ScrollTrigger.create({
			trigger: "#spa-projects",
			animation: timeline,
			start: "top 10%",
			scrub: true,
			end: "top -12%",
		});
	});
	return (
		<nav id="spa-navbar">
			<div>
				Francis Somtochukwu <span>Jeremy</span>
			</div>
			<ul>
				<li>
					<a href="#spa-projects">Projects</a>
				</li>
				<li>
					<a href="#info">Info</a>
				</li>
				<li>
					<a href="https://rewrite-blog.vercel.app" target="_blank">
						Blog
					</a>
				</li>
			</ul>
		</nav>
	);
}
