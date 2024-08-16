import React, { useState } from "react";
import "./Journal.css";
import StickyCards from "../components/JournalCards/StickyCards";
import SpinIcon from "../Util/SpinIcon/SpinIcon";
import ButtonW from "../Util/ButtonWrapper/ButtonW";

const Journal = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faq = [
    {
      faqHeader: "What can I use for dry skin?",
      faqAnswer:
        "For dry skin, you can use a hydrating moisturizer such as the Dummy Hydrating Cream. It contains hyaluronic acid and glycerin, which help to retain moisture. Additionally, using a gentle cleanser and avoiding hot showers can prevent further dryness.",
    },
    {
      faqHeader: "How often should I exfoliate my skin?",
      faqAnswer:
        "Exfoliating your skin 2-3 times a week is generally recommended. This helps to remove dead skin cells and promotes cell turnover. However, over-exfoliating can irritate your skin, so it's important to use a gentle exfoliator and listen to your skin's needs.",
    },
    {
      faqHeader: "What are the best anti-aging products?",
      faqAnswer:
        "For anti-aging, look for products with retinol, vitamin C, and hyaluronic acid. Retinol helps to increase cell turnover, while vitamin C brightens the skin and reduces the appearance of fine lines. Hyaluronic acid hydrates the skin, making it look plumper and more youthful.",
    },
    {
      faqHeader: "Can I use the same skincare products twice?",
      faqAnswer:
        "While some products can be used both morning and night, it's beneficial to tailor your routine to the time of day. Use a lightweight moisturizer and sunscreen during the day to protect your skin from UV damage. At night, opt for a heavier moisturizer and products with active ingredients to repair and nourish your skin.",
    },
    {
      faqHeader: "How can I reduce the appearance of dark spots?",
      faqAnswer:
        "To reduce dark spots, use products with vitamin C and niacinamide. Vitamin C brightens the skin and fades pigmentation, while niacinamide helps to even out skin tone. Additionally, always wear sunscreen to prevent further darkening of spots caused by UV exposure.",
    },
  ];

  const handleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <StickyCards />
      <div className="kids-section">
        <div className="kids-section-inner fC">
          <div className="product-img">
            <div className="pr-img-tag">$18</div>
          </div>
          <p>
            © Skincare 2024 — All rights reserved. “Skincare”  is here,
            our new line of glow-getting products are finally skin here! Shop
            now and treat your skin to something hydrating, rejuvenating, and
            just for your everyday!.
          </p>
          <ButtonW>Shop Now</ButtonW>
        </div>
      </div>
      <div className="productguide">
        <div className="productguidebrown">
          <p className="headerp">Frequently Asked Questions</p>
          {faq.map((item, index) => (
            <div key={index} className="expand-btn b800">
              <div onClick={() => handleExpand(index)} className="expandHeader sub-text">
                <div>{item.faqHeader}</div>
                <SpinIcon expanded={expandedIndex === index} />
              </div>
              {expandedIndex === index && (
                <p className="expanded-text headerp">{item.faqAnswer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Journal;
