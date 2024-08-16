import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../../assets/logo.svg';
import HamburgerMenu from "../Hamburger/HamburgerMenu";
import BagIcon from "../../Util/Bag-icon/BagIcon";

const Header = ({ handleSidebar, openSidebar, handleBagOpen, bagTotal, bagOpen }) => {
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
    transition: "all 200ms ease",
  };

  return (
    <header>
      <nav id="Navbar" style={styles}>
        <div className="inner-div">
          <div className="div-one" id="sidebar">
            <ul className="main-nav-bar">
              <li>
                <HamburgerMenu
                  bagOpen={bagOpen}
                  handleSidebar={handleSidebar}
                  openSidebar={openSidebar}
                />
              </li>
              <li className="show-big animateLink">
                <Link to="/">
                  <div className="nav-link-click">
                    <p className="tinyp" data-hover="HOME">
                      HOME
                    </p>
                  </div>
                </Link>
              </li>
              <li className="show-big animateLink">
                <Link to="/Journal">
                  <div className="nav-link-click">
                    <p className="tinyp" data-hover="JOURNAL">
                      JOURNAL
                    </p>
                  </div>
                </Link>
              </li>
              
            </ul>
          </div>
          <div className="div-one">
            <Link to="/">
              <div className="logo-con"><img src={logo} alt="logo" className="logo"/></div>
            </Link>
          </div>
          <div className="div-one nav-3">
            <ul>
              <li className="show-big animateLink">
                <Link to="/kids-page">
                  <div className="nav-link-click">
                    <p className="tinyp" data-hover="KIDS">
                      KIDS
                    </p>
                  </div>
                </Link>
              </li>
              <li className="show-big din-li animateLink">
                <Link to="/products" id="animateNav">
                  <div className="nav-link-click">
                    <p className="tinyp" data-hover="PRODUCTS">
                      PRODUCTS
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
};

export default Header;
