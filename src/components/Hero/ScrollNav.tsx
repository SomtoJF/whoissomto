import "./ScrollNav.styles.sass";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

gsap.registerPlugin(ScrollTrigger);

interface props {
	heroRef: RefObject<HTMLElement>;
}

export default function ScrollNav({ heroRef }: props) {
	const scrollElement = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (window.innerWidth > 1025) {
			const timeline = gsap.timeline();

			const scrollDistanceInPercent = () => {
				// Get the actual width of the element
				const scrollElementWidth = scrollElement.current!.scrollWidth;

				// Calculate the xPercent value to position the end 5% from the right
				const scrollToEndXPercent =
					(-(scrollElementWidth - 0.6 * window.innerWidth) /
						scrollElement.current!.offsetWidth) *
					100;

				return scrollToEndXPercent;
			};
			timeline.to("#welcome-section", {
				opacity: 0,
				duration: 0.1,
			});

			timeline.to(
				"#scroll-trigger",
				{
					xPercent: scrollDistanceInPercent,
					delay: 0,
				},
				"<25%"
			);

			ScrollTrigger.create({
				trigger: "#welcome-message",
				animation: timeline,
				start: "top 15%",
				// markers: true,
				scrub: true,
				end: "top -12%",
				pin: "#hero",
				anticipatePin: 1,
				pinnedContainer: heroRef.current,
			});
		}
	});

	return (
		<div id="scroll-container">
			<div id="scroll-trigger" ref={scrollElement}>
				<Link to={"/about"} className="scroll-item">
					<p>
						<em>Who</em> is Francis Somtochukwu? His life, goals and vision.
					</p>
					<figure>
						{" "}
						Who am I <ArrowRightOutlined />
					</figure>
				</Link>
				<Link to={"/experience"} className="scroll-item">
					<p>
						My <em>Professional</em> and <em>Academic</em> background.
					</p>
					<figure>
						Experience, Education & Skills. <ArrowRightOutlined />
					</figure>
				</Link>
				<Link to={"/projects"} className="scroll-item">
					<p>
						What <em>projects</em> I have worked on and the{" "}
						<em>technologies</em> that gave them life.
					</p>
					<figure>
						Projects. <ArrowRightOutlined />
					</figure>
				</Link>
				<a
					href={
						"https://rewrite-blog.vercel.app/account/QSyVTLz1OyYd6si6jvEVmRJFlGh2"
					}
					target="_blank"
					className="scroll-item"
				>
					<p>
						I sometimes share <em>knowledge</em> and past <em>experiences</em>{" "}
						on my blog.
					</p>
					<figure>
						My Blog. <ArrowRightOutlined />
					</figure>
				</a>
				<Link to={"/contact"} className="scroll-item">
					<p>Want to reach out to me? It's easier than you think</p>
					<figure>
						Contact Me. <ArrowRightOutlined />
					</figure>
				</Link>
			</div>
		</div>
	);
}
