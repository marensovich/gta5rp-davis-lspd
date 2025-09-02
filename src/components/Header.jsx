import React from "react";
import centerImg from "../img/icon.png";
import rightImg from "../img/gta5rp-logo1.png";
import "../styles/header.css";

export default function Header() {
    return (
        <div className="header-bar">
            <img src={centerImg} alt="LSPD" className="center-icon" />
            <img src={rightImg} alt="Icon" className="right-icon" />
        </div>
    );
}
