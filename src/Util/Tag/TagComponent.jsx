import React from 'react';
import './TagComponent.css';

const TagComponent = ({ children }) => {
  return (
    <div className="col-tags">
      <div className="tags">
        <div className="single-tag">
          <span>{children}</span>
        </div>
      </div>
    </div>
  );
};

export default TagComponent;
