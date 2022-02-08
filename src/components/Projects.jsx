import React from 'react'

import LinkButton from 'components/LinkButton'

import flica from 'assets/images/flica.svg'
import agami from 'assets/images/agami.png'
import kingPixel from 'assets/images/kingpixel.svg'
import selectNote from 'assets/images/select-note.svg'
import tadasknieza from 'assets/images/tadasknieza.svg'
import twitterBird from 'assets/images/twitter-bird.svg'

import { BsGithub } from 'react-icons/bs'
import { MdWebAsset } from 'react-icons/md'

const projects = [
  {
    title: 'Flica',
    desc: 'Wallpaper generating web app built with Unsplash API calls and Semantic UI principles.',
    image: flica
  },
  {
    title: 'Select Note',
    desc: 'A note-taking web app with a user database system, login features, routing & more.',
    image: selectNote
  },
  {
    title: 'TKnieza',
    desc: 'Personal website featuring dark mode, prop-typing, SASS support and best practices for React.',
    image: tadasknieza
  },
  {
    title: 'Agami',
    desc: 'This Puzzle game is written in C#/Unity. Colours fundamentally change the world & its obstacles, enabling players to solve puzzles.',
    image: agami
  },
  {
    title: 'King Pixel',
    desc: 'A fully-fledged action-adventure video game featuring advanced level design, player systems, game states.',
    image: kingPixel
  },
  {
    title: 'Visual Twitter',
    desc: 'React Web application which fetches the latest photos posted on Twitter by specifying keywords.',
    image: twitterBird
  }
]

function Projects() {
  return (
    <div>
      {projects.map(project => (
        <div
          key={project.title}
          className={`flex justify-between py-4 px-0 border-b-2 border-b-brblack dark:border-b-white`}
        >
          <h2 className="w-40 flex border-none m-0 mr-11 p-0 items-center font-bold">
            <img
              src={project.image}
              alt={project.title}
              className="w-12 h-12 m-4"
            />
            {project.title}
          </h2>
          <p className="w-full h-full self-center font-blackbird tracking-wide">
            {project.desc}
          </p>
          <div className="buttons">
            <LinkButton
              url="https://github.com/tknieza/flica"
              title=""
              Icon={BsGithub}
            />
            <LinkButton
              url="https://sleepy-joliot-a28cc4.netlify.com"
              title=""
              Icon={MdWebAsset}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Projects
