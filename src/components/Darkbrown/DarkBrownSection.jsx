import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./DarkBrown.css";

gsap.registerPlugin(ScrollTrigger);

const DarkBrownSection = () => {
  const flowerSvgRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      flowerSvgRef.current,
      { scale: 0.2 },
      {
        scale: 1.8,
        scrollTrigger: {
          trigger: flowerSvgRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="team-section">
      <div className="team-section-relative">
        <div className="flowerSvg" ref={flowerSvgRef}></div>
        <div className="pad-m">
          <div className="quote-element">
            <div className="quote-heading headerh2">
              <div className="line">“More than I imagined,</div>
              <div className="line">less stressed about my</div>
              <div className="line">skin conditions, I feel</div>
              <div className="line">so much more in control</div>
              <div className="line">of my life!”</div>
              <span className="diana">_Diana (on the aloe restore).</span>
            </div>
          </div>
          <div>
            <div className="tsgrid">
              <div>
                <div>
                  <div className="TextSmall tal">Our Mission</div>
                  <div className="TextParagraph tal">
                    <p className="sub-text">
                      At Lumina, we believe in the power of self-care. Our
                      mission is to create skincare products that not only
                      enhance your natural beauty but also uplift your spirit.
                      We are committed to quality and innovation, offering
                      products that cater to your unique needs.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="ash-div">
                  <div>
                    <div className="cover-img">
                      <div className="testimonial showmobile">Ashley</div>
                    </div>
                  </div>
                  <div className=" tal">
                    <div className="b800 tal">Meet Ashley, Our Esthetician</div>
                    <p className="sub-text">
                      Ashley is our experienced esthetician who brings a wealth
                      of knowledge and expertise to Lumina. She is passionate
                      about helping clients achieve their skincare goals through
                      personalized treatments and professional advice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DarkBrownSection;
