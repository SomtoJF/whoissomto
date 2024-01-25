import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Portfolio />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
