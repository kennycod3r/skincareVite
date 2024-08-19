import React from "react";
import "./StaticNav.css";
import ButtonW from "../ButtonWrapper/ButtonW";
import skincareData from "../../Data/skincareData";
import { Link } from "react-router-dom";

const StaticNav = () => {
  // Flatten the skincareData array if it's nested
  const flattenedSkincareData = skincareData.flat();

  const skicareCat = [
    "Body Lotion",
    "Body Scrub",
    "Body Wash",
    "Facial Cleanser",
    "Facial Moisturizers",
    "Facial Scrub",
    "Makeup Remover",
    "Masks",
    "Shaving Cream",
    "Sunscreen",
    "Treatment",
    "By Concern",
    "Acne",
    "Aging",
    "Cracked Skin",
    "Dark Spots",
  ];
  return (
    <div className="static-nav lbrown-nav showmobile">
      <div className="static-div-one flexSB">
        <ul className="main-nav-bar">
          <li>
            <p className="logo-text">
              <span>SKINCARE</span>
            </p>
          </li>
          <li id="productsDD" className="nav-col-link">
            <div className="fC gap10 navcl-inner">
              <p className="smallestp">
                <span>PRODUCTS</span>
              </p>
            </div>
            <div className="nav-dd products-dd">
              <ul className="nav-dd-lists">
                {skicareCat.slice(0, 8).map((item) => (
                  <li className="linerAnimation" key={item}>
                    <div className="arrow-svg">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="10px"
                        height="10px"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="1.5"
                          d="M8.474 18.966L15.44 12 8.474 5.033"
                        ></path>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li id="skincareDD" className="nav-col-link">
            <div className="fC gap10 navcl-inner">
              <p className="smallestp">
                <span>SKINCARE</span>
              </p>
            </div>
            <div className="nav-dd products-dd">
              <ul className="nav-dd-lists">
                {skicareCat.slice(9, -1).map((item) => (
                  <li className="linerAnimation" key={item}>
                    <div className="arrow-svg">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        viewBox="0 0 24 24"
                        role="img"
                        width="10px"
                        height="10px"
                        fill="none"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="1.5"
                          d="M8.474 18.966L15.44 12 8.474 5.033"
                        ></path>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
          <li id="lipcareDD" className="nav-col-link">
            <div className="fC gap10 navcl-inner">
              <p className="smallestp gap10">
                <span>LIP</span>
                <span className="showmobile">CARE</span>
              </p>
            </div>
          </li>
          <li id="aboutDD" className="nav-col-link">
            <div className="fC gap10 navcl-inner">
              <p className="smallestp flexSB">
                <span>ABOUT</span>
                <span>US</span>
              </p>
            </div>
          </li>
        </ul>
        <div className="flexSB showmobile">
          <Link to={"./Contact-page"}>
            {" "}
            <ButtonW className="">CONTACT US</ButtonW>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StaticNav;
