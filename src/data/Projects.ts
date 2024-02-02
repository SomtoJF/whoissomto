import { Project } from "../Types/Projects";
// import rebaseMockup from "../assets/rebase.mov";
// import threeMockup from "../assets/Three.mov";
// import rewriteMockup from "../assets/rewrite.mov";

const myProjects: Project[] = [
	{
		name: "Rewrite Blog",
		description:
			"A fullstack blog which empowers writers with the freedom of markdown ",
		liveLink: "https://rewrite-blog.vercel.app",
		githubLink: "https://github.com/somtojf/rewrite",
		mockupUrl: "",
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
		name: "Who is Somto?",
		description: "My portfolio website",
		liveLink: "https://somto-chi.vercel.app",
		githubLink: "https://github.com/somtojf/whoissomto",
		mockupUrl: "",
		technologies: ["React", "TypeScript", "SASS", "GSAP", "Framer-Motion"],
	},
	{
		name: "REBASE",
		description:
			"A frontend-only e-commerce website with a captivating user interface",
		liveLink: "https://basic-dept-wine.vercel.app/",
		githubLink: "https://github.com/SomtoJF/Rebase",
		mockupUrl: "",
		technologies: ["React", "TypeScript", "SASS", "GSAP", "Zustand", "MUI"],
	},
	{
		name: "Jobit",
		description: "A Mobile Application for searching for developer jobs ",
		githubLink: "https://github.com/SomtoJF/JobIt",
		mockupUrl: "",
		technologies: ["React Native", "JavaScript", "Expo Router", "Expo Go"],
	},
	{
		name: "Three",
		description:
			"A 3D simulation of the solar system built in Three.js. The planets are mapped with textures from the NASA website.",
		liveLink: "https://somtojf-three.netlify.app/",
		githubLink: "https://github.com/SomtoJF/Three",
		mockupUrl: "",
		technologies: ["JavaScript", "CSS", "ThreeJS", "GSAP", "dat.gui"],
	},
];

export default myProjects;
