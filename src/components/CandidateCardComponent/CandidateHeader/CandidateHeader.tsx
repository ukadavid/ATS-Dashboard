import React from "react";
import "./CandidateHeader.css";

const CandidateHeader: React.FC = () => {
  return (
    <>
      <div className="frame-9">
        <div className="frame-10">
          <div className="div-2">
            <div className="checkbox-active">
              <div className="plate"></div>
            </div>
          </div>
          <div className="text-wrapper-5">247 Candidates</div>
        </div>
        <div className="candidate-status-bar">
          <div className="div-3">
            <div className="text-wrapper-6">Qualified</div>
          </div>
          <div className="text-wrapper-7">|</div>
          <div className="div-3">
            <div className="text-wrapper-4">Task</div>
            <div className="frame-11">
              <div className="text-wrapper-8">25</div>
            </div>
          </div>
          <div className="text-wrapper-7">|</div>
          <div className="div-3">
            <div className="text-wrapper-4">Disqualified</div>
            <div className="frame-11">
              <div className="text-wrapper-8">78</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateHeader;
