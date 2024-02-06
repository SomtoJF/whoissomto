import AnimatedPage from "../../components/AnimatedPage/AnimatedPage";
import SpaHero from "../../components/Hero/SpaHero";
import SpaProjects from "../../components/Projects/spa/SpaProjects";
import "./Portfolio.styles.sass";

export default function Portfolio() {
	return (
		<AnimatedPage id="spa-portfolio">
			<SpaHero />
			<SpaProjects />
		</AnimatedPage>
	);
}
