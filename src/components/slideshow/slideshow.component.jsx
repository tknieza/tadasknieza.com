import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import image1 from "../../assets/science-statistics.svg";
import image2 from "../../assets/nature-butterfly.svg";
import image3 from "../../assets/education-book.svg";
import image4 from "../../assets/survey-chat.svg";
import image5 from "../../assets/science-clipboard.svg";
import image6 from "../../assets/education-abacus.svg";

export const Slideshow = ({ currentImageIndex }) => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <TransitionGroup>
      <CSSTransition
        key={images[currentImageIndex % images.length]}
        timeout={600}
        classNames="fade"
      >
        <img
          className="illustrations"
          height="300rem"
          width="400rem"
          src={images[currentImageIndex % images.length]}
          alt="illustration"
        />
      </CSSTransition>
    </TransitionGroup>
  );
};
