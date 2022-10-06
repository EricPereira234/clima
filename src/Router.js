import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Load from "./pages/Load";

export default function Rota() {
    return (
        <Router>
        
            <Routes>
                <Route path="/" element={<Load />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </Router>
    )
}