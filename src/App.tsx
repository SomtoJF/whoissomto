import {
    BrowserRouter,
} from "react-router-dom";
import "./App.sass";
import AnimatedRoutes from "./AnimatedRoutes"

function App() {

    return (
        <BrowserRouter>
            <AnimatedRoutes />
        </BrowserRouter>
    );
}

export default App;
