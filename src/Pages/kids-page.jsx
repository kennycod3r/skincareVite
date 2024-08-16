import React from "react";
import ProductList from "../components/ProductList/ProductList";
import skincareData from "../Data/skincareData";
import '../Pages/Pages.css';

const KidsPage = () => {
  const kidsProducts = skincareData.filter(
    (product) => product.category === "kids"
  );

  return (
    <div className="main-kids-page">
      <section className="kids-hero-outer">
        <div className="kids-hero">
          <div className="kids-hero-text">
            <h3>Skincare, curated for </h3>
            <h3>your kids!</h3>
          </div>
        </div>
        <div className="small-brown-des">
          <p className="headerp sub-text">
            Made for kids' sensitive skin and hair
          </p>
          <p className="headerp smallestp">
            "Crafted with the utmost care, our products are specially formulated
            to nurture and protect children's sensitive skin and hair."
          </p>
        </div>
      </section>
      <ProductList products={kidsProducts} discount/>
    </div>
  );
};

export default KidsPage;
