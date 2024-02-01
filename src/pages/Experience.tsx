import { ArrowRightOutlined } from "@ant-design/icons";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import "./Experience.styles.sass";
import { Link } from "react-router-dom";
import ExperienceComponent from "../components/Experience&Education/Experience";

export default function Experience() {
	return (
		<AnimatedPage id="experience-education">
			<h1>Experience & Education</h1>
			<ExperienceComponent />
			<Link to={"/projects"} id="link-to-projects">
				VIEW MY PROJECTS <ArrowRightOutlined />
			</Link>
		</AnimatedPage>
	);
}
