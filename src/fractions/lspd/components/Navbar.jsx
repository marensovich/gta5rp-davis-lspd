import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/lspd/guide" className="nav-link">
                Руководство LSPD
            </NavLink>
            <NavLink to="/lspd/employment" className="nav-link">
                Трудоустройство
            </NavLink>
            <NavLink to="/lspd/recovery" className="nav-link">
                Восстановление
            </NavLink>
            <NavLink to="/lspd/docs" className="nav-link">
                Акты LSPD
            </NavLink>
            <NavLink to="/lspd/project" className="nav-link">
                Информация
            </NavLink>
        </nav>
    );
}
