import React from "react";
import "./Smallsection.css";
import mainproduct from "../../img/mainproduct.webp";

const SmallSection = () => {
  const testimonials = [
    {
      title: "Best Skincare Product of 2024",
      rating: "Google ★★★★★",
      score: "5.0/1232",
      text: "The Best Skincare Product of 2024 is truly exceptional. Its results exceeded my expectations with visible improvements in just a few days. The texture is lightweight, and it absorbs quickly, making it a staple in my skincare routine.",
    },
    {
      title: "Top Rated Anti-Aging Cream",
      image: mainproduct,
      text: "The Top Rated Anti-Aging Cream has revolutionized my skincare regimen. With a rich formula that smooths out wrinkles and fine lines, it has become a go-to product for maintaining youthful skin. Highly recommended!",
    },
    {
      title: "Award-Winning Hydrating Serum",
      image: mainproduct,
      text: "The Award-Winning Hydrating Serum delivers intense moisture and leaves the skin feeling plump and refreshed. Its advanced hydration technology makes it a must-have for those seeking a radiant complexion.",
    },
    {
      title: "Luxury Brightening Mask",
      image: mainproduct,
      text: "The Luxury Brightening Mask offers a spa-like experience at home. Its luxurious formula brightens and revitalizes the skin, providing a noticeable glow and even skin tone. Ideal for a pampering session or special occasions.",
    },
  ];
  return (
    <section className="outer-ssection">
      <div className="small-section">
        <div className="ss-grid">
          <div>
            <p className="headerp color-wheat">Our Testimonials</p>
          </div>
          <div>
            <ul>
              {testimonials.map((testimonial, index) => (
                <li key={index} className={index % 2 === 1 ? "li-2" : ""}>
                  <div>
                    <p className="boldp ratingsp">{testimonial.title}</p>
                    {testimonial.rating && (
                      <>
                        <div className="boldp ratingsp  color-wheat">
                          {testimonial.rating}

                          {testimonial.score}
                        </div>
                      </>
                    )}
                    {testimonial.image && (
                      <div className="mp-image-con">
                        <p className="small-text ">{testimonial.text}</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallSection;
