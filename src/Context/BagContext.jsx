import React, { createContext, useState, useContext, useMemo } from "react";

const BagContext = createContext();

export const BagProvider = ({ children }) => {
  const [bagItems, setBagItems] = useState([]);

  const handleUpdateBag = (bagItem) => {
    setBagItems((prevState) => {
      const existingItem = prevState.find((item) => item.id === bagItem.id);
      if (existingItem) {
        return prevState.map((item) =>
          item.id === bagItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevState, { ...bagItem, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromBag = (id) => {
    setBagItems((prevState) =>
      prevState.filter((item) => item.id !== id)
    );
  };

  // Function to check if the product is already in the bag
  const isInBag = (id) => {
    return bagItems.some((item) => item.id === id);
  };

  const getTotal = useMemo(
    () =>
      bagItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [bagItems]
  );

  return (
    <BagContext.Provider
      value={{ bagItems, handleUpdateBag, handleRemoveFromBag, isInBag, getTotal }}
    >
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => useContext(BagContext);
