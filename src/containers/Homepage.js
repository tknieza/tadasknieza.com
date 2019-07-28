import React, { PureComponent } from "react";
import ReactTooltip from "react-tooltip";
import Darkmode from "darkmode-js";
import { Navigation } from "../components/Navigation";
import { Social } from "../components/Social";
import { Footer } from "../components/Footer";
import { Waypoint } from "react-waypoint";
import "./Homepage.css";

export class Homepage extends PureComponent {
  constructor() {
    super();
    this.state = {
      curTime: new Date().getHours()
    };
  }

  darkmode = new Darkmode({ mixColor: "#fff", backgroundColor: "#fff" });
  toggleDarkmode = () => this.darkmode.toggle();

  render() {
    return (
      <div className="Homepage">
        <ReactTooltip />
        <Navigation
          currentTime={this.state.curTime}
          darkmode={this.toggleDarkmode}
        />
        <Waypoint
          onEnter={() => {
            document
              .getElementsByTagName("header")
              .item(0)
              .classList.remove("scroll");
            console.log("Disabled");
          }}
          onLeave={() => {
            document
              .getElementsByTagName("header")
              .item(0)
              .classList.add("scroll");
            console.log("Enabled");
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
          <div className="section">
            <h2>Personal Projects</h2>
            <div />
          </div>
          <div className="section">
            <h2>Contribution To Open Source</h2>
            <div />
          </div>
          <div className="section">
            <h2>Other People's Opinions</h2>
            <div className="grid">
              <div>
                <p>
                  "Duis aute irure dolor in reprehenderit in voluptate velit
                  esse cillum dolore eu fugiat nulla pariatur."
                </p>
                <h3>- Jenny</h3>
              </div>
              <div>
                <p>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua."
                </p>
                <h3>- Craig</h3>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
