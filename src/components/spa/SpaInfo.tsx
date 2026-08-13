import skills from "../../data/Skills";
import myEducation from "../../data/Education";
import InfoListItem from "./InfoListItem";
import { v4 as uuidv4 } from "uuid";
import myExperience from "../../data/Experience";

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
		render: () => (
			<div id="experience-container" className="flex flex-col gap-[10%]">
				{myExperience.map((experience, index) => {
					if (index === myExperience.length - 1) {
						return (
							<>
								<h3 className="m-0 flex text-base font-normal">
									{experience.position} | {experience.company}
								</h3>
								<small className="my-2.5">{`${experience.period.start} - ${experience.period.end}`}</small>
								<p>{experience.location}</p>
								<p>
									<b className="font-normal">Role Description: </b>
									{experience.description}
									<a href="#"> See More</a>
								</p>
							</>
						);
					}
				})}
			</div>
		),
	},
	{
		title: "Education",
		render: () => (
			<div id="education-container" className="flex flex-col gap-[10%]">
				<h3 className="m-0 flex text-base font-normal">{myEducation.program}</h3>
				<small className="my-2.5">{`${myEducation.period.start} - ${myEducation.period.end}`}</small>
				<p>
					{myEducation.school}, {myEducation.location}
				</p>
				<p>
					<b className="font-normal">Final Year Project:</b> Titled "Design and
					Development of an AI-Enhanced Online Examination Platform" Involved
					the engineering of an Examination platform which uses Text Similarity
					(with Cosine Similarity) and Textual Entailment to grade open-ended
					questions. Repository{" "}
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
			<div id="skills-container" className="flex flex-wrap gap-2.5">
				{skills.sort().map((skill) => (
					<span
						key={skill}
						className="border border-solid border-black px-1.5 py-0.5 text-[0.7rem] font-light"
					>
						{skill.toUpperCase()}
					</span>
				))}
			</div>
		),
	},
];

export default function SpaInfo() {
	return (
		<div
			id="info"
			className="relative z-[1] mt-[-5vh] min-h-screen rounded-t-[15px] bg-white pb-[10%] pt-[2.5%] font-header max-[1000px]:rounded-[15px] [&_a]:font-normal [&_a]:text-inherit [&_a]:no-underline hover:[&_a]:underline"
		>
			<div className="mx-auto max-w-screen-xl px-[5%]">
				<h1
					id="info-header"
					className="font-display text-[6rem] font-extralight"
				>
					Info
				</h1>
				{personalData.map((data) => (
					<InfoListItem key={uuidv4()} title={data.title}>
						{data.render()}
					</InfoListItem>
				))}
			</div>
		</div>
	);
}
