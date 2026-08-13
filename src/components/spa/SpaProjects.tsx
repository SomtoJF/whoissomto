import Projects from "./Projects";

export default function SpaProjects() {
	return (
		<section
			id="spa-projects"
			className="box-border min-h-[85vh] w-full bg-spa-black py-[10vh] text-white"
		>
			<div className="mx-auto max-w-screen-xl px-[5%]">
				<h1
					id="spa-projects-heading"
					className="mt-0 mb-12 font-display text-[6rem] font-extralight"
				>
					Projects
				</h1>
				<Projects />
			</div>
		</section>
	);
}
