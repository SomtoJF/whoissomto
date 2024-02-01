import { Experience } from "../../Types/Experience";
import "./ExperienceCard.styles.sass";
import { v4 as uuidv4 } from "uuid";

interface props {
	data: Experience;
}

const ExperienceCard = ({ data }: props) => {
	return (
		<article className="experience-card">
			<h3>{data.position}</h3>
			<div className="location-period">
				<p>{data.company}</p>
				<p>{`${data.period.start} - ${data.period.end}`}</p>
				<p>{data.location}</p>
			</div>
			<p>{data.description}</p>
			<div className="tools">
				{data.softwareTools.map((tool) => (
					<span className="tool" key={uuidv4()}>
						{tool}
					</span>
				))}
			</div>
		</article>
	);
};

export default ExperienceCard;
