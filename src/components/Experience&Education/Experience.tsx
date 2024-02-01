import myExperience from "../../data/Experience";
import ExperienceCard from "./ExperienceCard";
import { v4 as uuidv4 } from "uuid";

export default function Experience() {
	return (
		<section>
			{myExperience.map((data) => (
				<ExperienceCard data={data} key={uuidv4()} />
			))}
		</section>
	);
}
