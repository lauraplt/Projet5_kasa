import React from "react";
import "../assets/styles/layout.scss";
import NotFoundImage from "../assets/images/404.png";
import "../assets/styles/NotFound.scss";

function NotFound() {
    return (
        <div className="not-found">
            <img src={NotFoundImage} alt="404 Not Found" className="404" />
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <a href="/" className="home-link">Retourner à la page d'accueil</a>
        </div>
    );
}

export default NotFound;