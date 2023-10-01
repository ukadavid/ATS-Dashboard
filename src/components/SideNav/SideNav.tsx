import React from "react";
import "./SideNav.css";

const SideNav: React.FC = () => {
  return (
    <div className="side-nav">
      <div className="frame">
        <div className="div-wrapper">
          <div className="ellipse"></div>
        </div>
        <div className="div">
          <img className="img" src="img/frame-427319306.svg" />
          <img
            className="img"
            src="img/status-default-label-candidate-bank.svg"
          />
          <img
            className="img"
            src="img/status-default-label-interview-manager.svg"
          />
          <img
            className="img"
            src="img/status-default-label-opportunity-hub.svg"
          />
          <img
            className="img"
            src="img/status-default-label-employer-hub.svg"
          />
          <img className="img" src="img/status-default-label-reports.svg" />
          <img className="img" src="img/frame-427319308.svg" />
          <img className="img" src="img/status-default-label-back.svg" />
        </div>
      </div>
      <div className="frame-2">
        <img className="img" src="img/frame-427319304.svg" />
        <div className="div-wrapper">
          <div className="frame-3">
            <div className="text-wrapper">AS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
