// context/BagContext.js
import React, { createContext, useState, useContext } from "react";

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

  const getTotal = () => {
    return bagItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <BagContext.Provider value={{ bagItems, handleUpdateBag, getTotal }}>
      {children}
    </BagContext.Provider>
  );
};

export const useBag = () => useContext(BagContext);
