import "./styles/SpaNavbar.styles.sass";

export default function SpaNavbar() {
	return (
		<nav id="spa-navbar">
			<div>
				Francis Somtochukwu <span>Jeremy</span>
			</div>
			<ul>
				<li>
					<a href="#spa-projects">Projects</a>
				</li>
				<li>
					<a href="#info">Info</a>
				</li>
				<li>
					<a href="https://rewrite-blog.vercel.app" target="_blank">
						Blog
					</a>
				</li>
			</ul>
		</nav>
	);
}
