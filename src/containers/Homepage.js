import React from "react";
import ReactTooltip from "react-tooltip";
import Darkmode from "darkmode-js";
import Navigation from "../components/Navigation";
import Social from "../components/Social";

import "./Homepage.css";

function Homepage() {
  var options = {
    mixColor: "#eee", // default: '#fff'
    backgroundColor: "#fff", // default: '#fff'
    saveInCookies: true, // default: true,
    autoMatchOsTheme: true // default: true
  };
  const darkmode = new Darkmode(options);

  return (
    <div className="Homepage">
      <ReactTooltip />
      <Navigation
        darkmode={() => {
          darkmode.toggle();
        }}
      />
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

      <footer>
        {/* <a href="#" />
        <a href="#" />
        <a href="#" /> */}
      </footer>
    </div>
  );
}

export default Homepage;
