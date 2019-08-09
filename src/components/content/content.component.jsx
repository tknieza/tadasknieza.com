import React from "react";

import { Social } from "../social/social.component";

import "./content.styles.scss";

export const Content = () => (
  <div className="content">
    <div className="section">
      <h1>Hi, I'm Tadas</h1>
      <p>
        I'm an aspiring software developer specializing in modern JavaScript. I
        make things from scratch, contribute to open source, and develop
        accessible Web applications.
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
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur."
          </p>
          <h3>- Jenny</h3>
        </div>
        <div>
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
