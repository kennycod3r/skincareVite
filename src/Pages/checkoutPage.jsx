import React, { useState } from "react";
import "./Pages.css";
import { useBag } from "../Context/BagContext";
import BagIcon from "../Util/Bag-icon/BagIcon";
import ButtonW from "../Util/ButtonWrapper/ButtonW";
import TagComponent from "../Util/Tag/TagComponent";

const CheckoutPage = () => {
  const { bagItems, getTotal, handleRemoveFromBag, updateQuantity } = useBag();

  return (
    <>
      <div className="menu-section-lbrown">
        <div className="menu-section-dbrown fC">
          <p className="smallestp">
            Free shipping on all orders above $30, Terms & Conditions apply
          </p>
        </div>
      </div>
      <div className="checkout-page">
        <div className="checkout-page-inner">
          <div className="checkout-section checkout-div1 checkout-div2">
            <h2 className="checkoutH2 color-brown">checkout</h2>
            {bagItems.length > 0 ? (
              bagItems.map((item) => (
                <div key={item.id} className="checkout-item">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="checkout-item-img"
                    />
                    <TagComponent>25L</TagComponent>
                  </div>
                  <div className="checkout-item-details">
                    <div className="w100">
                      <h4 className="headerp">{item.name}</h4>
                      <p className="tinyp">Price: ${item.price}.00</p>
                    </div>
                    
                    <div className="fC flexDC w100">
                      <p>Quantity:</p>
                      <div className="quantity-control ">
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button
                          className="quantity-btn"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="relative w100 fC">
                      <button
                        className="remove-favorite-btn static"
                        onClick={() => handleRemoveFromBag(item.id)}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>Your bag is empty.</p>
            )}
          </div>

          <div className="checkout-section checkout-div1">
            <div className="totaldiv">
              <h3 className="section-header">
                Your Bag
                <BagIcon />
              </h3>
              <div>
                <h3 className="checkout-total">
                  Total: ${getTotal.toFixed(2)}
                </h3>
                <h3 className="section-header headerp">Personal Information</h3>
              </div>
            </div>
            <form className="checkout-form">
              <div className="card-section">
                <p className="headerp">User Detail</p>
                <div className="form-group">
                  <label htmlFor="fullName">Cardholder Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="ie. John Doe"
                    required
                    aria-describedby="fullName-desc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    required
                    aria-describedby="phone-desc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Card-Number">Card Number</label>
                  <input
                    type="number"
                    id="CardNumber"
                    name="CardNumber"
                    placeholder="• • • •  • • • •  • • • • 7890"
                    required
                    aria-describedby="CardNumber-desc"
                  />
                </div>
              </div>

              <div className="card-section">
                <p>Shipping Detail</p>
                <div className="form-group">
                  <label htmlFor="address">Shipping Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="1234 Main St, Apartment, Suite, etc."
                    required
                    aria-describedby="address-desc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    required
                    aria-describedby="city-desc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    placeholder="10001"
                    required
                    aria-describedby="zipCode-desc"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="United States"
                    required
                    aria-describedby="country-desc"
                  />
                </div>
              </div>
              <ButtonW className={"checkout-btn"} type={"submit"}>
                Complete Purchase
              </ButtonW>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
