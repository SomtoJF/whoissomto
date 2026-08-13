import { Project } from "../Types/Projects";
import threeMockup from "../assets/three.png";
import rewriteMockup from "../assets/rewrite.png";
import academiaMockup from "../assets/academia.png";

const myProjects: Project[] = [
	{
		name: "Iris",
		description:
			"Job application automation — one-click apply, or paste a job link and let the system handle the rest.",
		liveLink: "https://applywithiris.com",
		githubLink: "https://github.com/SomtoJF/iris-api",
		technologies: ["Go", "TypeScript", "React", "Chrome Extension"],
	},
	{
		name: "Trio",
		description:
			"A group chat where multiple AI models (ChatGPT, Claude, Gemini, and friends) talk to each other and to you.",
		liveLink: "https://trio-self.vercel.app",
		githubLink: "https://github.com/SomtoJF/trio-client",
		technologies: ["TypeScript", "Go", "React", "LLMs"],
	},
	{
		name: "Academia",
		description:
			"An examination platform that grades open-ended answers using text similarity and textual entailment.",
		liveLink: "https://academia-somtojf.vercel.app",
		githubLink: "https://github.com/SomtoJF/Academia",
		mockupUrl: academiaMockup,
		technologies: [
			"TypeScript",
			"Python",
			"React",
			"Flask",
			"TensorFlow",
			"GraphQL",
		],
	},
	{
		name: "En Français",
		description:
			"A small site I use to stay on top of learning French — practice, structure, and accountability in one place.",
		liveLink: "https://somtojf.github.io/en-francais/",
		githubLink: "https://github.com/SomtoJF/en-francais",
		technologies: ["JavaScript", "HTML"],
	},
	{
		name: "Rewrite",
		description:
			"A blog I built because I often think about writing — markdown-first, from draft to publish.",
		liveLink: "https://rewrite-blog.vercel.app",
		githubLink: "https://github.com/SomtoJF/Rewrite",
		mockupUrl: rewriteMockup,
		technologies: [
			"React",
			"TypeScript",
			"GraphQL",
			"Express",
			"MongoDB",
			"Firebase",
		],
	},
	{
		name: "CV Builder",
		description:
			"Build an ATS-friendly CV without fighting the layout. Everything just fits.",
		liveLink: "https://somtojf.github.io/cv-project/",
		githubLink: "https://github.com/SomtoJF/cv-project",
		technologies: ["JavaScript", "CSS", "HTML"],
	},
	{
		name: "Three",
		description:
			"A 3D solar system simulation in Three.js, with planet textures from NASA.",
		liveLink: "https://somtojf-three.netlify.app/",
		githubLink: "https://github.com/SomtoJF/Three",
		mockupUrl: threeMockup,
		technologies: ["JavaScript", "Three.js", "GSAP"],
	},
];

export default myProjects;
