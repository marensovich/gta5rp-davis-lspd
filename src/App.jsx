import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LspdGuide from "./pages/LspdGuide";
import Complaints from "./pages/Complaints";
import PoliceSays from "./pages/PoliceSays";
import ProjectInfo from "./pages/ProjectInfo";

export default function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<LspdGuide />} />
                    <Route path="/complaints" element={<Complaints />} />
                    <Route path="/police" element={<PoliceSays />} />
                    <Route path="/project" element={<ProjectInfo />} />
                </Routes>
            </div>
        </Router>
    );
}
