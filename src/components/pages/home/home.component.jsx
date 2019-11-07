import React from "react";

import { Slideshow } from "../../slideshow/slideshow.component";
import { Social } from "../../social/social.component";

import selectNote from "../../../assets/select-note.svg";
import selectNoteTitle from "../../../assets/select-note-title.svg";
import flica from "../../../assets/flica.svg";
import flicaTitle from "../../../assets/flica-title.svg";

import "./home.styles.scss";

export class Home extends React.Component {
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
    }, 2500);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <div className="section heading">
          <div>
            <h1>Hi, I'm Tadas</h1>
            <p>
              I build open-source web applications and spend time in modern
              JavaScript, design & Java development.
            </p>
            <Social />
          </div>
          <Slideshow
            className="slideshow"
            currentImageIndex={this.state.image}
          />
        </div>
        <div className="section">
          <h2>Personal Projects</h2>
          <div className="card project">
            <img
              className="title"
              width="200rem"
              src={flicaTitle}
              alt="Flica Title"
            />
            <p>
              "Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur."
            </p>
            <h3>- Links</h3>
            <img className="logo" width="400rem" src={flica} alt="Flica" />
          </div>
          <div className="card project">
            <img
              className="title"
              width="300rem"
              src={selectNoteTitle}
              alt="Select Note Title"
            />
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <h3>- Links</h3>
            <img
              className="logo"
              width="400rem"
              src={selectNote}
              alt="Select Note"
            />
          </div>
        </div>
        <div className="section">
          <h2>Other People's Opinions</h2>
          <div className="grid">
            <div className="card">
              <p>
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              </p>
              <h3>- Sam</h3>
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
