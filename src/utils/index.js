export const convertDate = (date) => {
  const noDate = "Date no available";
  if (!isString(date)) return noDate;

  const rawDate = date.split(" ");
  if (rawDate.length !== 2) return noDate;

  const normalizedDay = rawDate[0].replace(".", "");
  const normalizedMonth = monthMapping[rawDate[1]];
  const rawYear = rawDate[2];

  return `${normalizedMonth}/${normalizedDay}/${rawYear}`;
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
