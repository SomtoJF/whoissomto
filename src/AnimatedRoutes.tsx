import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/mpa/About";
import Home from "./pages/mpa/Home";
import { AnimatePresence } from "framer-motion";
import Projects from "./pages/mpa/Projects";
import Experience from "./pages/mpa/Experience";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/experience" element={<Experience />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
