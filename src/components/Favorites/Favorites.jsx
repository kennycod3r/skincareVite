import React from "react";
import { useBag } from "../../Context/BagContext";
import { useFavorites } from "../../Context/FavoritesContext";
import "./Favorites.css";
import Header from "../Header/Header";
import ButtonW from "../../Util/ButtonWrapper/ButtonW";

const Favorites = ({ favoriteItems = [] }) => {
  const { handleUpdateBag } = useBag();
  const { removeFromFavorites } = useFavorites();

  const handleAddToBag = (item) => {
    handleUpdateBag({
      id: item.id,
      image: item.image,
      name: item.name,
      price: item.price,
    });
    removeFromFavorites(item.id); // Optionally remove from favorites after adding to bag
  };

  return (
    <div className="favorites-container">
      <h2 className="favorites-title headerh2">My Favorites</h2>
      <ul className="favorites-grid">
        {favoriteItems.length > 0 ? (
          favoriteItems.map((item) => (
            <li key={item.id} className="favorites-item">
              <div className="favorites-img-div">
                <img
                  src={item.image}
                  alt={item.name}
                  className="favorites-img"
                />
              </div>
              <div className="favorites-detail">
                <h3 className="favorites-item-title">{item.name}</h3>
                <p className="favorites-item-price">${item.price}.00</p>
                <div>
                  <ButtonW
                    className="favorites-btn add-to-bag-btn"
                    onClick={() => handleAddToBag(item)}
                  >
                    Add to Bag
                  </ButtonW>
                  <button
                    className="remove-favorite-btn"
                    onClick={() => removeFromFavorites(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="favorites-empty">Your favorites list is empty.</p>
        )}
      </ul>
    </div>
  );
};

export default Favorites;
