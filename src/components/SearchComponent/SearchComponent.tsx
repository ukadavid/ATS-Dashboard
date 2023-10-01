import React from "react";
import "./SearchComponent.css";

const SearchComponent: React.FC = () => {
  return (
    <>
      <div className="search">
        <div className="frame-6">
          <img
            className="interface-search"
            src="img/interface-search-magnifying-glass-2.svg"
          />
          <input
            className="filter-by-name-edu"
            placeholder="Serach by name, edu, exp or #tag"
            type="text"
          />
        </div>
        <div className="warning-circle">
          <img className="vector" src="img/vector.svg" />
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
