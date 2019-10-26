import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app";
import "./index.styles.scss";
import * as serviceWorker from "./serviceWorker";
import Typography from "typography";
import githubTheme from "typography-theme-github";

new Typography(githubTheme).injectStyles();

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
