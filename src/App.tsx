import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { DEFAULT_NOTES_STALE_TIME } from "./lib/notes/hooks";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: DEFAULT_NOTES_STALE_TIME,
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AnimatedRoutes />
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
