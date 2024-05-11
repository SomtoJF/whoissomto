import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import SpaHero from "../components/spa/SpaHero";
import SpaProjects from "../components/spa/SpaProjects";
import AnimatedCursor from "react-animated-cursor";
import "./Portfolio.styles.sass";
import SpaInfo from "../components/spa/SpaInfo";

export default function Portfolio() {
	return (
		<AnimatedPage id="spa-portfolio">
			{window.innerWidth > 900 ? (
				<AnimatedCursor
					color="0,0,0,0"
					innerSize={5}
					outerSize={5}
					innerScale={1}
					outerScale={9}
					outerAlpha={0}
					outerStyle={{
						background: "white",
						mixBlendMode: "exclusion",
					}}
					trailingSpeed={1}
					showSystemCursor={true}
				/>
			) : (
				<></>
			)}
			<SpaHero />
			<SpaProjects />
			<SpaInfo />
		</AnimatedPage>
	);
}
