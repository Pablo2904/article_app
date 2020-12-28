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
    const variables = direction === "asc" ? [a, b] : [b, a];
    return (
      new Date(variables[0][sortByProps]) - new Date(variables[1][sortByProps])
    );
  });
};

const isString = (str) => typeof str === "string" || str instanceof String;

const monthMapping = {
  januar: 1,
  februar: 2,
  mars: 3,
  april: 4,
  mai: 5,
  juni: 6,
  juli: 7,
  august: 8,
  september: 9,
  oktober: 10,
  november: 11,
  desember: 12,
};
