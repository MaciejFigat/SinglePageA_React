import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
// I imported BrowserRouter and wrapped App component with it so I can useLocation() hook in App component, it is needed for Framer motion so I can use location in Switch and determine which route I want to use in animating in and out
