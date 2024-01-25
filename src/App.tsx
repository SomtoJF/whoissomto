import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import "./App.sass";
import Layout from "./Layout";
import About from "./pages/About";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ path: "/", element: <Portfolio /> },
			{ path: "/about", element: <About /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
