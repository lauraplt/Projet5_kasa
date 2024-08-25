import React, { useState } from "react"; 
import "../assets/styles/Collapse.scss"; 
import Arrow from "../assets/images/arrow.svg"; 


function Collapse({ title, description }) {
  const [open, setOpen] = useState(false); 


  const toggleCollapse = () => {
    setOpen(!open); 
  };

  return (
    <div className={`collapse ${open ? "open" : ""}`}>
      <div className="collapse-header" onClick={toggleCollapse}>
        <div className="collapse-title">{title}</div>
        <span className={`collapse-arrow ${open ? "true" : ""}`}>
          <img
            src={Arrow}
            alt="ouvrir l'onglet"
            className="collapse-arrow-img"
          />
        </span>
      </div>

      <div className="collapse-content" style={{ maxHeight: open ? "1000px" : "0" }}>
        <div className="collapse-description">{description}</div>
      </div>
    </div>
  );
}

export default Collapse; 