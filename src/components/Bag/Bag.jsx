import React from "react";
import "./BagStyle.css";
import { createPortal } from "react-dom";
import { useBag } from "../../Context/BagContext";
import { Link } from "react-router-dom";
import CloseButton from "../../Util/CloseButton";

const Bag = ({ bagOpen, handleBagOpen }) => {
  const sideBag = document.getElementById("sideBag");
  const { bagItems, handleRemoveFromBag, getTotal } = useBag();

  if (!sideBag) return null;

  return createPortal(
    <section className={`main-sidebar-bag ${bagOpen ? "open" : ""}`}>
      <div className="inner-main-sidebar-bag">
        <div className="w100 bagh-content">
          <div className="bag-header">
            <div className="headerp">Bag Header</div>
            <div
              className="close-btn-circle-sidebar close-btn-bag"
              onClick={handleBagOpen}
            >
              <CloseButton />
            </div>
          </div>
          <ul className="bag-body" data-lenis-prevent="true">
            {bagItems.length > 0 ? (
              bagItems.map((item) => (
                <li key={item.id} className="bag-item">
                  <div className="bag-img-div">
                    <img src={item.image} alt={item.name} loading="lazy"/>
                  </div>
                  <div className="w100 cart-detail-text">
                    <div className="flexSB">
                      <h3 className="headerp">{item.name}</h3>
                      <button onClick={() => handleRemoveFromBag(item.id)}>
                        Remove
                      </button>
                    </div>
                    <p className="num boldp cream-name">${item.price}.00</p>
                  </div>
                </li>
              ))
            ) : (
              <p>Your bag is empty.</p>
            )}
          </ul>
        </div>
        {bagItems.length > 0 && (
          <div className="bag-footer">
            <div className="product-detail-buttons w100">
              <Link to="/checkoutPage" className="w100">
                <button className="bag-btn" onClick={handleBagOpen}>
                  Checkout Total: ${getTotal.toFixed(2)}
                </button>
              </Link>
              <div className="underline" onClick={handleBagOpen}>
                Continue Shopping?
              </div>
            </div>
          </div>
        )}
      </div>
    </section>,
    sideBag
  );
};

export default Bag;
