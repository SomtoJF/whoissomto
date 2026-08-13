export default function SpaNavbar() {
	return (
		<nav
			id="spa-navbar"
			className="fixed z-10 box-border flex h-[10vh] w-full items-center justify-between bg-transparent px-[5%] font-header font-light text-white mix-blend-difference"
		>
			<div>
				Francis Somtochukwu{" "}
				<span className="max-[700px]:hidden">Jeremy</span>
			</div>
			<ul className="flex list-none justify-between gap-5">
				<li>
					<a
						href="#spa-projects"
						className="link-underline link-underline-white text-inherit no-underline hover:underline"
					>
						Projects
					</a>
				</li>
				<li>
					<a
						href="#info"
						className="link-underline link-underline-white text-inherit no-underline hover:underline"
					>
						Info
					</a>
				</li>
				<li>
					<a
						href="https://rewrite-blog.vercel.app"
						target="_blank"
						className="link-underline link-underline-white text-inherit no-underline hover:underline"
					>
						Blog
					</a>
				</li>
			</ul>
		</nav>
	);
}
