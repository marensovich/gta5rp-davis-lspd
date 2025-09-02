import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import LspdGuide from "./pages/LspdGuide";
import Employment from "./pages/Employment.jsx";
import Docs from "./pages/Docs.jsx";
import Events from "./pages/Events.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Recovery from "./pages/Recovery.jsx";

export default function App() {
    return (
        <Router>
            <div className="body-background" />

            <Header />
            <Navbar />
            <div style={{ padding: "20px", position: "relative", zIndex: 1 }}>
                <Routes>
                    <Route path="/" element={<LspdGuide />} />
                    <Route path="/employment" element={<Employment />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/recovery" element={<Recovery />} />
                </Routes>

                <Footer />
            </div>
        </Router>
    );
}
