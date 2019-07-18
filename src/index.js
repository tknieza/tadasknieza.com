import React from "react";
import ReactDOM from "react-dom";
import Homepage from "./containers/Homepage";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Homepage />, document.getElementById("root"));
serviceWorker.register();
