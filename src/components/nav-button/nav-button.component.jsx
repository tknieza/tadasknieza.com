import React from "react";

import { Icon } from "react-icons-kit";

export const NavButton = ({ desc, icon, ...otherProps }) => (
  <button aria-label={desc} data-tip={desc} {...otherProps}>
    {<Icon size={42} icon={icon} />}
  </button>
);
