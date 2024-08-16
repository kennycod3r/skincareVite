import React from "react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-screen">
        <div className="flowerSvg"></div>
        <div className="fC">
          <div className="flower-loader"></div>
          
        </div>

        <div>
          <div className="spinner"></div>
          <div className="loader-text details">
            
            <p className="trademark">
              © 2024 dS Avocado van Van Riet B.V. skincare website
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
