import React from 'react';

const Favorites = ({ favoriteItems }) => (
  <div>
    <h2>Favorites</h2>
    {favoriteItems.map(item => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        {/* Add functionality to remove from favorites */}
      </div>
    ))}
  </div>
);

export default Favorites;
