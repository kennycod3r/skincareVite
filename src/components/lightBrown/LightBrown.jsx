import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LightBrown.css";
import KidsSection from "../Kids-section/KidsSection";
import kidImg from "../../img/kidImg.jpg";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const LightBrown = () => {
  useEffect(() => {
    gsap.fromTo(
      "#fd1",
      { rotate: 0, x: 0 },
      {
        rotate: -22,
        x: -40,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#sliderContainer",
          start: "top 80%", // Trigger slightly earlier
          end: "bottom top",
          scrub: 0.5, // Adjust scrub for smoother effect
          markers: false, // Disable markers for production
        },
      }
    );

    gsap.fromTo(
      "#fd2",
      { rotate: 0, x: 0 },
      {
        rotate: 22,
        x: 40,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#sliderContainer",
          start: "top 80%", // Trigger slightly earlier
          end: "bottom top",
          scrub: 0.5, // Adjust scrub for smoother effect
          markers: false, // Disable markers for production
        },
      }
    );
  }, []);

  return (
    <section className="slideshow-container-outer">
      <section className="slideshow-container" id="sliderContainer">
        <div className="fd-conn">
          <div className="floating-div" id="fd1">
            <div className="flowerIcon"></div>
            <div className="fd-inner">
              <h4 className="semiBold card_heading">
                <span className="offset">$</span>10
              </h4>
              <p>off on all kids products</p>
            </div>
            <Link to={"/kids-page"} className="w100">
              <div className="button-group">
                <div className="u--rel">
                  <div className="p-small">claim now</div>
                </div>
              </div>
            </Link>
          </div>
          <div className="floating-div" id="fd2">
            <div className="flowerIcon2"></div>
            <div className="fd-inner">
              <h4 className="semiBold card_heading">
                <span className="offset">$</span>10
              </h4>
              <p className="blue-color">off on all kids products</p>
            </div>
            <Link to={"/kids-page"} className="w100">
              <div className="button-group">
                <div className="u--rel">
                  <div className="p-small">claim now</div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <KidsSection bgImg={kidImg} />
      </section>
    </section>
  );
};

export default LightBrown;
