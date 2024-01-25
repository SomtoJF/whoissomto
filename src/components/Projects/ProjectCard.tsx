import { Project } from "../../Types/Projects";
import "./ProjectCard.styles.sass";
import { ArrowRightOutlined } from "@ant-design/icons";

export default function ProjectCard(project: Project) {
	return (
		<div className="project-card">
			<figure></figure>
			<div className="name-links">
				<h2>{project.name}</h2>
				<div className="links">
					<a href={project.githubLink} target="_blank">
						GITHUB
						<ArrowRightOutlined style={{ marginLeft: "5px" }} />
					</a>
					{project.liveLink && (
						<a href={project.liveLink} target="_blank">
							LIVE
							<ArrowRightOutlined style={{ marginLeft: "5px" }} />
						</a>
					)}
				</div>
			</div>

			<p>{project.description}</p>
			<div className="technologies">
				{project.technologies.map((technology) => (
					<span>{technology.toUpperCase()}</span>
				))}
			</div>
		</div>
	);
}
