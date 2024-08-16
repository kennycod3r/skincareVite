import React from "react";
import "./Pages.css";
import ButtonW from "../Util/ButtonWrapper/ButtonW";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content ">
        <div className="contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <ButtonW type="submit">Send Message</ButtonW>
          </form>
        </div>
        <div className="contact-details">
          <h3>Get in Touch</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Location: 123 Main St, Anytown, USA</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
