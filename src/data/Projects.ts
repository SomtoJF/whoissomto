import { Project } from "../Types/Projects";
import rebaseMockup from "../assets/rebase.png";
import threeMockup from "../assets/three.png";
import rewriteMockup from "../assets/rewrite.png";
import academiaMockup from "../assets/academia.png";

const myProjects: Project[] = [
	{
		name: "Rewrite Blog",
		description:
			"A fullstack blog which empowers writers with the freedom of markdown ",
		liveLink: "https://rewrite-blog.vercel.app",
		githubLink: "https://github.com/somtojf/rewrite",
		mockupUrl: rewriteMockup,
		technologies: [
			"React",
			"GraphQL",
			"Express",
			"TypeScript",
			"SASS",
			"MongoDB",
			"Firebase",
			"MUI",
			"Ant-design",
		],
	},
	{
		name: "Academia",
		description:
			"An examination platform capable of grading open-ended questions using text similarity",
		liveLink: "https://academia-zeta-three.vercel.app/",
		githubLink: "https://github.com/somtojf/academia",
		mockupUrl: academiaMockup,
		technologies: [
			"TypeScript",
			"Python",
			"Express",
			"Flask",
			"Tensorflow",
			"React",
			"Ant-design",
			"GraphQL",
			"Cosine similarity",
			"Text entailment",
		],
	},
	{
		name: "REBASE",
		description:
			"A frontend-only e-commerce website with a captivating user interface",
		liveLink: "https://basic-dept-wine.vercel.app/",
		githubLink: "https://github.com/SomtoJF/Rebase",
		mockupUrl: rebaseMockup,
		technologies: ["React", "TypeScript", "SASS", "GSAP", "Zustand", "MUI"],
	},
	{
		name: "Three",
		description:
			"A 3D simulation of the solar system built in Three.js. The planets are mapped with textures from the NASA website.",
		liveLink: "https://somtojf-three.netlify.app/",
		githubLink: "https://github.com/SomtoJF/Three",
		mockupUrl: threeMockup,
		technologies: ["JavaScript", "CSS", "ThreeJS", "GSAP", "dat.gui"],
	},
	{
		name: "Jobit",
		description: "A Mobile Application for searching for developer jobs ",
		githubLink: "https://github.com/SomtoJF/JobIt",
		mockupUrl: "",
		technologies: ["React Native", "JavaScript", "Expo Router", "Expo Go"],
	},
];

export default myProjects;
