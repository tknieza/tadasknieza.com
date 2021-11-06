import React from "react";
import ReactDOM from "react-dom";
import Typography from "typography";
import githubTheme from "typography-theme-github";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.styles.scss";

new Typography(githubTheme).injectStyles();
ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();
