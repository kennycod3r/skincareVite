import React from "react";
import "./TinyDiv.css";
import Vcheck from "../Vcheck";

const TinyDiv = ({ imageUrl, imgtext, tinyText }) => {
  return (
    <div className="author-box">
      <div className="author-box-inner">
        <div className="author-image">
          <img className="overlay" src={imageUrl} alt="icon" loading="lazy" height={"50px"} width={"50px"}/>
        </div>
        <div className="author-content">
          <div className="tshopdiv">
            {" "}
            <span className="tiny-text sub-text">{imgtext} <Vcheck /></span> 
          </div>
          <p className="header-text">{tinyText}</p>
        </div>
      </div>
    </div>
  );
};

export default TinyDiv;
