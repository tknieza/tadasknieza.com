import React from 'react'

import { u1F4BE } from 'react-icons-kit/noto_emoji_regular/u1F4BE'
import { Icon } from 'react-icons-kit'
import Social from '../social/social'

import agami from '../../agami.png'
import flica from '../../flica.svg'
import kingPixel from '../../kingpixel.svg'
import selectNote from '../../select-note.svg'
import tadasknieza from '../../tadasknieza.svg'
import twitterBird from '../../twitter-bird.svg'

import './projects.styles.scss'

function Projects() {
  return (
    <div className="projects">
      <div className="project">
        <h2>
          <img src={flica} alt="Flica" />
          Flica
        </h2>
        <p>
          Wallpaper generating web app built with Unsplash API calls and
          Semantic UI principles.
        </p>
        <div className="buttons">
          <Social
            github={{
              url: 'https://github.com/tknieza/flica',
              title: 'Source',
              desc: 'Source code for Flica'
            }}
          />
          <a
            href="https://sleepy-joliot-a28cc4.netlify.com"
            className="button"
            aria-label="Flica page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={selectNote} alt="Select Note" />
          Select Note
        </h2>
        <p>
          A note-taking web app with a user database system, login features,
          routing & more.
        </p>
        <div className="buttons">
          <Social
            github={{
              url: 'https://github.com/tknieza/select-note',
              title: 'Source',
              desc: 'Source code for Select Note'
            }}
          />
          <a
            href="https://sharp-brahmagupta-cd3ffa.netlify.com/"
            className="button"
            aria-label="Select Note page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={tadasknieza} alt="tadasknieza.com" />
          Tadas Knieža
        </h2>
        <p>
          Personal website featuring dark mode, prop-typing, SASS support and
          best practices for React (this website&apos;s source code).
        </p>
        <div className="buttons">
          <Social
            github={{
              url: 'https://github.com/tknieza/tadasknieza.com',
              title: 'Source',
              desc: 'Source code for tadasknieza.com'
            }}
          />
          <a
            href="https://tadasknieza.com"
            className="button"
            aria-label="Personal website page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={agami} alt="Agami" />
          Agami
        </h2>
        <p>
          This Puzzle game is written in C#/Unity. Colours fundamentally change
          the world & its obstacles, enabling players to solve puzzles.
        </p>
        <div className="buttons">
          <a
            href="https://ordoven.itch.io/agami"
            className="button"
            aria-label="Agami store page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={kingPixel} alt="King Pixel" />
          King Pixel
        </h2>
        <p>
          A fully-fledged action-adventure video game featuring advanced level
          design, player systems, game states.
        </p>
        <div className="buttons">
          <Social
            github={{
              url: 'https://github.com/tknieza/king-pixel',
              title: 'Source',
              desc: 'Source code for King Pixel'
            }}
          />
          <a
            href="https://gamejolt.com/games/kingpixel/250736"
            className="button"
            aria-label="King Pixel store page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
      <div className="project">
        <h2>
          <img src={twitterBird} alt="Visual Twitter" />
          Visual Twitter
        </h2>
        <p>
          React Web application which fetches the latest photos posted on
          Twitter by specifying keywords.
        </p>
        <div className="buttons">
          <Social
            github={{
              url: 'https://github.com/tknieza/visual-twitter',
              title: 'Source',
              desc: 'Source code for Visual Twitter'
            }}
          />
          <a
            href="https://github.com/tknieza/visual-twitter"
            className="button"
            aria-label="Visual Twitter page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
