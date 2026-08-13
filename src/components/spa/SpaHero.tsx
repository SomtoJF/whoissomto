export default function SpaHero() {
	return (
		<section
			id="spa-hero"
			className="box-border grid h-screen w-full grid-cols-3 grid-rows-[5fr_1fr] rounded-b-[15px] bg-white px-[5%] pt-[12vh] font-header font-light"
		>
			<p id="intro-text" className="col-span-3 w-[max(50%,360px)] text-[2rem]">
				Final year Software Engineering Student/Fullstack Software Developer on
				a mission to build simple solutions to complex real-world problems.
			</p>
			<div>
				Fullstack <br /> Software Developer
			</div>
			<div>
				Based in <br /> Lagos, Nigeria.
			</div>
			<div className="flex gap-2.5">
				<a
					href="https://www.linkedin.com/in/somtochukwu-francis-b8a236239"
					target="_blank"
					className="link-underline h-fit text-inherit no-underline"
				>
					LinkedIn
				</a>
				<a
					href="https://twitter.com/somtofrancis3"
					target="_blank"
					className="link-underline h-fit text-inherit no-underline"
				>
					Twitter
				</a>
			</div>
		</section>
	);
}
