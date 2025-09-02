import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link">
                Руководство LSPD
            </NavLink>
            <NavLink to="/employment" className="nav-link">
                Трудоустройство
            </NavLink>
            <NavLink to="/recovery" className="nav-link">
                Восстановление
            </NavLink>
            <NavLink to="/docs" className="nav-link">
                Акты LSPD
            </NavLink>
            <NavLink to="/events" className="nav-link">
                Мероприятия
            </NavLink>
        </nav>
    );
}
