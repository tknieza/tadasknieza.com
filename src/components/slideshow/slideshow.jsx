import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

// import image1 from '../../science-statistics.svg'
// import image2 from '../../nature-butterfly.svg'
// import image3 from '../../education-book.svg'
// import image4 from '../../survey-chat.svg'
// import image5 from '../../science-clipboard.svg'
// import image6 from '../../education-abacus.svg'

const Slideshow = ({ currentImageIndex, ...otherProps }) => {
  // const images = [image1, image2, image3, image4, image5, image6]

  return (
    <TransitionGroup current={currentImageIndex} {...otherProps}>
      <CSSTransition
        // key={images[currentImageIndex % images.length]}
        timeout={600}
        classNames="fade"
      >
        <img
          className="illustrations"
          height="300rem"
          width="400rem"
          // src={images[currentImageIndex % images.length]}
          alt="illustration"
        />
      </CSSTransition>
    </TransitionGroup>
  )
}

Slideshow.propTypes = {
  currentImageIndex: PropTypes.number.isRequired
}

export default Slideshow
