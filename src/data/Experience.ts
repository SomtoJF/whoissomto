import { Experience } from "../Types/Experience";

const myExperience: Experience[] = [
	{
		company: "Volvo Cars",
		location: "Gothenburg, Sweden",
		period: { start: "March 2023", end: "June 2023" },
		description:
			"Worked as a Full Stack Developer by developing an a web application for the management and coordination of activities throughout our  numerous Hardware-in-the-Loop teams. Created fully responsive UI components for various pages of our web application using JavaScript’s React.js library. Integrated into the app using Azure, authorization and authentication for the application’s front-end and back-end to manage the access of over 40,000 Volvo Cars employees. Built multiple connections between the client and server using AWS lambda functions and AWS API gateway.",
		achievements: [
			"Created fully responsive UI components for various pages of our web application using JavaScript’s React.js library",
			"Integrated into the app using Azure, authorization and authentication for the application’s front-end and back-end to manage the access of over 40,000 Volvo Cars employees",
			"Built multiple connections between the client and server using AWS lambda functions and AWS API gateway",
		],
		softwareTools: [
			"JavaScript",
			"Express",
			"React",
			"CSS",
			"HTML5",
			"Maria DB",
			"Azure AD",
			"AWS Lambda",
			"AWS API Gateway",
			"AWS IAM Policy",
			"Dynamo DB",
			"Jira",
			"Miro",
			"Jenkins",
		],
		position: "Software Engineer Intern",
	},
	{
		company: "Sefara Inc",
		location: "Remote, Nigeria.",
		period: { start: "Febrary 2024", end: "Present" },
		description:
			"Build the core client and server-side components for our online platform, designed to streamline procurement and payment processes for African businesses.",
		achievements: [],
		softwareTools: [
			"TypeScript",
			"NestJS",
			"NextJS",
			"SASS",
			"TailwindCSS",
			"PostreSQL",
			"TypeORM",
			"AWS Textract",
			"Temporal",
			"Jira",
		],
		position: "Software Engineer",
	},
];

export default myExperience;
