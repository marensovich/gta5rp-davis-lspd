import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="nav-link">
                Руководство LSPD
            </NavLink>
            <NavLink to="/employment" className="nav-link">
                Заявление на трудоустройство
            </NavLink>
            <NavLink to="/dismissal" className="nav-link">
                Заявление на увольнение
            </NavLink>
            <NavLink to="/docs" className="nav-link">
                Акты Los Santos Police Department
            </NavLink>
            <NavLink to="/events" className="nav-link">
                Мероприятия
            </NavLink>
        </nav>
    );
}
