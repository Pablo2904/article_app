import React, { useEffect, useState } from "react";
import Articles from "./Articles/Articles";
import CheckboxFilter from "./Filters/CheckboxFilter";
import SortingFilter from "./Filters/SortingFilter";
import DefualtError from "./ErrorPages/DefualtError";
import { checkboxesConfig } from "./Filters/checkboxesConfig";
import { getArticlesFashion, getArticlesSports } from "../api";
import { sortByProps } from "../utils/index";

const App = () => {
  const firstCheckboxId =
    checkboxesConfig && checkboxesConfig[0] && checkboxesConfig[0].id;
  const [checked, setChecked] = useState(firstCheckboxId);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  const [sortBy, setSortBy] = useState("");

  const isError = error.length > 0;

  const onHandleClick = () => {
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
  useEffect(() => {
    const getArticles = async () => {
      const { message, articles } =
        checked === firstCheckboxId
          ? await getArticlesFashion()
          : await getArticlesSports();
      if (message) {
        setError(message);
        setChecked("");
      } else {
        setError("");
        setArticles(articles);
      }
    };

    checked.length > 0 && getArticles();
  }, [checked]);

  useEffect(() => {
    const sortingProp = sortBy.length > 0 ? "sortableDate" : "id";
    articles &&
      articles.length > 0 &&
      setArticles([...sortByProps(articles, sortingProp, sortBy)]);
  }, [sortBy]);

  const onHandleChange = (e) => {
    setChecked(e.target && e.target.id);
  };
  return (
    <div className="container-xl ml-0 ml-xl-3">
      <div className="row row-cols-12 d-flex mt-3 p-t3">
        <div className="col-6 col-md-2 order-md-2">
          <CheckboxFilter checked={checked} onHandleChange={onHandleChange} />
        </div>
        <div className="col-6 col-md-12 order-md-1 d-flex justify-content-end pb-3">
          <SortingFilter onHandleClick={onHandleClick} />
        </div>
        <div className="col-12 col-md-10 order-3">
          {isError ? (
            <DefualtError errorMsg={error} />
          ) : (
            <Articles articles={articles} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
