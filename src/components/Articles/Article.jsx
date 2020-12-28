import React from "react";

const Article = ({ article }) => {
  const { date, image, title, preamble } = article;
  const splitedDate = date.split(" ");
  const day = splitedDate[0];
  const month = splitedDate[1];
  const year = splitedDate[2];
  const slicedMonth =
    month && month.charAt(0).toUpperCase() + month.slice(1, 3);

  const correctFormatDate = `${day} ${slicedMonth} ${year}`;

  const shortenedPreamble =
    preamble && preamble.length > 130
      ? `${preamble.slice(0, 150)}... [preamble]`
      : preamble;
  return (
    <li className="d-flex mb-3">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-4 col-md-2">
            <img
              src={image}
              className="img-fluid mw-100 h-auto"
              alt={title}
            ></img>
          </div>
          <div className="col-8 col-md-10 d-flex flex-wrap justify-content-between">
            <div className="d-flex w-100 justify-content-between">
              <h3 className="col-12 col-md-10 p-0">{title}</h3>
              <span className="col-auto">{correctFormatDate}</span>
            </div>
            <p className="d-none d-md-block pr-5">{shortenedPreamble}</p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Article;
