import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LSPDLayout from './fractions/lspd/LSPDLayout';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* LSPD */}
                <Route path="/lspd/*" element={<LSPDLayout />} />
                {/* EMS, GOV и т.д. */}
                {/* <Route path="/ems/*" element={<EMSLayout />} /> */}
            </Routes>
        </Router>
    );
}