import React from "react";
import "../assets/styles/accommodations.scss"; 
import { useParams, Navigate } from 'react-router-dom'; 
import AccommodationsList from "../assets/accommodations.json"; 
import SlideShow from "../components/Slideshow"; 
import Tag from "../components/Tag"; 
import Star from "../assets/images/star.svg"; 
import EmptyStar from "../assets/images/emptystar.svg"; 
import Collapse from "../components/Collapse";


function Accommodations() {
    const { id } = useParams(); 
    const ACCOMMODATIONS_SHEET = AccommodationsList.find(Accommodations => Accommodations.id === id); 

    if (!ACCOMMODATIONS_SHEET) {
        return <Navigate to="/404" replace />;
    }

    const ACCOMMODATIONS_TAGS = ACCOMMODATIONS_SHEET.tags && ACCOMMODATIONS_SHEET.tags.map((tag, index) => (
        <Tag key={index} name={tag} /> 
    ));

    let accommodations_rating = [];
    for (let index = 0; index < 5; index++) {
        if (index < parseInt(ACCOMMODATIONS_SHEET.rating, 10)) {
            accommodations_rating.push(<img key={index} className="star" src={Star} alt="" />);
        } else {
            accommodations_rating.push(<img key={index} className="star" src={EmptyStar} alt="" />);
        }
    }

    const ACCOMMODATIONS_EQUIPMENTS = ACCOMMODATIONS_SHEET.equipments && ACCOMMODATIONS_SHEET.equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li> 
    ));


    return (
        <div className="sheet">
            <SlideShow images={ACCOMMODATIONS_SHEET.pictures} /> 
            <div className="land-lord">
                <div className="info">
                    <span className="lodging-title">{ACCOMMODATIONS_SHEET.title}</span> 
                    <span className="location">{ACCOMMODATIONS_SHEET.location}</span> 
                    <div className="tags">{ACCOMMODATIONS_TAGS}</div> 
                </div>
                <div className="description">
                    <div className="land-lord-info">
                        <span className="land-lord-name">{ACCOMMODATIONS_SHEET.host.name}</span> 
                        <img className="land-lord-img" src={ACCOMMODATIONS_SHEET.host.picture} alt="Owner" /> 
                    </div>
                    <div className="rating">{accommodations_rating}</div> 
                </div>
            </div>
            <div className="equipment-description">
                <Collapse title="Description" description={ACCOMMODATIONS_SHEET.description} />
                {ACCOMMODATIONS_EQUIPMENTS && (
                    <Collapse title="Equipments" description={<ul>{ACCOMMODATIONS_EQUIPMENTS}</ul>} />
                )}
            </div>
        </div>
    );
}

export default Accommodations; 