"use client";

import { useState } from "react";
import skills from "../../data/Skills";
import myEducation from "../../data/Education";
import InfoListItem from "./InfoListItem";
import { v4 as uuidv4 } from "uuid";
import myExperience from "../../data/Experience";
import { Experience } from "../../Types/Experience";

function ExperienceEntry({ experience }: { experience: Experience }) {
	const [expanded, setExpanded] = useState(false);
	const hasAchievements = experience.achievements.length > 0;

	return (
		<div className="mb-8 last:mb-0">
			<h3 className="m-0 flex text-base font-normal">
				{experience.position} | {experience.company}
			</h3>
			<small className="my-2.5 block">{`${experience.period.start} - ${experience.period.end}`}</small>
			<p>{experience.location}</p>
			<p>
				<b className="font-normal">Role Description: </b>
				{experience.description}
				{hasAchievements && (
					<>
						{" "}
						<button
							type="button"
							onClick={() => setExpanded((prev) => !prev)}
							className="cursor-pointer border-0 bg-transparent p-0 font-inherit font-normal text-inherit underline"
						>
							{expanded ? "See less" : "See more"}
						</button>
					</>
				)}
			</p>
			{expanded && hasAchievements && (
				<ul className="mt-3 list-disc space-y-2 pl-5 font-light">
					{experience.achievements.map((achievement) => (
						<li key={achievement}>{achievement}</li>
					))}
				</ul>
			)}
		</div>
	);
}

const personalData = [
	{
		title: "About",
		render: () => (
			<>
				<p>
					I am interested in applied AI — the kind of work where models leave
					the notebook and become part of a real product.
				</p>
				<p>
					Outside of work, I taught myself to play the guitar, and I am
					currently teaching myself French. I enjoy learning new things, usually
					by picking something up and staying with it until it starts to click.
				</p>
			</>
		),
	},
	{
		title: "Experience",
		render: () => (
			<div id="experience-container" className="flex flex-col">
				{[...myExperience].reverse().map((experience) => (
					<ExperienceEntry
						key={`${experience.company}-${experience.period.start}`}
						experience={experience}
					/>
				))}
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
				<p>{myEducation.honors}</p>
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
			<div id="skills-container" className="flex flex-col gap-6">
				{skills.map((group) => (
					<div key={group.category}>
						<h3 className="mb-2.5 mt-0 text-base font-normal">
							{group.category}
						</h3>
						<div className="flex flex-wrap gap-2.5">
							{group.items.map((skill) => (
								<span
									key={skill}
									className="border border-solid border-black px-1.5 py-0.5 text-[0.7rem] font-light"
								>
									{skill.toUpperCase()}
								</span>
							))}
						</div>
					</div>
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
