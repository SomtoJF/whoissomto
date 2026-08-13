import { ArrowRightOutlined } from "@ant-design/icons";
import { Project } from "../../Types/Projects";

export default function SpaProjectcard({
	name,
	description,
	mockupUrl,
	technologies,
	githubLink,
	liveLink,
}: Project) {
	return (
		<article className="font-header font-light text-grey transition-[color] duration-500 hover:text-white">
			<figure className="m-0 flex h-[40vh] w-full items-center justify-center rounded-[5px] bg-black p-0 max-[810px]:h-[30vh]">
				{mockupUrl ? (
					<img
						src={mockupUrl}
						alt={`${name} image`}
						className="h-auto w-4/5"
					/>
				) : (
					<span className="font-display text-[4rem] font-extralight text-white/40">
						{name.charAt(0)}
					</span>
				)}
			</figure>
			<div className="flex items-center justify-between">
				<p className="m-0">{name}</p>
				<div className="flex justify-between gap-[15px]">
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
			</div>
			<p className="m-0">{description}</p>
			<div className="mt-5 flex flex-wrap gap-2.5 [&>*]:block [&_span]:border [&_span]:border-solid [&_span]:border-black [&_span]:px-2.5 [&_span]:py-1.5 [&_span]:font-header [&_span]:text-[0.7rem] [&_span]:font-light">
				{technologies.map((technology) => (
					<span key={technology}>{technology.toUpperCase()}</span>
				))}
			</div>
		</article>
	);
}
