import React from "react";
import { Icon } from "react-icons-kit";
import { u1F307 } from "react-icons-kit/noto_emoji_regular/u1F307"; // day
import { u1F303 } from "react-icons-kit/noto_emoji_regular/u1F303"; // night
import { u1F4EC } from "react-icons-kit/noto_emoji_regular/u1F4EC";
import { u1F4DA } from "react-icons-kit/noto_emoji_regular/u1F4DA";
import { u1F468 } from "react-icons-kit/noto_emoji_regular/u1F468";
import { u1F31D } from "react-icons-kit/noto_emoji_regular/u1F31D";
import "./navigation.styles.scss";

export const Navigation = props => {
  return (
    <header>
      <nav>
        <div className="title">
          <Icon
            size={34}
            icon={
              props.currentTime >= 17 || props.currentTime <= 6
                ? u1F303
                : u1F307
            }
          />
          <br />
          <span>Tadas Knieža</span>
        </div>
        <div className="links">
          <button data-tip="About Me" className="darkmode">
            <Icon size={42} icon={u1F468} />
          </button>
          <button data-tip="Articles" className="darkmode">
            <Icon size={42} icon={u1F4DA} />
          </button>
          <button data-tip="Join Newsletter" className="darkmode">
            <Icon size={42} icon={u1F4EC} />
          </button>
          <button
            onClick={props.darkmode}
            data-tip="Dark Mode"
            className="darkmode"
          >
            {<Icon size={42} icon={u1F31D} />}
          </button>
        </div>
      </nav>
    </header>
  );
};
