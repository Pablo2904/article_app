import React from "react";

const DefualtError = ({ errorMsg }) => {
  const error = String(errorMsg);
  return (
    <div className="text-warning">
      <h5>{error}</h5>
      <p>Please try again later</p>
    </div>
  );
};

export default DefualtError;
