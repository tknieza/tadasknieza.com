import React from "react";

import ReactTooltip from "react-tooltip";

import Darkmode from "darkmode-js";

import { Navigation } from "./components/navigation/navigation.component";
import { Content } from "./components/content/content.component";
import { Footer } from "./components/footer/footer.component";

import "./app.css";

const darkmode = new Darkmode();

export const App = () => {
  return (
    <div className="Homepage">
      <ReactTooltip />
      <Navigation
        time={new Date().getHours()}
        darkmode={() => darkmode.toggle()}
      />
      <Content />
      <Footer />
    </div>
  );
};
