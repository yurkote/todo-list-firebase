import React from "react";
import ReactDom from "react-dom";
import App from "./App";

document.addEventListener("DOMContentLoaded", function () {
  ReactDom.render(<App />, document.querySelector(".app"));
});
