import React from "react";

import "./footer.styles.scss";

import netlifyImage from "../../assets/netlify.png";
import reactImage from "../../assets/react.png";

export const Footer = () => {
  return (
    <footer>
      <div className="section">
        <div>
          <a href="https://github.com/tknieza">Github</a>
          <a href="https://twitter.com/tadasknieza">Twitter</a>
          <a href="https://www.linkedin.com/in/tadas-knieza/">LinkedIn</a>
          <a href="mailto:tadasknieza@gmail.com">Email</a>
          <a href="https://github.com/tknieza/tadasknieza.com">View source</a>
        </div>
        <div>
          <a href="https://reactjs.org/" data-tip="Built with React">
            <img width="30rem" src={reactImage} alt="React" />
          </a>
          <a href="https://netlify.com" data-tip="Hosted by Netlify">
            <img width="30rem" src={netlifyImage} alt="Netlify" />
          </a>
        </div>
      </div>
    </footer>
  );
};
