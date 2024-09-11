import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.svg";
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import BagIcon from "../../Util/Bag-icon/BagIcon";

const Header = memo(
  ({
    handleSidebar,
    openSidebar,
    handleBagOpen,
    bagTotal,
    bagOpen,
    position,
  }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);

    const styles = {
      opacity: isVisible ? 1 : 0,
      transition: "opacity 0.4s ease-in-out",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: isVisible ? "0 2px 5px rgba(0, 0, 0, 0.1)" : "none",
    };

    const styles2 = {
      position: "static",
      borderBottom: "1px solid #e0e0e0",
      boxShadow: "none",
    };

    return (
      <header>
        <nav id="Navbar" style={position ? styles2 : styles}>
          <div className="inner-div">
            <div className="div-one">
              <ul className="main-nav-bar">
                <li>
                  <HamburgerMenu
                    bagOpen={bagOpen}
                    handleSidebar={handleSidebar}
                    openSidebar={openSidebar}
                  />
                </li>
                <li className="show-big showmobile animateLink">
                  <Link to="/">
                    <div className="nav-link-click">
                      <p className="tinyp" data-hover="HOME">
                        <span className="nav-dot">•</span> HOME
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="show-big animateLink">
                  <Link to="/Journal">
                    <div className="nav-link-click">
                      <p className="tinyp" data-hover="JOURNAL">
                        <span className="nav-dot">•</span> JOURNAL
                      </p>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="div-one">
              <Link to="/">
                <div className="logo-con">
                  <img src={logo} alt="logo" className="logo" loading="lazy"/>
                </div>
              </Link>
            </div>
            <div className="div-one nav-3">
              <ul>
                <li className="show-big animateLink">
                  <Link to="/kids-page">
                    <div className="nav-link-click">
                      <p className="tinyp" data-hover="KIDS">
                        <span className="nav-dot">•</span> KIDS
                      </p>
                    </div>
                  </Link>
                </li>

                <li className="show-big din-li animateLink">
                  <Link to="/products" id="animateNav">
                    <div className="nav-link-click">
                      <p className="tinyp" data-hover="PRODUCTS">
                        <span className="nav-dot">•</span>PRODUCTS
                      </p>
                    </div>
                  </Link>
                </li>
                <li className="animateLink showmobile">
                  <Link to="/favorites">
                    <div className="nav-link-click">
                      <p className="tinyp" data-hover="FAV">
                        <span className="nav-dot">•</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          fill="none"
                          stroke="#1A1A1A"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke-miterlimit="10"
                            stroke-width="1.2"
                            d="M19.2 21.412 12 14.4l-7.2 7.2V5.775A3.37 3.37 0 0 1 8.175 2.4h7.837c1.868 0 3.188 1.32 3.188 3.187v15.825Z"
                          ></path>
                        </svg>
                      </p>
                    </div>
                  </Link>
                </li>
                <BagIcon bagTotal={bagTotal} handleBagOpen={handleBagOpen} />
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
);

export default Header;
