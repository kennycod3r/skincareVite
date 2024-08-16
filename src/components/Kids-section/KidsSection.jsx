import React from "react";
import "./KidsSection.css";
import ButtonW from "../../Util/ButtonWrapper/ButtonW";
import { Link } from "react-router-dom";

const KidsSection = ({ bgImg }) => {
  return (
    <div className="kids-section-2">
      <div className="kids-section-inner-2 fC">
        <div
          className="product-img-2"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <p>
          © Fruitfulkids 2024 — All rights reserved. “FruitfulKids” Designed
          specifically for children's skin and hair, our products promote health
          and protect against heat and damage. With a focus on nurturing their
          unique needs, we empower kids to care for themselves confidently as
          they explore their world.
        </p>
        <Link to={"/kids-page"}>
          <ButtonW>SHOP FOR KIDS</ButtonW>
        </Link>
      </div>
    </div>
  );
};

export default KidsSection;
