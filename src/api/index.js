const fetchData = async (path) => {
  const URL = `http://localhost:6010${path}`;
  const errMessage = "Something went wrong";
  try {
    const response = await fetch(URL);
    const { ok } = await response;
    const data = await response.json();

    return ok ? { ...data } : { message: errMessage };
  } catch (error) {
    return { message: error.message };
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
