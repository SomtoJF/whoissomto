interface Project {
	name: string;
	description: string;
	technologies: string[];
	linkDescription?: string;
	shortDescription?: string;
	githubLink: string;
	liveLink?: string;
}

export type { Project };
