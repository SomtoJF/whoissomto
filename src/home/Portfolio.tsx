"use client";

import AnimatedCursor from "react-animated-cursor";
import SpaHero from "@/components/spa/SpaHero";
import SpaProjects from "@/components/spa/SpaProjects";
import SpaInfo from "@/components/spa/SpaInfo";

export default function Portfolio() {
	const showCursor =
		typeof window !== "undefined" ? window.innerWidth > 900 : false;

	return (
		<div
			id="spa-portfolio"
			className="box-border w-full bg-spa-black"
		>
			{showCursor ? (
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
			) : null}
			<SpaHero />
			<SpaProjects />
			<SpaInfo />
		</div>
	);
}
