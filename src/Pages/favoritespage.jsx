import React from "react";
import './Pages.css';
import Header from "../components/Header/Header";
import { useFavorites } from "../Context/FavoritesContext";
import Favorites from "../components/Favorites/Favorites";

const FavoritesPage = () => {
  const { favorites } = useFavorites(); // Get favorites from context

  return (
    <div className="favorites-Page">
      <Header position={"static"}/>
      <Favorites favoriteItems={favorites} />
    </div>
  );
};

export default FavoritesPage;
