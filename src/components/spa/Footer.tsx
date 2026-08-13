import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
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
			<svg
				viewBox="0 0 250 90"
				className="w-full rounded-b-[15px] bg-white max-[1000px]:hidden [&_text]:font-display [&_text]:text-[6px] [&_text]:uppercase [&_text]:text-black"
			>
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
		<div className="relative flex h-[60vh] overflow-hidden bg-black font-header">
			<motion.div
				style={{ y }}
				className="box-border flex h-full w-full flex-col items-start justify-center bg-[#000] py-[5%]"
			>
				<div className="mx-auto w-full max-w-screen-xl px-[5%]">
					<h1 className="font-display text-[clamp(40px,7vw,94px)] font-extralight text-white">
						* Let's Chat!
					</h1>
					<a
						href="mailto:somtochukwujf@gmail.com"
						className="my-[5%] inline-block text-[clamp(16px,5vw,32px)] font-light text-white underline"
					>
						somtochukwujf@gmail.com
					</a>
				</div>
				<div id="links-copy" className="absolute bottom-0 w-full">
					<div className="mx-auto max-w-screen-xl px-[5%]">
						<Divider
							sx={{
								backgroundColor: "#D5D5D7",
								width: "100%",
								color: "#F4F4F4",
								margin: "10px 0",
							}}
						/>
						<div
							id="all-links"
							className="box-border flex w-full items-center justify-between text-[clamp(13px,3vw,16px)] font-light text-white"
						>
							<div className="flex gap-5 [&_a]:font-light [&_a]:text-white [&_a]:no-underline">
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
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
								></a>
							</div>
							<p>© Francis Somtochukwu</p>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
