import { ArrowRightOutlined } from "@ant-design/icons";
import { Project } from "../../Types/Projects";

export default function SpaProjectcard({
	name,
	description,
	technologies,
	githubLink,
	liveLink,
}: Project) {
	return (
		<article className="flex h-full flex-col font-header font-light text-grey transition-[color] duration-500 hover:text-white">
			<h2 className="m-0 font-display text-[clamp(2rem,4vw,3.5rem)] font-extralight leading-tight text-white">
				{name}
			</h2>
			<p className="mt-6 mb-0 flex-1 text-base leading-relaxed">{description}</p>
			<div className="mt-8 flex gap-[15px]">
				<a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-inherit no-underline [&_svg]:rotate-45 [&_svg]:transition-transform [&_svg]:duration-[250ms] hover:[&_svg]:rotate-0"
				>
					GitHub <ArrowRightOutlined />
				</a>
				{liveLink && (
					<a
						href={liveLink}
						target="_blank"
						rel="noopener noreferrer"
						className="text-inherit no-underline [&_svg]:rotate-45 [&_svg]:transition-transform [&_svg]:duration-[250ms] hover:[&_svg]:rotate-0"
					>
						Live <ArrowRightOutlined />
					</a>
				)}
			</div>
			<div className="mt-5 flex flex-wrap gap-2.5">
				{technologies.map((technology) => (
					<span
						key={technology}
						className="border border-solid border-white/40 px-2.5 py-1.5 text-[0.7rem] font-light"
					>
						{technology.toUpperCase()}
					</span>
				))}
			</div>
		</article>
	);
}
