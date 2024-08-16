import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import TinyDiv from "../../Util/tinyDiv/TinyDiv";
import heroImg from "../../img/womanHero.webp";
import StaticNav from "../../Util/StaticNav/StaticNav";
import './Hero.css';

const Hero = React.memo(({ heroImgUrl, handleBagOpen, handleOpenDisplay }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section className="main-hero fC">
      <StaticNav handleBagOpen={handleBagOpen} />
      <div
        ref={heroRef}
        className={`hero fC ${isImageLoaded ? "loaded" : ""}`}
        style={{
          backgroundImage: isImageLoaded
            ? `url(${heroImgUrl || heroImg})`
            : "none",
        }}
      >
        <div className="hero-overlay mainhero-overlay">
          <div className="tiny-div-container">
            <p className="whiteColor">Speak to a professional?</p>
            <button className="open-btn" onClick={handleOpenDisplay}>
              <TinyDiv
                imgtext="Ashley Garnett"
                imageUrl={
                  "https://plus.unsplash.com/premium_photo-1705009607198-9664f0b4564c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                tinyText="certified Esthetician"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="view-hero-header">
        <div className="view-hero-header-details flexSB">
          <p className="showmobile">
            ↓<span>EXPLORE</span>
          </p>
          <div className="flexCenter">
            <p>
              SHOP
              <br className="small-hide" /> BY SKIN TYPE
            </p>
          </div>
          <div className="flexCenter">
            <p>
              BUSINESS
              <br className="small-hide" /> OR SPONSORSHIP PLANNING
            </p>
          </div>
          <div className="flexCenter">
            <p>
              CLEANSERS
              <br className="small-hide" /> BODYCARE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Hero;
