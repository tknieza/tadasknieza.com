import React from "react";
import ReactDOM from "react-dom";
import { Homepage } from "./containers/Homepage";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Typography from "typography";
import githubTheme from "typography-theme-github";

githubTheme.baseFontSize = "18px";
const typography = new Typography(githubTheme);
typography.injectStyles();

ReactDOM.render(<Homepage />, document.getElementById("root"));
serviceWorker.register();
