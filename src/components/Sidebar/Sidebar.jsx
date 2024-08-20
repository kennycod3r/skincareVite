import React from "react";
import "./Sidebar.css";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import CloseButton from "../../Util/CloseButton";

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const sideBar = document.getElementById("sideBar");
  const location = useLocation();

  if (!sideBar) return null;

  const isActive = (path) => location.pathname === path;

  return createPortal(
    <div className={`main-sidebar ${openSidebar ? "open" : ""}`}>
      <div className="inner-main-sidebar">
        <div className="sidebar-nav-header">
          <span className="color-brown">Navigation</span>
          <div className="close-btn-circle-sidebar" onClick={handleSidebar}>
            <CloseButton />
          </div>
        </div>
        <ul>
          <li onClick={handleSidebar}>
            <Link to="/" className="sidebar-link">
              <div>
                <p className="quote-heading sidebarHeader">Home</p>
              </div>
              <div className={`dot ${isActive("/") ? "active" : ""}`}></div>
            </Link>
          </li>
          <li onClick={handleSidebar}>
            <Link to="/Journal" className="sidebar-link">
              <p className="quote-heading sidebarHeader">Journal</p>
              <div
                className={`dot ${isActive("/Journal") ? "active" : ""}`}
              ></div>
            </Link>
          </li>
          <li onClick={handleSidebar}>
            <Link to="/products" className="sidebar-link">
              <p className="quote-heading sidebarHeader">Products</p>
              <div
                className={`dot ${isActive("/products") ? "active" : ""}`}
              ></div>
            </Link>
          </li>
          <li onClick={handleSidebar}>
            <Link to="/kids-page" className="sidebar-link">
              <p className="quote-heading sidebarHeader">Kids</p>
              <div
                className={`dot ${isActive("/kids-page") ? "active" : ""}`}
              ></div>
            </Link>
          </li>
        </ul>
        <div className="semi-circle">
          <span className="smallestp">contact 
           hospitality desk?</span>
        </div>
      </div>
    </div>,
    sideBar
  );
};

export default Sidebar;
