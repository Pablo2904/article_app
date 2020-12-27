import React from "react";
import Article from "./Article";

const Articles = () => {
  const articlesNumber = new Array(5).fill(1);

  return (
    <ul className="w-100 d-flex flex-wrap justify-content-center">
      {articlesNumber.map(() => {
        return <Article key={Math.random()} />;
      })}
    </ul>
  );
};

export default Articles;
