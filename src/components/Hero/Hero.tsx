import "./Hero.styles.sass";
import Marquee from "react-fast-marquee";
import ScrollNav from "./ScrollNav";

export default function Hero() {
	return (
		<section id="hero">
			<div>
				<ul id="welcome-message">
					<li>WELCOME TO MY WORLD</li>
				</ul>
				<p>
					Final year Software Engineering Student/
					<em>Fullstack Software Developer</em> on a mission to build simple
					solutions to <em>complex</em> real-world problems.
				</p>
			</div>
			<ScrollNav />
			<div id="marquee">
				<Marquee pauseOnHover speed={100} delay={2} autoFill>
					<div>FRANCIS SOMTOCHUKWU</div>
					<div style={{ width: "50px" }}></div>
				</Marquee>
			</div>
		</section>
	);
}
