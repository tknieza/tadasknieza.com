import React from "react";
import ReactTooltip from "react-tooltip";
import Darkmode from "darkmode-js";
import { Navigation } from "../components/Navigation";
import { Social } from "../components/Social";
import { Footer } from "../components/Footer";
import "./Homepage.css";

function Homepage() {
  const darkmode = new Darkmode({ mixColor: "#fff", backgroundColor: "#fff" });
  const toggleDarkmode = () => darkmode.toggle();
  return (
    <div className="Homepage">
      <ReactTooltip />
      <Navigation darkmode={toggleDarkmode} />
      <main>
        <div className="section">
          <h1>Hi, I'm Tadas</h1>
          <p>
            I'm an aspiring software developer specializing in modern
            JavaScript. I make things from scratch, contribute to open source,
            and develop accessible Web applications.
          </p>
          <Social />
        </div>
        <div />
        <div />
      </main>

      <Footer />
    </div>
  );
}

export default Homepage;
