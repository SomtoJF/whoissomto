import { Routes, Route, useLocation } from "react-router-dom";
import MultiPageLayout from "./layouts/MpaLayout";
import About from "./pages/mpa/About";
import Home from "./pages/mpa/Home";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/mpa/Projects";
import Experience from "./pages/mpa/Experience";
import Portfolio from "./pages/spa/Portfolio";
import SinglePageLayout from "./layouts/SpaLayout";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<MultiPageLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/experience" element={<Experience />} />
				</Route>
				<Route path="/spa" element={<SinglePageLayout />}>
					<Route path="/spa/" element={<Portfolio />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
