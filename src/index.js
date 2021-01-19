import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
