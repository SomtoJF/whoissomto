import "./Navbar.styles.sass";

export default function Navbar() {
	return (
		<nav id="navbar">
			<ul>
				<li>
					<a href="#about">ABOUT</a>
				</li>
				<li>
					<a href="#experience">EXPERIENCE</a>
				</li>
				<li>
					<a href="#projects">PROJECTS</a>
				</li>
				<li>
					<a
						href="https://rewrite-blog.vercel.app/account/QSyVTLz1OyYd6si6jvEVmRJFlGh2"
						target="_blank"
					>
						BLOG
					</a>
				</li>
			</ul>
		</nav>
	);
}
