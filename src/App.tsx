import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import "./App.sass";
import Layout from "./Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [{ path: "/", element: <Portfolio /> }],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
