import React from "react";
import "../assets/styles/header.scss"; 
import { NavLink } from "react-router-dom"; 
import logoheader from "../assets/images/logoheader.svg"; 

function Header() {
    return (
        <header>
            <div id="header-container"> 
                <img className="header-img" src={logoheader} alt="Logo Kasa"/> 
                <nav className="header-nav"> 
                <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Accueil</NavLink> 
                <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>À propos</NavLink> 
                </nav>
            </div>
        </header>
    );
}

export default Header; 