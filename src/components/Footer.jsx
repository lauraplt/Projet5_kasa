import React from "react";
import '../assets/styles/footer.scss'
import { Link } from "react-router-dom"; 
import logofooter from "../assets/images/logofooter.svg";

function Footer() {
    return (
        <footer>
            <div id="footer-container"> 
                <Link to="/" className="footer-logo-link"> 
                    <img src={logofooter} alt="Logo Footer" /> 
                </Link>
                <p>&copy; 2022 Kasa. Tous droits réservés</p> 
            </div>
        </footer>
    );
}

export default Footer; 