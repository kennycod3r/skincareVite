import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const BackToTop = ({ scrollYThreshold = 700 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > scrollYThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="btn-reg back-to-top-button">
          <span>back to top</span> <span>↑</span>
        </button>
      )}
    </div>
  );
};

BackToTop.propTypes = {
  scrollYThreshold: PropTypes.number
};

export default BackToTop;
