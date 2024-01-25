import { Link } from "react-router-dom";
import "./Navbar.styles.sass";
import { RightSquareOutlined } from "@ant-design/icons";

export default function Navbar() {
	return (
		<nav id="navbar">
			<div id="menu-container">
				<div>MENU</div>
				<ul>
					<li>
						<Link to="/">
							HOME <RightSquareOutlined />
						</Link>
					</li>
					<li>
						<Link to="/about">
							ABOUT <RightSquareOutlined />
						</Link>
					</li>
					<li>
						<Link to="/experience">
							EXPERIENCE <RightSquareOutlined />
						</Link>
					</li>
					<li>
						<Link to="/projects">
							PROJECTS <RightSquareOutlined />
						</Link>
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
