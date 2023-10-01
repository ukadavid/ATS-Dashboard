import React from "react";
import "./SearchFilterSection.css";
import SearchComponent from "../components/SearchComponent/SearchComponent";
import FilterCardComponent from "../components/FilterCardComponent/FilterCardComponent";
import CandidateSection from "../components/CandidateCardComponent/CandidateSection/CandidateSection";

const SearchFilterSection: React.FC = () => {
  return (
    <div className="frame-4">
      <div className="frame-5">
        <SearchComponent />
        <FilterCardComponent />
      </div>

      <CandidateSection />
    </div>
  );
};

export default SearchFilterSection;
