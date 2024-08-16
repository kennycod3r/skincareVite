import React from "react";
import "./Blacksection.css";
import creamGirlsImage from "../../../src/img/creamgirls.webp";
import linedImage from "../../assets/Lined.svg";

const BlackSection = () => {
  return (
    <section
      className="blacksection"
      style={{ backgroundImage: `url(${creamGirlsImage})` }}
    >
      <div className="white-cut-section">
        <div className="wc-inner">
          <p>Become a Distributor? join,</p>
          <div
            className="line-d w100"
            style={{ backgroundImage: `url(${linedImage})` }}
          ></div>

          <h4 className="semiBold">
            934k <sup className="offset">+</sup>
          </h4>
          <span>distributors across the world</span>
          <div>
            <a to={"/"} className="w100">
              <div className="button-group">
                <div className="u--rel">
                  <div className="p-small">Join Now</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlackSection;
