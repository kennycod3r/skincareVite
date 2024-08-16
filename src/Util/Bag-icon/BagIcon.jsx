import React from "react";
import { useBag } from "../../Context/BagContext";

const BagIcon = ({ handleBagOpen, bagTotal }) => {
  const { bagItems} = useBag();
  return (
    <button className="bag-icon-new" onClick={handleBagOpen}>
      <p>{bagTotal = bagItems.length}</p>
      <div className="header-cart" id="cart_btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24px"
          height="24px"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#1A1A1A"
            strokeMiterlimit="10"
            strokeWidth="1.2"
            d="M2.4 8.4h19.2v10.2a3 3 0 0 1-3 3H5.4a3 3 0 0 1-3-3V8.4Z"
          ></path>
          <path
            stroke="#1A1A1A"
            strokeMiterlimit="10"
            strokeWidth="1.2"
            d="M8.4 10.8V6a3.6 3.6 0 0 1 7.2 0v4.8"
          ></path>
        </svg>
      </div>
    </button>
  );
};

export default BagIcon;
