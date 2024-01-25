import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import "./App.sass";
import Layout from "./Layout";
import About from "./pages/About";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
