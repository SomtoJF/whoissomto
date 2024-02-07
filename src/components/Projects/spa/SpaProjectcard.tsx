import { ArrowRightOutlined } from "@ant-design/icons";
import { Project } from "../../../Types/Projects";
import "./SpaProjectCard.styles.sass";

export default function SpaProjectcard({
	name,
	description,
	mockupUrl,
	technologies,
	githubLink,
	liveLink,
}: Project) {
	return (
		<article className="spa-project-card">
			<figure>
				<img src={mockupUrl} alt={`${name} image`} />
			</figure>
			<div className="title-links">
				<p>{name}</p>
				<div>
					<a href={githubLink} target="_blank">
						GitHub <ArrowRightOutlined />
					</a>
					{liveLink && (
						<a href={liveLink} target="_blank">
							Live <ArrowRightOutlined />
						</a>
					)}
				</div>
			</div>
			<p>{description}</p>
			<div className="technologies">
				{technologies.map((technology) => (
					<span>{technology.toUpperCase()}</span>
				))}
			</div>
		</article>
	);
}
