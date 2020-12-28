import { addSortableDate } from "../utils";

const fetchData = async (path) => {
  const URL = `http://localhost:6010${path}`;
  const errMessage = `Couldnt fetch from ${path}`;
  try {
    const response = await fetch(URL);
    const { ok } = await response;
    const data = await response.json();

    return ok
      ? { articles: addSortableDate(data.articles) }
      : { message: errMessage };
  } catch (error) {
    return { message: errMessage };
  }
};

export const getArticlesSports = () => {
  const URL = "/articles/sports";
  return fetchData(URL);
};

export const getArticlesFashion = () => {
  const URL = "/articles/fashion";
  return fetchData(URL);
};
