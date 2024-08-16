import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useBag } from "../../Context/BagContext"; // Ensure this path is correct
import StaticNav from "../../Util/StaticNav/StaticNav";
import ProductList from "../ProductList/ProductList";

const ProductDetail = ({ products, handleBagOpen, bagTotal }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const { handleUpdateBag } = useBag();

  const [clicked, setClicked] = useState(false);

  if (!product) return <div>Product not found</div>;

  const addToBag = () => {
    if (clicked) return;

    handleUpdateBag({
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
    });
    handleBagOpen()
    setClicked(true);
  };

  return (
    <>
      <div className="menu-section-lbrown">
          <div className="menu-section-dbrown fC">
            <p className="smallestp">
            Product Detail
            </p>
          </div>
        </div>
      <section className="product-detail-section">
        <div className="product-detail">
          <div className="product-detail-img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <div className="product-detail-content">
              <h3 className="title-header product-price">{product.name}</h3>
              <h3 className="product-price small-pp">
                <span>${product.price + 12}</span> ${product.price}
              </h3>
              <p>{product.description}</p>
            </div>
            <div className="product-des2 flexDC">
              <div className="w100 flexGap">
                <div className="flexSB svg-animal-section w100"></div>
                {product.productList && (
                  <ul className="w100">
                    {product.productList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="product-detail-buttons w100">
                <button
                  className="product-btn"
                  onClick={addToBag}
                  style={{ backgroundColor: clicked ? "#89654e" : "" }}
                >
                  {clicked ? "Added to Bag" : "Add to Bag"}
                </button>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-also">
        <p className="headerp">shop also</p>
        <ProductList products={products.slice(0, 4)}/>
      </section>
    </>
  );
};

export default ProductDetail;
