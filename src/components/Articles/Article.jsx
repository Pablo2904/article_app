import React from "react";

const Article = () => {
  return (
    <li className="d-flex w-100">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-4 col-md-2">
            <img src="" className="img-fluid mw-100 h-auto" alt="title"></img>
          </div>
          <div className="col-8 col-md-10 d-flex flex-wrap justify-content-between">
            <h3 className="col-12 col-md-auto p-0">Title of article</h3>
            <span>Date</span>
            <p className="d-none d-md-block w-100">preambule</p>
          </div>
        </div>
      </div>
    </li>
  );
};
export default Article;
