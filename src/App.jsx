import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LspdGuide from "./pages/LspdGuide";
import Employment from "./pages/Employment.jsx";
import Dismissal from "./pages/Dismissal.jsx";
import Docs from "./pages/Docs.jsx";
import Events from "./pages/Events.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <Router>
            <Navbar />
            <div style={{ padding: "20px" }}>
                <Routes>
                    <Route path="/" element={<LspdGuide />} />
                    <Route path="/employment" element={<Employment />} />
                    <Route path="/dismissal" element={<Dismissal />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/events" element={<Events />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}
