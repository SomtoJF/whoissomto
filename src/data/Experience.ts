import { Experience } from "../Types/Experience";

const myExperience: Experience[] = [
	{
		company: "Volvo Cars",
		location: "Gothenburg, Sweden",
		period: { start: "March 2023", end: "June 2023" },
		description:
			"Built an internal app to coordinate activities across multiple Hardware-in-the-Loop teams, reducing manual coordination efforts by 60% and saving 4+ hours per week",
		achievements: [
			"Collaborated closely with designers to translate wireframes and design mockups into efficient, maintainable code, ensuring alignment with design specifications.",
			"Strategically migrated backend services to serverless architectures on AWS and Azure, realizing cost savings of 30%-50%.",
			"Integrated Azure Active Directory for secure user authentication and authorization, enabling managed access for over 40,000 employees.",
		],
		site: "https://www.volvocars.com/intl",
		softwareTools: [
			"JavaScript",
			"React",
			"Azure AD",
			"AWS",
			"Azure",
		],
		position: "Software Engineer Intern",
	},
	{
		company: "Sefara",
		location: "Remote, US",
		period: { start: "February 2024", end: "September 2024" },
		description:
			"Built core client and server-side components for a SaaS platform designed to streamline procurement and payment processes for businesses.",
		achievements: [
			"Implemented, tested and deployed various client-facing features throughout the application.",
			"Built responsive frontend pages and components using TypeScript/Next.js, translating Figma designs into reusable components.",
			"Designed and implemented AI features including image recognition, image-text extraction and invoice image/document processing to automate manual account and finance processes.",
			"Developed robust API endpoints that encapsulate complex business logic and payment transactions to support seamless payment and procurement workflows.",
			"Implemented fault-tolerant procure-to-pay workflows to ensure reliable payment operations and near-zero downtime.",
		],
		softwareTools: [
			"TypeScript",
			"Next.js",
			"Nest.js",
			"PostgreSQL",
			"Temporal",
			"AWS",
		],
		position: "Software Engineer",
	},
	{
		company: "Sales Copilots",
		location: "Remote, US",
		period: { start: "October 2024", end: "August 2026" },
		description:
			"Worked as a founding engineer building core client and server-side components for an AI sales prospecting tool.",
		achievements: [
			"Designed and built an AI account prioritization system end to end, from scoring engine and seller-written calibration to the UI explaining each ranking, replacing opaque scores with 4 tiers reps actually trust.",
			"Engineered user authentication and authorization for secure user session creation, validation and termination.",
			"Designed an event-driven architecture for real-time AI content generation, utilizing data streaming, Pub/Sub and asynchronous processing to handle concurrent requests while maintaining system stability.",
			"Architected scalable data and RAG pipelines integrating multiple data sources with efficient caching mechanisms, batch processing and rate limiting for optimal performance, scalability and more accurate LLM responses.",
			"Built evaluation harnesses for the AI scoring and generation models with curated golden sets and regression runs on prompt changes, catching quality regressions before customers saw them.",
		],
		site: "https://salescopilots.com",
		softwareTools: [
			"TypeScript",
			"React",
			"Node.js",
			"RAG",
			"Pub/Sub",
		],
		position: "Founding Software Engineer",
	},
];

export default myExperience;
