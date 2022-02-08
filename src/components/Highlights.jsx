import React from 'react'

import LinkButton from 'components/LinkButton'

import flica from 'assets/images/flica.svg'
import selectNote from 'assets/images/select-note.svg'
import { BsGithub } from 'react-icons/bs'
import { MdWebAsset } from 'react-icons/md'

const ProjectsPersonal = () => {
  const highlights = [
    {
      image: flica,
      title: 'Flica',
      source: 'https://github.com/tknieza/flica',
      demo: 'https://sleepy-joliot-a28cc4.netlify.com',
      description:
        'Wallpaper generating Progressive Web App built with Unsplash API calls and Semantic UI. Ability to search images using tags & switch aspect ratio.'
    },
    {
      image: selectNote,
      title: 'Select Note',
      source: 'https://github.com/tknieza/select-note',
      demo: 'https://sharp-brahmagupta-cd3ffa.netlify.com/',
      description:
        'A note-taking web app with a user database system, login features, routing & more. With simplicity in mind - just create a user account and start making notes hassle-free!'
    }
  ]
  return (
    <div>
      <div className="md:flex">
        {highlights.map(item => (
          <div
            key={item.title}
            className="flex flex-col justify-between m-2 w-fit px-2 pt-7 pb-4 overflow-hidden relative rounded-xl border-2 border-brblack dark:border-0 text-brblack dark:text-white dark:bg-black"
          >
            <h2 className="text-3xl font-semibold pb-1">{item.title}</h2>
            <p className="text-sm font-blackbird tracking-wider">
              {item.description}
            </p>
            <div className="pt-3 flex justify-end">
              <LinkButton
                className="px-1"
                url={item.source}
                title="Source"
                Icon={BsGithub}
              />
              <LinkButton
                className="px-1"
                url={item.demo}
                title=""
                Icon={MdWebAsset}
              />
            </div>
            <img
              className="-bottom-12 -left-4 w-40 m-auto absolute opacity-25 rounded-3xl"
              src={item.image}
              alt="Flica"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsPersonal
