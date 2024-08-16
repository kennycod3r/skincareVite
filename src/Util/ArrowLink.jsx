import React from "react";

const ArrowLink = ({black}) => {
  return (
    <div className="link-copy__icon" data-v-144cbf06="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 97 88">
        <path
          d="M0.496935 54.9877L0.496094 0.988461L12.4961 0.988281L12.4968 42.9877L58.0133 42.9883V10.5031L96.4985 48.9883L58.0133 87.4735V54.9883L0.496935 54.9877Z"
          fill={black ? "black" : "whitesmoke"}
        ></path>
      </svg>
    </div>
  );
};

export default ArrowLink;
