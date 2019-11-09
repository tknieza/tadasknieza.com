import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import NavButton from "../nav-button/nav-button.component";

import { Icon } from "react-icons-kit";
import { u1F307 } from "react-icons-kit/noto_emoji_regular/u1F307"; // day
import { u1F303 } from "react-icons-kit/noto_emoji_regular/u1F303"; // night
import { u1F4DA } from "react-icons-kit/noto_emoji_regular/u1F4DA";
import { u1F468 } from "react-icons-kit/noto_emoji_regular/u1F468";
import { u1F31D } from "react-icons-kit/noto_emoji_regular/u1F31D";

import "./navigation.styles.scss";

const Navigation = ({ time, darkmode }) => {
  return (
    <nav>
      <div className="title">
        <Link to="/">
          <Icon size={34} icon={time >= 17 || time <= 6 ? u1F303 : u1F307} />
          <br />
          <span>Tadas Knieža</span>
        </Link>
      </div>

      <div className="links">
        <NavButton to="/about" desc="About Me" icon={u1F468} />
        <NavButton to="/books" desc="Books" icon={u1F4DA} />
        <NavButton onClick={darkmode} desc="Dark Mode" icon={u1F31D} />
      </div>
    </nav>
  );
};

Navigation.propTypes = {
  time: PropTypes.number.isRequired,
  darkmode: PropTypes.object.isRequired
};

export default Navigation;
