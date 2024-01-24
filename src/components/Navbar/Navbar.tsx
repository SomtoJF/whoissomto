import "./Navbar.styles.sass";
import { RightSquareOutlined } from "@ant-design/icons";

export default function Navbar() {
	return (
		<nav id="navbar">
			<div id="menu-container">
				<div>MENU</div>
				<ul>
					<li>
						<a href="#about">
							ABOUT <RightSquareOutlined />
						</a>
					</li>
					<li>
						<a href="#experience">
							EXPERIENCE <RightSquareOutlined />
						</a>
					</li>
					<li>
						<a href="#projects">
							PROJECTS <RightSquareOutlined />
						</a>
					</li>
					<li>
						<a
							href="https://rewrite-blog.vercel.app/account/QSyVTLz1OyYd6si6jvEVmRJFlGh2"
							target="_blank"
						>
							BLOG
							<RightSquareOutlined />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
