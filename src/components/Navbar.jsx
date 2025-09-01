import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link">
                Руководство LSPD
            </NavLink>
            <NavLink to="/complaints" className="nav-link">
                Жалобы и обращения
            </NavLink>
            <NavLink to="/police" className="nav-link">
                Полиция говорит
            </NavLink>
            <NavLink to="/project" className="nav-link">
                Информация о проекте
            </NavLink>
        </nav>
    );
}
