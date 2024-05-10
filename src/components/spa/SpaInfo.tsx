import skills from "../../data/Skills";
import myEducation from "../../data/Education";
import InfoListItem from "./InfoListItem";
import "./styles/SpaInfo.styles.sass";
import { v4 as uuidv4 } from "uuid";

const personalData = [
	{
		title: "About",
		render: () => (
			<p>
				I am currently a Software Engineer at{" "}
				<a href="https://www.sefara.com/" target="_blank">
					Sefara
				</a>{" "}
				working predominantly with web-based technologies. I have a strong
				affinity towards complex things. This fascination has led me to explore
				a few other tech disciplines in search of knowledge and sometimes, just
				plain fun. Some of the things which have piqued my interest in the past
				are Game Development, AI and machine learning as well as Embedded
				Systems among others. This broad spectrum of interests not only sharpens
				my skills but also keeps my approach to technology fresh and
				enthusiastic.
			</p>
		),
	},
	{
		title: "Experience",
		render: () => <></>,
	},
	{
		title: "Education",
		render: () => (
			<div id="education-container">
				<h3>{myEducation.program}</h3>
				<small>{`${myEducation.period.start} - ${myEducation.period.end}`}</small>
				<p>
					{myEducation.school}, {myEducation.location}
				</p>
				<p>
					<b>Final Year Project:</b> Titled "Design and Development of an
					AI-Enhanced Online Examination Platform" Involved the engineering of
					an Examination platform which uses Text Similarity (with Cosine
					Similarity) and Textual Entailment to grade open-ended questions.
					Repository{" "}
					<a
						href="https://github.com/SomtoJF/Academia"
						target="_blank"
						rel="noopener noreferrer"
					>
						here
					</a>
				</p>
			</div>
		),
	},
	{
		title: "Skills",
		render: () => (
			<div id="skills-container">
				{skills.sort().map((skill) => (
					<span className="skill-item">{skill.toUpperCase()}</span>
				))}
			</div>
		),
	},
];

export default function SpaInfo() {
	return (
		<div id="info">
			<h1 id="info-header">Info</h1>
			{personalData.map((data) => (
				<InfoListItem key={uuidv4()} title={data.title}>
					{data.render()}
				</InfoListItem>
			))}
		</div>
	);
}
