import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import "./Portfolio.styles.sass";

export default function Portfolio() {
	return (
		<div id="portfolio-page">
			<Hero />
			<About />
			<Experience />
		</div>
	);
}
