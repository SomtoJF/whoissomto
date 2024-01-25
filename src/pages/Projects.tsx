import { ArrowRightOutlined } from "@ant-design/icons";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import Swiper from "../components/Projects/Swiper";
import "./Projects.styles.sass";

export default function Projects() {
	return (
		<AnimatedPage id="projects">
			<Swiper />
			<a href="https://github.com/SomtoJF/" target="_blank" id="link-to-gh">
				MORE ON MY GITHUB <ArrowRightOutlined />
			</a>
		</AnimatedPage>
	);
}
