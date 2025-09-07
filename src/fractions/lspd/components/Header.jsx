import React from "react";
import centerImg from "../img/icon.png";
import rightImg from "../img/gta5rp-logo1.png";
import "../styles/header.css";

export default function Header() {
    const handleClick = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div className="header-bar">
            <img
                src={centerImg}
                alt="Davis - LSPD"
                className="center-icon"
                onClick={() => handleClick("https://forum.gta5rp.com/forums/los-santos-police-department.1240/")}
                style={{ cursor: "pointer" }}
            />
            <img
                src={rightImg}
                alt="GTA5RP"
                className="right-icon"
                onClick={() => handleClick("https://gta5rp.com/")}
                style={{ cursor: "pointer" }}
            />
        </div>
    );
}
