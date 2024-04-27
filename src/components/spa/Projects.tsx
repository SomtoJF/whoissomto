import myProjects from "../../data/Projects";
import SpaProjectcard from "./SpaProjectcard";
import "./styles/Projects.styles.sass";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
	useGSAP(() => {
		if (window.innerWidth > 650) {
			const timeline = gsap.timeline();
			const scrollElement = document.getElementById("projects-container");

			const scrollDistanceInPercent = () => {
				// Get the actual width of the element
				const scrollElementWidth = scrollElement!.scrollWidth;

				// Calculate the xPercent value to position the end 5% from the right
				const scrollToEndXPercent =
					(-(scrollElementWidth - 0.9 * window.innerWidth) /
						scrollElement!.offsetWidth) *
					100;

				return scrollToEndXPercent;
			};

			timeline.to("#projects-container", {
				xPercent: scrollDistanceInPercent,
				delay: 0,
			});

			ScrollTrigger.create({
				trigger: "#spa-projects-heading",
				animation: timeline,
				start: "top 10%",
				// markers: true,
				scrub: true,
				end: "top -50%",
				pin: "#spa-projects",
				anticipatePin: 1,
			});
		}
	});
	return (
		<div id="trigger">
			<div id="projects-container">
				{myProjects.map((project, index) => (
					<SpaProjectcard {...project} key={index + 0.223} />
				))}
			</div>
		</div>
	);
}
