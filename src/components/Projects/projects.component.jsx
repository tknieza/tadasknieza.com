import React from "react";

import { u1F4BE } from "react-icons-kit/noto_emoji_regular/u1F4BE";
import { Icon } from "react-icons-kit";
import Social from "../social/social.component";

import flica from "../../assets/flica.svg";
import selectNote from "../../assets/select-note.svg";
import tadasknieza from "../../assets/tadasknieza.svg";

import "./projects.styles.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="project">
        <h2>
          <img src={flica} alt="Flica" />
          Flica
        </h2>
        <p>
          Wallpaper generating web app built with Unsplash API calls and
          Semantic UI principles.
        </p>
        <div className="buttons">
          <Social
            github={{
              url: "https://github.com/tknieza/flica",
              title: "Source",
              desc: "Source code for Flica"
            }}
          />
          <a
            href="https://sleepy-joliot-a28cc4.netlify.com"
            className="button"
            aria-label="Flica page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={selectNote} alt="Select Note" />
          Select Note
        </h2>
        <p>
          A note-taking web app with a user database system, login features,
          routing & more.
        </p>
        <div className="buttons">
          <Social
            github={{
              url: "https://github.com/tknieza/select-note",
              title: "Source",
              desc: "Source code for Select Note"
            }}
          />
          <a
            href="https://sharp-brahmagupta-cd3ffa.netlify.com/"
            className="button"
            aria-label="Select Note page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={tadasknieza} alt="tadasknieza.com" />
          Tadas Knieža
        </h2>
        <p>
          Personal website featuring dark mode, prop-typing, SASS support and
          best practices for React (this website's source code).
        </p>
        <div className="buttons">
          <Social
            github={{
              url: "https://github.com/tknieza/tadasknieza.com",
              title: "Source",
              desc: "Source code for tadasknieza.com"
            }}
          />
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={tadasknieza} alt="tadasknieza.com" />
          Tadas Knieža
        </h2>
        <p>
          Personal website featuring dark mode, prop-typing, SASS support and
          best practices for React (this website's source code).
        </p>
        <div className="buttons">
          <Social
            github={{
              url: "https://github.com/tknieza/tadasknieza.com",
              title: "Source",
              desc: "Source code for tadasknieza.com"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
