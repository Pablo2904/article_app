import React from "react";
import CaretDown from "../icons/CaretDown";

const SortingFilter = ({ onHandleClick }) => {
  return (
    <div className="d-flex">
      <span>Sort by Date</span>
      <div className="d-inline-flex flex-column ml-2" onClick={onHandleClick}>
        <CaretDown className="rotate" />
        <CaretDown />
      </div>
    </div>
  );
};

export default SortingFilter;
