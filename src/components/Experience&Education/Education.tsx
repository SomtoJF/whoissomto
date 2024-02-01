import myEducation from "../../data/Education";
import EducationCard from "./EducationCard";
import "./Education.styles.sass";

export default function Education() {
	return (
		<section id="education">
			<h3>Education</h3>
			{myEducation.map((item) => (
				<EducationCard {...item} />
			))}
		</section>
	);
}
