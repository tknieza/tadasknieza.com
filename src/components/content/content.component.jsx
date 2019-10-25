import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Social } from "../social/social.component";

import image1 from "../../assets/science-statistics.svg";
import image2 from "../../assets/nature-butterfly.svg";
import image3 from "../../assets/education-book.svg";
import image4 from "../../assets/survey-chat.svg";
import image5 from "../../assets/science-clipboard.svg";
import image6 from "../../assets/education-abacus.svg";

import "./content.styles.scss";

export class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      image: 0
    };
  }

  images = [image1, image2, image3, image4, image5, image6];
  interval = 0;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        image: (this.state.image + 1) % this.images.length
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
          {/* Create a slideshow of icons - trying to convey a message here! */}

          <TransitionGroup>
            <CSSTransition
              key={this.images[this.state.image]}
              timeout={600}
              classNames="fade"
            >
              <img
                className="illustrations"
                height="300rem"
                width="400rem"
                src={this.images[this.state.image]}
                alt="illustration"
              />
            </CSSTransition>
          </TransitionGroup>
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
