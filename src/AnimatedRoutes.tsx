import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Portfolio from "./pages/Portfolio";
import NotesIndex from "./pages/NotesIndex";
import NotePage from "./pages/NotePage";
import SinglePageLayout from "./layouts/SpaLayout";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<SinglePageLayout />}>
					<Route index element={<Portfolio />} />
					<Route path="notes" element={<NotesIndex />} />
					<Route path="notes/:slug" element={<NotePage />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
