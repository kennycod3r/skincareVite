import React, { useState } from "react";
import "./Footer.css";
import ButtonW from "../../Util/ButtonWrapper/ButtonW";
import ArrowLink from "../../Util/ArrowLink";
const BackToTop = React.lazy(() => import("./BackToTop"));

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState(
    "Subscribe to our newsletter"
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubscription = () => {
    if (subscribeMessage === "Subscribed!") return;

    if (email.length < 10) {
      setSubscribeMessage("Enter a valid email");
    } else {
      setSubscribeMessage("Subscribed!");
      setEmail("");
    }
  };

  return (
    <>
      <footer className="Homefooter">
        <React.Suspense fallback={<div>Loading...</div>}>
          <BackToTop />
        </React.Suspense>
        <div className="f-header">
          <div className="flex-btn-reg animateLink">
            <ArrowLink /> <p>© lumina</p>
          </div>
          <div className="flex-btn-reg animateLink">
            <ArrowLink /> <p>Product Guidelines</p>
          </div>
          <div className="flex-btn-reg animateLink">
            <ArrowLink /> <p>© copyright 2024</p>
          </div>
        </div>
       

        <div className="footer-container">
          <div className="footer--text footer-col">
            <div>
              <h1 className="fhs">
                Subscribe and Receive <br />
                News And Offers!
              </h1>
              <div className="newsletter-div">
                <p
                  className="sub-text"
                  style={{
                    color:
                      subscribeMessage === "Enter a valid email"
                        ? "red"
                        : "#f1f1f1",
                  }}
                >
                  {subscribeMessage}
                </p>
                <input
                  placeholder="Enter Your Email Address"
                  type="email"
                  required
                  onChange={handleEmailChange}
                  value={email}
                  id="subscribe-input"
                />
                <div className="" onClick={handleSubscription}>
                  <ButtonW>Subscribe</ButtonW>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <div className="flex-btn-reg-footer animateLink">
              <p>Aloe vera etc</p>
              <ArrowLink />
            </div>

            <ul className="aligned-paragraphs footer-ap">
              <li className="smallestp">
                Business
                <br />© Johnson & Johnson Consumer Inc. 2024. This site is
                published by Johnson & Johnson Consumer Inc., which is solely
                responsible for its contents. This website is intended for
                visitors from the United States.
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <p>CONTACT</p>
            <ul className="aligned-paragraphs footer-ap">
              <li className="small-text smallestp">0031 0 434 50 12 08</li>
              <li className="small-text smallestp">
                Location <br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit.
              </li>
              <li className="small-text smallestp">
                History
                <br />
                welcome@chateauwittem.com
              </li>
            </ul>
          </div>
        </div>

        <ul className="footer-strip">
          <li className="flex-btn-reg-f">
            <ArrowLink />{" "}
            <span className="smallestp job-title">© copyright' 2024</span>
          </li>
          <li className="flex-btn-reg-f">
            <ArrowLink /> <span className="smallestp">DEVELOPER.SOCIAL.INSTAGRAM/KENNY.LJ 2024</span>
          </li>
          <li className="flex-btn-reg-f">
            <ArrowLink /> <span className="smallestp">CODE BY @KENNYCOD3R</span>
          </li>
          <li className="flex-btn-reg-f">
            <ArrowLink /> <span className="smallestp">PRIVACY POLICY</span>
          </li>
          <li className="flex-btn-reg-f">
            <ArrowLink /> <span className="smallestp">TERMS AND CONDITIONS</span>
          </li>
        </ul>
      </footer>
    </>
  );
}
