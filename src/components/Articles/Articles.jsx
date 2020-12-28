import React from "react";
import Article from "./Article";

const Articles = ({ articles }) => {
  return (
    <ul className="w-100 d-flex flex-wrap justify-content-center">
      {articles &&
        articles.map((article) => {
          return <Article key={article.id} article={article} />;
        })}
    </ul>
  );
};

export default Articles;
