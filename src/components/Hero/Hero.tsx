import "./Hero.styles.sass";
import Marquee from "react-fast-marquee";
import ScrollNav from "./ScrollNav";
import { useRef } from "react";

export default function Hero() {
	const heroRef = useRef<HTMLElement>(null);
	return (
		<section id="hero" ref={heroRef}>
			<div>
				<ul id="welcome-message">
					<li>WELCOME TO MY WORLD</li>
				</ul>
				<p id="intro">
					Final year Software Engineering Student/
					<em>Fullstack Software Developer</em> on a mission to build simple
					solutions to <em>complex</em> real-world problems.
				</p>
			</div>
			<ScrollNav heroRef={heroRef} />
			<div id="marquee">
				<Marquee pauseOnHover speed={100} delay={2} autoFill>
					<div>FRANCIS SOMTOCHUKWU</div>
					<div style={{ width: "50px" }}></div>
				</Marquee>
			</div>
		</section>
	);
}
