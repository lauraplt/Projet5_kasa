import React from "react";
import "../assets/styles/banner.scss";

function Banner ({image, text}) {
    return(
        <div className="banner">
            <img className="banner-img" src={image} alt="banner"></img>
            <div className="dark-banner"></div>
            <span className="banner-text">{text}</span>
        </div>
    );
}
export default Banner;