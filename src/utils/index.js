import { sortValuesEnum, monthMapping } from "./configurations";

export const addSortableDate = (articles) => {
  return articles.map((article) => {
    const rawDate = article.date.split(" ");
    const normalizedDay = rawDate[0].replace(".", "");
    const normalizedMonth = monthMapping[rawDate[1]];
    const rawYear = rawDate[2];
    const sortableDate = `${normalizedMonth}/${normalizedDay}/${rawYear}`;

    return { ...article, sortableDate };
  });
};

export const sortByProps = (articles, sortByProps, direction) => {
  return articles.sort((a, b) => {
    const variables = direction === sortValuesEnum.asc ? [a, b] : [b, a];
    return (
      new Date(variables[0][sortByProps]) - new Date(variables[1][sortByProps])
    );
  });
};

export const groupResultBy = (arr, prop) => {
  return [].concat(
    ...arr.reduce((r, el) => {
      if (!el[prop]) return r;

      r.push(el[prop]);
      return r;
    }, [])
  );
};
