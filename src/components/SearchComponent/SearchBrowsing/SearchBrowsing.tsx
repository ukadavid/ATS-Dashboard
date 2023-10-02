import React, { useState, useEffect } from "react";
import "./SearchBrowsing.css";
import HoverComponent from "../../HoverComponent/HoverComponent";

const SearchBrowsing: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showHover, setShowHover] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    setTimeout(() => {
      setShowHover(true);
    }, 500);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
    setShowHover(false);
  };

  useEffect(() => {
    if (isHovered) {
      // Handle hover event
      console.log("Hovered over button");
    } else {
      // Handle mouse leave event
      console.log("Mouse left button");
    }
  }, [isHovered]);

  return (
    <>
      <div className="application-stages">
        <div
          className="div-2 hoverable"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <p className="text-wrapper-18">Opportunity Browsing</p>
        </div>
        <img
          className="arrow-caret-down-MD-2"
          src="img/arrow-caret-down-md-42.svg"
        />
      </div>
      {showHover && <HoverComponent />}
    </>
  );
};

export default SearchBrowsing;
