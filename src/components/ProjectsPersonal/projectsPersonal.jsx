import React from 'react'

import { u1F4BE } from 'react-icons-kit/noto_emoji_regular/u1F4BE'
import { Icon } from 'react-icons-kit'
import LinkButton from 'components/LinkButton'

import flica from 'flica.svg'
import selectNote from 'select-note.svg'

import 'components/ProjectsPersonal/projectsPersonal.styles.scss'
import { BsGithub } from 'react-icons/bs'

const ProjectsPersonal = () => (
  <div className="projects-personal">
    <h2>Highlights</h2>
    <div className="grid">
      <div className="card">
        <h2>Flica</h2>
        <p>
          Wallpaper generating Progressive Web App built with Unsplash API calls
          and Semantic UI. Ability to search images using tags & switch aspect
          ratio.
        </p>
        <div className="card-footer">
          <LinkButton
            url="https://github.com/tknieza/flica"
            title="Source"
            Icon={BsGithub}
          />
          <a
            href="https://sleepy-joliot-a28cc4.netlify.com"
            className="button"
            aria-label="Flica page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
        <img src={flica} alt="Flica" />
      </div>
      <div className="card">
        <h2>Select Note</h2>
        <p>
          A note-taking web app with a user database system, login features,
          routing & more. With simplicity in mind - just create a user account
          and start making notes hassle-free!
        </p>
        <div className="card-footer">
          <LinkButton
            url="https://github.com/tknieza/select-note"
            title="Source"
            Icon={BsGithub}
          />
          <a
            href="https://sharp-brahmagupta-cd3ffa.netlify.com/"
            className="button"
            aria-label="Select Note page"
          >
            {<Icon size={42} icon={u1F4BE} />}
          </a>
        </div>
        <img src={selectNote} alt="Select note" />
      </div>
    </div>
  </div>
)

export default ProjectsPersonal
