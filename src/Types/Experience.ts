interface Experience {
	company: string;
	position: string;
	description: string;
	location: string;
	softwareTools: string[];
	period: {
		start: string;
		end: string;
	};
	achievements: string[];
}

export type { Experience };
