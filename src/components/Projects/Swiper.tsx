import { Swiper as Carousel, SwiperSlide } from "swiper/react";
import myProjects from "../../data/Projects";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./Swiper.styles.sass";
import ProjectCard from "./ProjectCard";

const sliderStyles: CSSProperties = {
	border: "1px solid black",
	height: "80vh",
	width: "60vw",
	borderLeft: "none",
	margin: "0px",
	padding: "5% max(50px, 10%)",
	boxSizing: "border-box",
};

export default function Swiper() {
	useGSAP(() => {
		gsap.to("#navbar", {
			borderBottom: "none",
		});
	});
	return (
		<Carousel
			slidesPerView={"auto"}
			loop={true}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Pagination, Navigation, Autoplay]}
			className="mySwiper"
			autoplay={{ delay: 10000 }}
			centeredSlides
		>
			{myProjects.map((project) => (
				<SwiperSlide style={sliderStyles}>
					<ProjectCard
						name={project.name}
						description={project.description}
						githubLink={project.githubLink}
						liveLink={project.liveLink}
						technologies={project.technologies}
						mockupUrl={project.mockupUrl}
					/>
				</SwiperSlide>
			))}
		</Carousel>
	);
}
