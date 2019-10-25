import React from "react";

import { Slideshow } from "../slideshow/slideshow.component";
import { Social } from "../social/social.component";

import "./content.styles.scss";

export class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      image: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        image: this.state.image + 1
      });
    }, 3500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="content">
        <div className="section hi">
          <div>
            <h1>Hi, I'm Tadas</h1>
            <p>
              I build open-source web applications and spend time in modern
              JavaScript, design & java development.
            </p>
            <Social />
          </div>
          <Slideshow currentImageIndex={this.state.image} />
        </div>
        <div className="section">
          <h2>Personal Projects</h2>
          <div className="grid project">
            <div className="card">
              <p>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              </p>
              <h3>- Jenny</h3>
            </div>
            <div className="card">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <h3>- Craig</h3>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Contribution To Open Source</h2>
          <div />
        </div>
        <div className="section">
          <h2>Other People's Opinions</h2>
          <div className="grid">
            <div className="card">
              <p>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              </p>
              <h3>- Jenny</h3>
            </div>
            <div className="card">
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <h3>- Craig</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
