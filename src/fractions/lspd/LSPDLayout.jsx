import { Routes, Route, Navigate } from "react-router-dom";
import "./styles/Main.css";

import Navbar from "./components/Navbar.jsx";
import LspdGuide from "./pages/LspdGuide.jsx";
import Employment from "./pages/Employment.jsx";
import Docs from "./pages/Docs.jsx";
import ProjectInfo from "./pages/ProjectInfo.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Recovery from "./pages/Recovery.jsx";

export default function LSPDLayout() {
    return (
        <>
            <div className="body-background" />
            <Header />
            <Navbar />
            <div style={{ padding: "20px", position: "relative", zIndex: 1 }}>
                <Routes>
                    <Route path="/" element={<Navigate to="/lspd/guide" replace />} />
                    <Route path="/guide" element={<LspdGuide />} />
                    <Route path="/employment" element={<Employment />} />
                    <Route path="/docs" element={<Docs />} />
                    <Route path="/project" element={<ProjectInfo />} />
                    <Route path="/recovery" element={<Recovery />} />
                </Routes>
                <Footer />
            </div>
        </>
    );
}