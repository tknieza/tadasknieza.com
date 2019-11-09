import React from "react";

import Wrapper from "../../../animations/Wrapper.animation";
class About extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    this.setState({ isVisible: true });
  }

  render() {
    return (
      <Wrapper
        className="page"
        pose={this.state.isVisible ? "popped" : "hidden"}
      >
        <div className="section">
          <h1>Me</h1>
          <p>
            I am an aspiring software engineer that has practical knowledge of
            building and contributing to software systems. I have been
            interested in software since high school, where I learnt to code
            video games and participated in competitive coding competitions. My
            primary focus nowadays is modern Web application development as, in
            my opinion, Progressive Web Applications are the future of the
            modern Web!
          </p>

          <p>
            Recently, I have started uploading and version-controlling my
            software projects like{" "}
            <a href="https://sleepy-joliot-a28cc4.netlify.com">Flica</a> &{" "}
            <a href="https://sharp-brahmagupta-cd3ffa.netlify.com/">
              Select Note
            </a>{" "}
            on Github.
          </p>

          <p>
            These projects utilize external APIs, databases and front-end web
            frameworks. As a Newcastle University computer science student, I
            have achieved a first-class honours average through stage 1 of my
            studies.
          </p>

          <h3>Around the Web</h3>

          <ul>
            <li>
              Email:{" "}
              <a href="mailto:tadasknieza@gmail.com">tadasknieza@gmail.com</a>{" "}
            </li>
            <li>
              Github: <a href="https://github.com/tknieza">tknieza</a>{" "}
            </li>
            <li>
              Twitter: <a href="https://twitter.com/tadasknieza">tadasknieza</a>
            </li>
          </ul>

          {/* <h1>Music</h1>
          <p>
            I like to record/produce music in my spare time. Here are some
            tracks.
          </p>
          <ul>
            <li>
              <a href="https://soundcloud.com/">Song 1</a>
            </li>
            <li>
              <a href="https://soundcloud.com/">Song 2</a>
            </li>
            <li>
              <a href="https://soundcloud.com/">Song 3</a>
            </li>
            <li>
              <a href="https://soundcloud.com/">Song 4</a>
            </li>
          </ul> */}

          <h1>Currently Using</h1>

          <ul>
            <li>Computer: ASUS Zenbook UX430UQ</li>
            <li>
              Code Theme:{" "}
              <a href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme">
                One Dark Pro
              </a>
            </li>
            <li>
              Notes:{" "}
              <a href="https://products.office.com/en-gb/onenote/digital-note-taking-app">
                Microsoft OneNote
              </a>
            </li>
            <li>
              Editor/IDE:{" "}
              <a href="https://code.visualstudio.com/">Visual Studio Code</a>
            </li>
          </ul>
        </div>
      </Wrapper>
    );
  }
}

export default About;
