import React from "react";
import "./Header.css";
import SearchBrowsing from "../SearchComponent/SearchBrowsing/SearchBrowsing";

const Header: React.FC = () => {
  return (
    <>
      <div className="frame-19">
        <div className="andkjeanf">
          <div className="text-wrapper-16">London Internship Program</div>
          <div className="text-wrapper-17">London</div>
        </div>
        <div className="CTA">
          <SearchBrowsing />
          <div className="div-4">
            <img className="tag" src="img/tag-1.svg" />
            <img className="img-3" src="img/copy-to-program.svg" />
            <img className="img-3" src="img/wishlist-4.svg" />
            <img className="wishlist" src="img/wishlist-2.svg" />
            <img className="wishlist" src="img/wishlist.svg" />
            <img className="line-3" src="img/line-37-2.svg" />
            <div className="frame-20">
              <div className="frame-21">
                <p className="text-wrapper-19">Move To Video Interview I</p>
              </div>
              <div className="frame-22"></div>
              <img className="frame-23" src="img/frame-444.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
