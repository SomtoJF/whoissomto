import { Education } from "../../Types/Education";

export default function EducationCard({
	program,
	school,
	period,
	location,
}: Education) {
	return (
		<article>
			<div className="prog-loc">
				<h4>{program}</h4>
				<p>{`${period.start} - ${period.end}`}</p>
			</div>
			<p>{school + " " + location}</p>
		</article>
	);
}
