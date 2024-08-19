import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import Header from "../Header/Header";
import { useBag } from "../../Context/BagContext";
import { useFavorites } from "../../Context/FavoritesContext";
import ProductList from "../ProductList/ProductList";

const ProductDetail = ({ products, handleBagOpen }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));
  const { handleUpdateBag, handleRemoveFromBag, isInBag } = useBag();
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  if (!product) return <div>Product not found</div>;

  const isFavorited = favorites.some((item) => item.id === product.id);
  const inBag = isInBag(product.id);

  const toggleBag = () => {
    if (inBag) {
      handleRemoveFromBag(product.id);
    } else {
      handleUpdateBag({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
      });
      handleBagOpen();
    }
  };

  const toggleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites({
        id: product.id,
        image: product.image,
        name: product.name,
        price: product.price,
      });
    }
  };

  return (
    <>
      <Header position={"static"} />

      <section className="product-detail-section">
        <div className="product-detail">
          <div className="product-detail-img background-images">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-detail-info">
            <div className="product-detail-content">
              <h3 className="title-header product-price">{product.name}</h3>
              <h3 className="product-price small-pp">
                <span>${(product.price + 12).toFixed(2)}</span> ${product.price.toFixed(2)}
              </h3>
              <p>{product.description}</p>
            </div>
            <div className="product-des2 flexDC">
              <div className="w100 flexGap">
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
                  className={`product-btn ${inBag ? "in-bag" : ""}`}
                  onClick={toggleBag}
                >
                  {inBag ? "Remove from Bag" : "Add to Bag"}
                </button>
                <button
                  className={`product-btn ${isFavorited ? "favorited" : ""}`}
                  onClick={toggleFavorite}
                >
                  {isFavorited ? "Remove from Favorites" : "Add to Favorites"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="shop-also">
        <p className="headerp">Shop Also</p>
        <ProductList products={products.slice(0, 4)} />
      </section>
    </>
  );
};

export default ProductDetail;
