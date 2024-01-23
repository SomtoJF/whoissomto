import "./ScrollNav.styles.sass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useRef } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface props {
	heroRef: RefObject<HTMLElement>;
}

export default function ScrollNav({ heroRef }: props) {
	const scrollElement = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		const timeline = gsap.timeline();

		// Get the actual width of the element
		const scrollElementWidth = scrollElement.current!.scrollWidth;

		// Calculate the xPercent value to position the end 5% from the right
		const scrollToEndXPercent =
			(-(scrollElementWidth - 0.7 * window.innerWidth) /
				scrollElement.current!.offsetWidth) *
			100;

		timeline.to("#scroll-trigger", {
			xPercent: scrollToEndXPercent,
			delay: 0,
		});

		ScrollTrigger.create({
			trigger: "#welcome-message",
			animation: timeline,
			start: "top 9%",
			// markers: true,
			scrub: true,
			end: "top 1%",
			pin: heroRef.current,
		});
	});

	return (
		<div style={{ overflowX: "hidden" }} id="scroll-container">
			<div id="scroll-trigger" ref={scrollElement}>
				<a href={"#about"} className="scroll-item">
					<p>
						<em>Who</em> is Francis Somtochukwu? His life, goals and vision.
					</p>
					<div>About</div>
					<figure></figure>
				</a>
				<a href={"#experience"} className="scroll-item">
					<p>
						<em>Where</em> he has worked in the past and his contribution to
						making sure the organization realizes their goals.
					</p>
					<div>Experience</div>
					<figure></figure>
				</a>
				<a href={"projects"} className="scroll-item">
					<p>
						<em>What</em> he has worked on and the technologies that gave them
						life.
					</p>
					<div>Projects</div>
					<figure></figure>
				</a>
				<a href={"#contact"} className="scroll-item">
					<p>
						<em>How</em> can you reach him? It's easier than you think
					</p>
					<div>Contact</div>
					<figure></figure>
				</a>
			</div>
		</div>
	);
}
