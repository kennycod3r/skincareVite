import React from "react";
import "./Pages.css";
import { useBag } from "../Context/BagContext";
import BagIcon from "../Util/Bag-icon/BagIcon";
import ButtonW from "../Util/ButtonWrapper/ButtonW";

const CheckoutPage = () => {
  const { bagItems, getTotal } = useBag();

  return (
    <div className="checkout-page">
      <div className="checkout-section checkout-div1 checkout-div2">
        {bagItems.length > 0 ? (
          bagItems.map((item) => (
            <div key={item.id} className="checkout-item">
              <img
                src={item.image}
                alt={item.name}
                className="checkout-item-img"
              />
              <div className="checkout-item-details">
                <h4 className="tinyp b800">{item.name}</h4>
                <p>Price: ${item.price}.00</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Your bag is empty.</p>
        )}
      </div>

      <div className="checkout-section checkout-div1">
        <div>
          <h3 className="section-header">
            Your Bag
            <BagIcon />
          </h3>
          <h3 className="checkout-total">Total: ${getTotal.toFixed(2)}</h3>
          <h3 className="section-header">Personal Information</h3>
        </div>
        <form className="checkout-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              required
              aria-describedby="fullName-desc"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@example.com"
              required
              aria-describedby="email-desc"
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
          <ButtonW className={"checkout-btn"} type={"submit"}>Complete Purchase</ButtonW>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
