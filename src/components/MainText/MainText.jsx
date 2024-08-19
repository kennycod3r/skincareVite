import React, { useEffect } from "react";
import "./MainText.css";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TagComponent from "../../Util/Tag/TagComponent";
import ButtonW from "../../Util/ButtonWrapper/ButtonW";

gsap.registerPlugin(ScrollTrigger);

const MainText = () => {
  useEffect(() => {
    gsap.to(".headerh2", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".main-text-area",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      <section className="main-text-area">
        <div className="main-content doublegrid">
          <div>
            <div>
              <div className="animate-con m-head">
                <h2 className="headerh2 color-brown">Lumina</h2>
              </div>
              <p className="grey-text sub-text">Skin-care Body Hair Bath</p>
            </div>
          </div>
          <div className="gridGap marBs">
            <div>
              <div className="animate-con m-head">
                <h2 className="headerh2">Discover Your Radiance.</h2>
              </div>
             
            </div>
            <p className=" tal sub-text mCenter">
              Lumina is a multicultural skincare company, dedicated to providing
              well-being, self-esteem and self-confidence to its clients. Our
              commitment is to offer high quality products, ensuring that you
              always have beautiful skin and feel good about yourself. We
              constantly seek innovation, providing a unique shopping experience
              and cultivating values such as commitment to quality, and delivery
              of unique and innovative products.
            </p>
          </div>
        </div>
      </section>

      <div className="title-cards">
        <div className="taC marBs">
          <span className="headerp color-brown">
            Shop Collection Of Skin Concerns
          </span>
        </div>
        <div className="skin-cards flexSB gap10">
          <div className="skin-card acne">
            <TagComponent>acne</TagComponent>
            <div className="hero-overlay r-overlay">
              <div className="small-text flexCenter animateLink">
                <TagComponent>Acne</TagComponent>
              </div>
            </div>
          </div>
          <div className="skin-card sc2">
            <div className="hero-overlay r-overlay">
              <div className="small-text flexCenter animateLink">
                <TagComponent>scars</TagComponent>
              </div>
            </div>
            <TagComponent>scars</TagComponent>
          </div>
          <div className="skin-card sc3">
            <div className="hero-overlay r-overlay">
              <div className="small-text flexCenter animateLink">
                <TagComponent>rings</TagComponent>
              </div>
            </div>
            <TagComponent>rings</TagComponent>
          </div>
          <div className="skin-card sc4">
            <div className="hero-overlay r-overlay">
              <div className="small-text flexCenter animateLink">
                <TagComponent>marks</TagComponent>
              </div>
            </div>
            <TagComponent>marks</TagComponent>
          </div>
        </div>
        <div className="fC">
          <Link to="/products">
            <ButtonW>view all</ButtonW>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MainText;
