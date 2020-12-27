import React, { useState } from "react";
import CaretDown from "../icons/CaretDown";

const SortingFilter = () => {
  const [sortBy, setSortBy] = useState("");
  const handleOnClick = () => {
    switch (sortBy) {
      case "":
        setSortBy("asc");
        break;
      case "asc":
        setSortBy("desc");
        break;
      case "desc":
      default:
        setSortBy("");
        break;
    }
  };

  return (
    <div className="d-flex">
      <span>Sort by Date</span>
      <div className="d-inline-flex flex-column ml-2" onClick={handleOnClick}>
        <CaretDown className="rotate" />
        <CaretDown />
      </div>
    </div>
  );
};

export default SortingFilter;
