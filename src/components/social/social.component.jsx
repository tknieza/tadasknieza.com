import React from "react";
import GitHubButton from "react-github-btn";
import "./social.styles.scss";

export const Social = () => (
  <div className="social darkmode-ignore">
    <GitHubButton
      href="https://github.com/tknieza"
      data-size="large"
      aria-label="Follow @tknieza on GitHub"
    >
      Follow
    </GitHubButton>
  </div>
);
