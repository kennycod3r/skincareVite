import React from "react";
import "./StickyCards.css";
import ButtonW from "../../Util/ButtonWrapper/ButtonW";

const StickyCards = () => {
  return (
    <div>
      <div className="menu-section">
        <div className="menu-section-lbrown">
          <div className="menu-section-dbrown fC">
            <p className="smallestp">
              Free shipping on all orders above $30, Terms & Conditions apply
            </p>
          </div>
        </div>
        <div className="menu-table">
          <div className="menu-cat-one">
            <div className="qr-code showmobile">
              <div className="marBs mcqr">
                <div className="w100 fC">
                  <p className="p-header">Shop Combinations</p>
                </div>
                <div>
                  <p className="p-reg">
                    Don't Let the Sun Dampen Your Fun Consistently applying
                    skincare sunscreen, along with other protective measures,
                    can greatly reduce your risk of skin cancer and help keep
                    your skin looking healthier and smoother for longer.
                  </p>
                </div>
                <div className="menu-category">
                  <div>
                    <div className="s-item-flex">
                      <div className="mtag">
                        <span className="m-pricetag">$16</span>
                      </div>
                      <div className="mtag">
                        <span className="m-pricetag">$16</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="menu-category">
              <div>
                <div className="s-item-flex">
                  <div className="mtag">
                    <span className="m-pricetag">$16</span>
                  </div>
                  <div className="mtag">
                    <span className="m-pricetag">$16</span>
                  </div>
                </div>
                <div className="content-con">
                  <div className="content-text">
                    <span className="smallestp lto">
                      (Limited time offer) item-type:Scrub Acne Prone
                    </span>
                    <h3 className="product-title sub-text p-title2">
                      Daily Moisturizing Face Cream for Dry Skin, Oat 5 oz
                    </h3>
                    <div className="flexSB">
                      <p className="productprice sub-text">
                        <span>$32. 00</span> $16. 00
                      </p>
                      <p className="productprice sub-text star-text">
                        ★ ★ ★ ★ ★ (113 REVIEWS)
                      </p>
                    </div>
                  </div>

                  <ButtonW className={"shop-btn"}>Shop collection</ButtonW>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-cat-one">
            <div className="qr-cod-none"></div>
            <div className="menu-category">
              <div>
                <div className="s-item-flex">
                  <div className="mtag">
                    <span className="m-pricetag">$16</span>
                  </div>
                  <div className="mtag">
                    <span className="m-pricetag">$16</span>
                  </div>
                </div>
                <div className="content-con">
                  <div className="content-text">
                    <span className="smallestp lto">
                      (Limited time offer) item-type:Scrub Acne Prone
                    </span>
                    <h3 className="product-title sub-text p-title2">
                      Refreshing White Peach and Jasmine Body Wash, Scented Body
                      Wash with Nourishing Serum, Plant-Derived Oils,Vitamins
                    </h3>
                    <div className="flexSB">
                      <p className="productprice sub-text">
                        <span>$32. 00</span> $16. 00
                      </p>
                      <p className="productprice sub-text star-text">
                        ★ ★ ★ ★ ★ (163 REVIEWS)
                      </p>
                    </div>
                  </div>

                  <ButtonW className={"shop-btn"}>Shop collection</ButtonW>
                </div>
              </div>
            </div>
          </div>
          <div className="menu-cat-one">
            <div className="menu-category">
              <div>
                <div className="s-item-flex">
                  <div className="mtag">
                    <span className="m-pricetag">$16</span>
                  </div>
                  <div className="mtag">
                    <span className="m-pricetag">$16</span>
                  </div>
                </div>
                <div className="content-con">
                  <div className="content-text">
                    <span className="smallestp lto">
                      (Limited time offer) item-type:Scrub Acne Prone
                    </span>
                    <h3 className="product-title sub-text p-title2">
                      Men’s Moisturizing Body Wash – Crisp & Invigorating Scent
                      of Citrus, Eucalyptus, Mint, & Aromatic Greens
                    </h3>
                    <div className="flexSB">
                      <p className="productprice sub-text">
                        <span>$32. 00</span> $16. 00
                      </p>
                      <p className="productprice sub-text star-text">
                        ★ ★ ★ ★ ★ (141 REVIEWS)
                      </p>
                    </div>
                  </div>

                  <ButtonW className={"shop-btn"}>Shop collection</ButtonW>
                </div>
              </div>
            </div>
            <div className="qr-code-none"></div>
          </div>

          <div className="menu-category lastContainer">
            <div className="s-item-flex">
              <div className="mtag">
                <span className="m-pricetag">$16</span>
              </div>
              <div className="mtag">
                <span className="m-pricetag">$16</span>
              </div>
              <div className="mtag">
                <span className="m-pricetag">$16</span>
              </div>
              <div className="mtag">
                <span className="m-pricetag">$16</span>
              </div>
            </div>
          
            <ButtonW className={"shop-btn"}>Shop collection</ButtonW>
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickyCards;
