import React from "react";
import CaretDown from "../icons/CaretDown";

const SortingFilter = ({ onHandleClick }) => {
  const title = "Sort by Date";

  return (
    <div className="d-flex">
      <span>{title}</span>
      <div className="d-inline-flex flex-column ml-2" onClick={onHandleClick}>
        <CaretDown className="rotate" />
        <CaretDown />
      </div>
    </div>
  );
};

export default SortingFilter;
