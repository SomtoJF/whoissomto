import skills from "../../data/Skils";
import "./Skills.styles.sass";

export default function Skills() {
	return (
		<section id="skills">
			<h3>Skills</h3>
			<div id="skills-container">
				{skills.sort().map((skill) => (
					<span>{skill}</span>
				))}
			</div>
		</section>
	);
}
