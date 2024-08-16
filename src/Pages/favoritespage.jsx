import React from 'react';
import Favorites from '../components/Favorites/Favorites';

const FavoritesPage = ({ favoriteItems }) => (
  <div>
    <Favorites favoriteItems={favoriteItems} />
  </div>
);

export default FavoritesPage;
