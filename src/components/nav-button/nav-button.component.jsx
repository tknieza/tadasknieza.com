import React from "react";
import PropTypes from "prop-types";

import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";

import "./nav-button.styles.scss";

const NavButton = ({ desc, icon, ...otherProps }) => (
  <Link className="button" aria-label={desc} data-tip={desc} {...otherProps}>
    {<Icon size={42} icon={icon} />}
  </Link>
);

NavButton.propTypes = {
  desc: PropTypes.string,
  icon: PropTypes.object
};

export default NavButton;
