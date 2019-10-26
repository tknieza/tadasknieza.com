import React from "react";

import { Link } from "react-router-dom";

import { Icon } from "react-icons-kit";

export const NavButton = ({ desc, icon, ...otherProps }) => (
  <Link aria-label={desc} data-tip={desc} {...otherProps}>
    {<Icon size={42} icon={icon} />}
  </Link>
);
