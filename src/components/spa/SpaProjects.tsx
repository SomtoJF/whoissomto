import Projects from "./Projects";

export default function SpaProjects() {
	return (
		<section
			id="spa-projects"
			className="box-border h-[105vh] w-full bg-spa-black py-[10vh] pl-[5%] text-white"
		>
			<h1
				id="spa-projects-heading"
				className="mt-0 font-display text-[6rem] font-extralight"
			>
				Projects
			</h1>
			<Projects />
		</section>
	);
}
