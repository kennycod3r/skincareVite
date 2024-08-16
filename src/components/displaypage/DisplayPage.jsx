import React from "react";
import "./DisplayPage.css";
import ArrowLink from "../../Util/ArrowLink";
import CloseButton from "../../Util/CloseButton";
import Ashley from "../../img/ashley1.webp";
import ButtonW from "../../Util/ButtonWrapper/ButtonW";

const DisplayPage = ({ handleOpenDisplay, openDisplay }) => {
  return (
    <div className={`display-page ${openDisplay ? "display-page-open" : ""}`}>
      <div className="flex-header">
        <a target="_blank" rel="noopener noreferrer" href="/">
          <span className="dp-header-top">
            <ArrowLink /> <p>Ashley Garnett</p>
          </span>
        </a>

        <div className="close-header" onClick={handleOpenDisplay}>
          <div className="display-page-btn dp-btn">
            <div className="close-btn-circle-sidebar close-circle-small">
              <CloseButton />
            </div>
          </div>
        </div>
      </div>
      <div className="display-page-content">
        <div className="dp-image-con">
          <img 
            src={Ashley} 
            alt="ashley-img" 
            loading="lazy"
            width="400" 
            height="300"
          />
        </div>
        <div className="dp-text-card">
          <div>
            <div className="greytext headerp boldp ash-header">
              Hi There, I'm Ashley Garnett.
            </div>
            <div className="greytext sub-text">Certified Esthetician</div>
          </div>
          <p className="headerp tal ">
            Ashley, a certified esthetician with over 8 years of experience, is
            passionate about skincare. She describes our products as amazing and
            highly recommends them for their unique formulations and visible
            results. Ashley stays current with beauty trends and loves sharing
            her expertise through workshops. Outside work, she enjoys yoga and
            outdoor activities.
          </p>
        </div>
        <div className="email-worker">
          <label htmlFor="email-ash">
            Email Ashley-
            <input
              id="email-ash"
              type="email"
              placeholder="to: ashleyGarnett@gmail.com"
            ></input>
          </label>
          <div>
            <ButtonW>Send Email</ButtonW>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
