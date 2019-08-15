import React from "react";
import { Icon } from "react-icons-kit";
import { u1F307 } from "react-icons-kit/noto_emoji_regular/u1F307"; // day
import { u1F303 } from "react-icons-kit/noto_emoji_regular/u1F303"; // night
import { u1F4EC } from "react-icons-kit/noto_emoji_regular/u1F4EC";
import { u1F4DA } from "react-icons-kit/noto_emoji_regular/u1F4DA";
import { u1F468 } from "react-icons-kit/noto_emoji_regular/u1F468";
import { u1F31D } from "react-icons-kit/noto_emoji_regular/u1F31D";
import "./navigation.styles.scss";

import { NavButton } from "../nav-button/nav-button.component";

export const Navigation = ({ time, darkmode }) => {
  return (
    <nav>
      <div className="title">
        <Icon size={34} icon={time >= 17 || time <= 6 ? u1F303 : u1F307} />
        <br />
        <span>Tadas Knieža</span>
      </div>
      <div className="links">
        <NavButton desc="About Me" icon={u1F468} />
        <NavButton desc="Articles" icon={u1F4DA} />
        <NavButton desc="Join Newsletter" icon={u1F4EC} />
        <NavButton onClick={darkmode} desc="Dark Mode" icon={u1F31D} />
      </div>
    </nav>
  );
};
