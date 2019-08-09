import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Typography from "typography";
import githubTheme from "typography-theme-github";

githubTheme.baseFontSize = "18px";
const typography = new Typography(githubTheme);
typography.injectStyles();

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
