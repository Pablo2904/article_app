import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./style/style.css";
import App from "./components/App";

const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("index"));
