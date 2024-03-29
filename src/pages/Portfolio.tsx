import Hero from "../components/Hero/Hero";
import AnimatedCursor from "react-animated-cursor";
import "./Portfolio.styles.sass";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";

export default function Portfolio() {
	return (
		<AnimatedPage id="portfolio-page">
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
			<Hero />
		</AnimatedPage>
	);
}
