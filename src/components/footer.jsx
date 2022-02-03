import React from 'react'
import netlifyImage from 'netlify.png'
import reactImage from 'react.png'

const Footer = () => {
  return (
    <footer className="text-center items-center md:flex md:justify-between text-brblack dark:text-white mt-4 pb-4">
      <div>
        <a className="p-1" href="https://github.com/tknieza">
          Github
        </a>
        <a className="p-1" href="https://twitter.com/tadasknieza">
          Twitter
        </a>
        <a className="p-1" href="https://www.linkedin.com/in/tadas-knieza/">
          LinkedIn
        </a>
        <a className="p-1" href="mailto:tadasknieza@gmail.com">
          Email
        </a>
        <a className="p-1" href="https://github.com/tknieza/tadasknieza.com">
          Source
        </a>
      </div>
      <div className="flex justify-center">
        <a
          className="p-1"
          href="https://reactjs.org/"
          data-tip="Built with React"
        >
          <img className="" width="30rem" src={reactImage} alt="React" />
        </a>
        <a
          className="p-1"
          href="https://netlify.com"
          data-tip="Hosted by Netlify"
        >
          <img className="" width="30rem" src={netlifyImage} alt="Netlify" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
