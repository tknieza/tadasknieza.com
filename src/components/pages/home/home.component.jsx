import React from "react";

import Projects from "../../Projects/projects.component";
import Slideshow from "../../slideshow/slideshow.component";
import Social from "../../social/social.component";
import Wrapper from "../../../animations/Wrapper.animation";

import "./home.styles.scss";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      image: 0,
      isVisible: false
    };
  }

  componentDidMount() {
    this.setState({ isVisible: !this.state.isVisible });
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
      <Wrapper
        className="page"
        pose={this.state.isVisible ? "popped" : "hidden"}
      >
        <div className="section heading">
          <div>
            <h1>Hi, I'm Tadas</h1>
            <p>
              I build open-source web applications and spend time in modern
              JavaScript, design & Java development.
            </p>
            <Social
              github={{
                url: "https://github.com/tknieza",
                title: "Follow",
                desc: "Follow @tknieza on GitHub"
              }}
            />
          </div>
          <Slideshow
            className="slideshow"
            currentImageIndex={this.state.image}
          />
        </div>
        <div className="section">
          <h2>Personal Projects</h2>
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
        <div className="section">
          <h2>Open-Source Projects</h2>
          <Projects />
        </div>
      </Wrapper>
    );
  }
}

export default Home;
