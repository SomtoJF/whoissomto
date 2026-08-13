export type SkillGroup = {
	category: string;
	items: string[];
};

const skills: SkillGroup[] = [
	{
		category: "Languages",
		items: ["TypeScript", "JavaScript", "Golang", "Python"],
	},
	{
		category: "Frontend",
		items: [
			"React.js",
			"Next.js",
			"Redux",
			"Zustand",
			"Tailwind CSS",
			"MaterialUI",
			"SASS",
		],
	},
	{
		category: "Backend",
		items: ["Node.js", "Express.js", "Nest.js", "Gin", "Flask"],
	},
	{
		category: "DevOps & Cloud",
		items: [
			"Docker",
			"Kubernetes",
			"AWS (S3, Lambda, DynamoDB, Cognito, EC2)",
			"Terraform",
			"Pulumi",
		],
	},
	{
		category: "Other Tools",
		items: ["Jest", "Temporal", "Qdrant", "SQL", "MongoDB", "PostgreSQL"],
	},
];

export default skills;
