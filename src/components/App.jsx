import React from "react";
import Articles from "./Articles/Articles";
import CheckboxFilter from "./Filters/CheckboxFilter";
import SortingFilter from "./Filters/SortingFilter";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row row-cols-12 d-flex mt-3 p-t3">
        <div className="col-6 col-md-3 order-md-2">
          <CheckboxFilter />
        </div>
        <div className="col-6 col-md-12 order-md-1 d-flex justify-content-end pb-3">
          <SortingFilter />
        </div>
        <div className="col-12 col-md-9 order-3">
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default App;
