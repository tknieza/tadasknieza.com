import React, { PureComponent } from "react";
import GitHubButton from "react-github-btn";
import "./social.styles.scss";

export class Social extends PureComponent {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="social darkmode-ignore">
        <GitHubButton
          href="https://github.com/tknieza"
          data-size="large"
          aria-label="Follow @ordoven on GitHub"
        >
          Follow
        </GitHubButton>
        <a
          href="https://twitter.com/tadasknieza"
          className="twitter-follow-button"
          data-size="large"
          data-show-screen-name="false"
          data-lang="en"
          data-dnt="true"
          data-show-count="false"
        >
          Follow
        </a>
      </div>
    );
  }
}
