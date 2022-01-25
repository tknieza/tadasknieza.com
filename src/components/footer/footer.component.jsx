import React from 'react'
import netlifyImage from '../../assets/netlify.png'
import reactImage from '../../assets/react.png'

const Footer = () => {
  return (
    <footer className="mt-4 mx-4 sm:mx-32">
      <div className="container mx-auto pb-4">
        <div className="flex justify-center footer-links">
          <a className="mr-1.5" href="https://github.com/tknieza">
            Github
          </a>
          <a
            className="ml-1.5 mr-1.5 text-gree"
            href="https://twitter.com/tadasknieza"
          >
            Twitter
          </a>
          <a
            className="ml-1.5 mr-1.5"
            href="https://www.linkedin.com/in/tadas-knieza/"
          >
            LinkedIn
          </a>
          <a className="ml-1.5 mr-1.5" href="mailto:tadasknieza@gmail.com">
            Email
          </a>
          <a
            className="ml-1.5"
            href="https://github.com/tknieza/tadasknieza.com"
          >
            Source
          </a>
        </div>
        <div className="flex justify-center">
          <a
            className="ml-1.5 mr-1.5"
            href="https://reactjs.org/"
            data-tip="Built with React"
          >
            <img
              className="m-0 pt-0.5"
              width="30rem"
              src={reactImage}
              alt="React"
            />
          </a>
          <a
            className="ml-1.5 mr-1.5"
            href="https://netlify.com"
            data-tip="Hosted by Netlify"
          >
            <img
              className="m-0 pt-0.5"
              width="30rem"
              src={netlifyImage}
              alt="Netlify"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
