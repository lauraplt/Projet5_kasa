import React from "react";
import "../assets/styles/Home.scss";
import Banner from "../components/banner"; 
import Homebanner from "../assets/images/image-source-1.png"; 
import { NavLink } from "react-router-dom";
import Card from "../components/card"; 
import AccommodationsList from "../assets/accommodations.json";


function Home() {
    return (
        <div className="home">
            <Banner image={Homebanner} text="Chez vous, partout et ailleurs"/> 
            <div className="Accommodations-list">
                {AccommodationsList.map((Accommodations) => (
                    <NavLink key={Accommodations.id} to={`/Accommodations/${Accommodations.id}`}>
                        <Card key={Accommodations.id} id={Accommodations.id} image={Accommodations.cover} title={Accommodations.title} /> 
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Home;