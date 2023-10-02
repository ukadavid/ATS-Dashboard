import React from "react";
import "./HoverComponent.css";

const HoverComponent: React.FC = () => {
  return (
    <>
      <div className="hover-section">
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Applied</div>
          </div>
          <div className="placement-tag">
            <div className="element">1745</div>
          </div>
        </div>
        <img className="line" src="img/line-32.svg" />
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Shortlisted</div>
          </div>
          <div className="placement-tag">
            <div className="element">453</div>
          </div>
        </div>
        <img className="line" src="img/line-33.svg" />
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Technical Interview</div>
          </div>
          <div className="placement-tag">
            <div className="element">123</div>
          </div>
        </div>
        <div className="hover-div">
          <div className="frame">
            <div className="text-wrapper">Opportunity Browsing</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-2">243</div>
          </div>
        </div>
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Video Interview I</div>
          </div>
          <div className="placement-tag">
            <div className="element">25</div>
          </div>
        </div>
        <img className="line" src="img/line-38.svg" />
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Video Interview II</div>
          </div>
          <div className="placement-tag">
            <div className="element">25</div>
          </div>
        </div>
        <img className="line" src="img/line-37.svg" />
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Video Interview III</div>
          </div>
          <div className="placement-tag">
            <div className="element">25</div>
          </div>
        </div>
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Offer</div>
          </div>
          <div className="placement-tag">
            <div className="element">25</div>
          </div>
        </div>
        <img className="line" src="img/line-38.svg" />
        <div className="hover-div">
          <div className="frame">
            <div className="opportunity-browsing">Withdrawn</div>
          </div>
          <div className="placement-tag">
            <div className="element">25</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverComponent;
