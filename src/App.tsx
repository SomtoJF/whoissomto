import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import "./App.sass";

const router = createBrowserRouter([{ path: "/", element: <Portfolio /> }]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
