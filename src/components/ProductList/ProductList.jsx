import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

const ProductItem = ({ product, discount }) => (
  <div className="product-item">
    <Link to={`/products/${product.id}`}>
      <div className="product-img-con">
        <span className="m-pricetag absolute-m">
          {discount ? `$${product.price - 10}` : `$${product.price}`}
        </span>
        <div className="hero-overlay r-overlay">View Details</div>
        <img src={product.image} alt={product.name} loading="lazy" />
      </div>
    </Link>
    <h3 className="product-title sub-text">{product.name}</h3>
    <p className="productprice sub-text">${product.price}.00</p>
  </div>
);

const ProductList = ({ products, discount }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} discount={discount} />
      ))}
    </div>
  );
};

export default ProductList;
