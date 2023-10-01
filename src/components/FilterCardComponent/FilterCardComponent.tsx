import React from "react";
import "./FilterCardComponent.css";

const FilterCardComponent: React.FC = () => {
  return (
    <>
      <div className="filters">
        <div className="frame-7">
          <div className="text-wrapper-2">Filters</div>
          <div className="text"></div>
          <div className="text-wrapper-3">0 Selected</div>
        </div>
        <img className="line" src="img/line-6.svg" />
        <div className="frame-7">
          <div className="div-2">
            <img
              className="file-file-document"
              src="img/file-file-document.svg"
            />
            <div className="text-wrapper-4">Personal Information</div>
          </div>
          <img
            className="arrow-caret-down-MD"
            src="img/arrow-caret-down-md-12.svg"
          />
        </div>
        <img className="line" src="img/line-6.svg" />
        <div className="frame-7">
          <div className="div-2">
            <img
              className="file-file-document"
              src="img/file-file-document.svg"
            />
            <div className="text-wrapper-4">Education</div>
          </div>
          <img
            className="arrow-caret-down-MD"
            src="img/arrow-caret-down-md-12.svg"
          />
        </div>
        <img className="line" src="img/line-6.svg" />
        <div className="frame-7">
          <div className="div-2">
            <img
              className="file-file-document"
              src="img/file-file-document.svg"
            />
            <div className="text-wrapper-4">Work Experience</div>
          </div>
          <img
            className="arrow-caret-down-MD"
            src="img/arrow-caret-down-md-12.svg"
          />
        </div>
        <img className="line" src="img/line-6.svg" />
        <img className="line" src="img/line-6.svg" />
        <div className="frame-7">
          <div className="div-2">
            <img
              className="file-file-document"
              src="img/file-file-document.svg"
            />
            <div className="text-wrapper-4">Activity Filter</div>
          </div>
          <img
            className="arrow-caret-down-MD"
            src="img/arrow-caret-down-md-12.svg"
          />
        </div>
        <img className="line" src="img/line-6.svg" />
        <div className="frame-7">
          <div className="div-2">
            <img
              className="file-file-document"
              src="img/file-file-document.svg"
            />
            <div className="text-wrapper-4">Advanced Filter</div>
          </div>
          <img
            className="arrow-caret-down-MD"
            src="img/arrow-caret-down-md-2.png"
          />
        </div>
      </div>
    </>
  );
};

export default FilterCardComponent;
