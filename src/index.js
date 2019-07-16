import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./containers/Homepage";
import "./css/index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Homepage />, document.getElementById("root"));
serviceWorker.register();
