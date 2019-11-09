import React from "react";

import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";

import "./nav-button.styles.scss";

export const NavButton = ({ desc, icon, ...otherProps }) => (
  <Link className="button" aria-label={desc} data-tip={desc} {...otherProps}>
    {<Icon size={42} icon={icon} />}
  </Link>
);
