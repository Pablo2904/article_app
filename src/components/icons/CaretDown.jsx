import React from "react";

const CaretDown = ({ className }) => {
  return (
    <svg
      fill="currentColor"
      className={`bi bi-caret-down-fill ${className}`}
      viewBox="0 2 16 16"
    >
      <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
};

export default CaretDown;
