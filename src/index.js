import React from "react";
import ReactDOM from "react-dom";
import Typography from "typography";
import githubTheme from "typography-theme-github";

import App from "./app";
import * as serviceWorker from "./serviceWorker";

import "./index.styles.scss";

new Typography(githubTheme).injectStyles();

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.register();
