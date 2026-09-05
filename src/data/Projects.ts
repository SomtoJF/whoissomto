import { Project } from "../Types/Projects";

const myProjects: Project[] = [
	{
		name: "Iris",
		description:
			"I hate job applications, so I automated them. Iris lets you one-click apply or paste a job link you found online, then handles the rest across a Go API, TypeScript client, and Chrome extension.",
		linkDescription: "Find your next role at hyperspeed. Iris Apply automates job applications so you can focus on what matters.",
		liveLink: "https://applywithiris.com",
		githubLink: "https://github.com/SomtoJF/iris-api",
		technologies: ["Go", "TypeScript", "React", "Chrome Extension"],
	},
	{
		name: "Trio",
		description:
			"Imagine two ChatGPTs, Claudes, and Geminis in the same group chat. Trio is a multi-model chat app with a TypeScript client and Go server where several LLMs can talk to each other and to you.",
		liveLink: "https://trio-self.vercel.app",
		githubLink: "https://github.com/SomtoJF/trio-client",
		technologies: ["TypeScript", "Go", "React", "Next.js", "LLMs"],
	},
	{
		name: "Academia",
		description:
			"An online examination platform that grades open-ended answers automatically. It uses text similarity and textual entailment so written responses can be scored without a purely multiple-choice format.",
		githubLink: "https://github.com/SomtoJF/Academia",
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
		name: "Gocker",
		description:
			"A lightweight container runtime written in Go as a way to learn how isolation actually works. It runs on Ubuntu, nests inside Docker for development, and can drop you into an isolated shell with a simple run command.",
		githubLink: "https://github.com/SomtoJF/gocker",
		technologies: ["Go", "Docker", "Makefile"],
	},
	{
		name: "Gosh",
		description:
			"A lightweight shell written in Go. Install it, run gosh, and you get a small custom shell to poke at how command parsing and process execution work.",
		githubLink: "https://github.com/SomtoJF/gosh",
		technologies: ["Go"],
	},
	{
		name: "Sun",
		description:
			"A command-line weather tool in Go. Point it at a location with a flag, pull data from WeatherAPI, and get conditions without opening a browser.",
		githubLink: "https://github.com/SomtoJF/sun",
		technologies: ["Go", "WeatherAPI"],
	},
	{
		name: "Three",
		description:
			"A 3D solar system simulation built with Three.js. Planets are textured with maps from NASA, and you can move around the scene to explore the system in the browser.",
		liveLink: "https://somtojf-three.netlify.app/",
		githubLink: "https://github.com/SomtoJF/Three",
		technologies: ["JavaScript", "Three.js", "GSAP"],
	},
	{
		name: "En Français",
		description:
			"I am learning French and it is hard, so I built a small site to stay on top of practice and structure. It is less a polished product and more a personal tool for keeping the habit alive.",
		liveLink: "https://somtojf.github.io/en-francais/",
		githubLink: "https://github.com/SomtoJF/en-francais",
		technologies: ["JavaScript", "HTML"],
	},
	{
		name: "CV Builder",
		description:
			"A React app for building an ATS-friendly CV without fighting the layout. Fill in your details and export a resume that is meant to survive applicant tracking systems and still look clean on the page.",
		liveLink: "https://somtojf.github.io/cv-project/",
		githubLink: "https://github.com/SomtoJF/cv-project",
		technologies: ["JavaScript", "React", "CSS", "HTML"],
	},
];

export default myProjects;
