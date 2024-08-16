import React from "react";
import './ButtonW.css';

const ButtonW = ({ children, className, type }) => {
  return (
    <button className={`info ${className}`} type={type}>
        <div className="info-btn-Content">{children}</div>
    </button>
  );
};

export default ButtonW;
