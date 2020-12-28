import React from "react";

const DefualtError = ({ errorMsgs }) => {
  return (
    <div className="text-warning">
      {errorMsgs &&
        errorMsgs.map((msg) => {
          return <p key={msg}>{msg}</p>;
        })}
    </div>
  );
};

export default DefualtError;
