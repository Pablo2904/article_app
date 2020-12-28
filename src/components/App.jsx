import React, { useEffect, useState } from "react";
import Articles from "./Articles/Articles";
import CheckboxFilter from "./Filters/CheckboxFilter";
import SortingFilter from "./Filters/SortingFilter";
import DefualtError from "./ErrorPages/DefualtError";
import { getArticlesFashion, getArticlesSports } from "../api";
import { sortByProps, groupResults } from "../utils/index";
import {
  checkboxesConfig,
  sortValuesEnum,
  checkboxesEnum,
} from "../utils/configurations";

const App = () => {
  const firstCheckboxId =
    checkboxesConfig && checkboxesConfig[0] && checkboxesConfig[0].id;
  const [checked, setChecked] = useState(firstCheckboxId);
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const isError = error.length > 0;

  const onHandleClick = () => {
    switch (sortBy) {
      case "":
        setSortBy(sortValuesEnum.asc);
        break;
      case sortValuesEnum.asc:
        setSortBy(sortValuesEnum.desc);
        break;
      case sortValuesEnum.desc:
      default:
        setSortBy("");
        break;
    }
  };
  useEffect(() => {
    const getArticles = async () => {
      if (checked === checkboxesEnum.fashion) {
        const { message, articles } = await getArticlesFashion();
        message ? setError([message]) : setArticles(articles);
      } else if (checked === checkboxesEnum.sports) {
        const { message, articles } = await getArticlesSports();
        message ? setError([message]) : setArticles(articles);
      } else {
        const result = await Promise.all([
          getArticlesFashion(),
          getArticlesSports(),
        ]);
        const byMessage = "message";
        const byArticles = "articles";
        setError(groupResults(result, byMessage));
        setArticles(groupResults(result, byArticles));
      }
    };
    setError([]);
    getArticles();
  }, [checked]);

  useEffect(() => {
    const sortableDate = "sortableDate";
    const id = "id";
    const sortingProp = sortBy.length > 0 ? sortableDate : id;
    articles &&
      articles.length > 0 &&
      setArticles([...sortByProps(articles, sortingProp, sortBy)]);
  }, [sortBy]);

  const onHandleChange = (e) => {
    const id = e.target && e.target.id;
    const newValue = checked === id ? "" : id;
    setChecked(newValue);
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
          {isError && <DefualtError errorMsgs={error} />}
          <Articles articles={articles} />
        </div>
      </div>
    </div>
  );
};

export default App;
