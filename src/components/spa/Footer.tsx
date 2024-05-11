import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import "./styles/Footer.styles.sass";
import { Divider } from "@mui/material";

export default function Footer() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,

		offset: ["start end", "end end"],
	});
	const paths = useRef<Array<SVGTextPathElement | null>>([]);

	useEffect(() => {
		scrollYProgress.on("change", (e) => {
			paths.current.forEach((path, i) => {
				if (path) path.setAttribute("startOffset", -40 + i * 40 + e * 40 + "%");
			});
		});
	}, []);

	return (
		<div ref={container} id="footer">
			<svg viewBox="0 0 250 90">
				<path
					fill="none"
					id="curve"
					d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
				/>

				<text>
					{[...Array(3)].map((_, i) => {
						return (
							<textPath
								key={i}
								ref={(ref) => (paths.current[i] = ref)}
								startOffset={i * 40 + "%"}
								href="#curve"
							>
								have something in mind?
							</textPath>
						);
					})}
				</text>
			</svg>
			<FooterContent scrollProgress={scrollYProgress} />
		</div>
	);
}

const FooterContent = ({
	scrollProgress,
}: {
	scrollProgress: MotionValue<number>;
}) => {
	const y = useTransform(scrollProgress, [0, 1], [-225, 0]);

	return (
		<div className="footer-content-container">
			<motion.div style={{ y }} className="contact-container">
				<h1>* Let's Chat!</h1>
				<a href="mailto:somtochukwjf@gmail.com">somtochukwjf@gmail.com</a>
				<div id="links-copy">
					<Divider />
					<div id="all-links">
						<div>
							<a
								href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
								target="_blank"
								rel="noopener noreferrer"
							>
								LinkedIn
							</a>
							<a
								href="https://github.com/SomtoJF"
								target="_blank"
								rel="noopener noreferrer"
							>
								GitHub
							</a>
							<a
								href="https://twitter.com/somtofrancis3"
								target="_blank"
								rel="noopener noreferrer"
							>
								Twitter
							</a>
							<a href="http://" target="_blank" rel="noopener noreferrer"></a>
						</div>
						<p>© Francis Somtochukwu</p>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
