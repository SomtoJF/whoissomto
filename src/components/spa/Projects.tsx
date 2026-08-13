import myProjects from "../../data/Projects";
import SpaProjectcard from "./SpaProjectcard";
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
				const scrollElementWidth = scrollElement!.scrollWidth;
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
				scrub: true,
				end: "top -50%",
				pin: "#spa-projects",
				anticipatePin: 1,
			});
		}
	});

	return (
		<div id="trigger" className="max-[650px]:overflow-auto">
			<div
				id="projects-container"
				className="grid auto-cols-[max(320px,30vw)] grid-flow-col grid-rows-1 gap-x-10"
			>
				{myProjects.map((project) => (
					<SpaProjectcard {...project} key={project.githubLink} />
				))}
			</div>
		</div>
	);
}
