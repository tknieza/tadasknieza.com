import React from 'react'
import LinkButton from 'components/LinkButton'
import { MdEmail } from 'react-icons/md'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

function About() {
  return (
    <div className="text-brblack dark:text-white">
      <h1 className="text-2xl font-bold pt-8 pb-3">
        Me
        <span className="font-extrabold pl-1">_</span>
      </h1>
      <p className="font-blackbird tracking-wide text-justify pb-2">
        I am an aspiring software engineer that has practical knowledge of
        building and contributing to software systems. I have been interested in
        software since high school, where I learnt to code video games and
        participated in competitive coding competitions. My primary focus
        nowadays is modern Web application development as, in my opinion,
        Progressive Web Applications are the future of the modern Web!
      </p>

      <p className="font-blackbird tracking-wide text-justify pb-2">
        Recently, I have started uploading and version-controlling my software
        projects like{' '}
        <a
          className="dark:text-electric-yellow text-red-400 transition-colors"
          href="https://sleepy-joliot-a28cc4.netlify.com"
        >
          Flica
        </a>{' '}
        &{' '}
        <a
          className="dark:text-electric-yellow text-red-400 transition-colors"
          href="https://sharp-brahmagupta-cd3ffa.netlify.com/"
        >
          Select Note
        </a>{' '}
        on Github.
      </p>

      <p className="font-blackbird tracking-wide text-justify pb-2">
        These projects utilize external APIs, databases and front-end web
        frameworks. As a Newcastle University computer science student, I have
        achieved a first-class honours average through stage 1 of my studies.
      </p>

      <h1 className="text-2xl font-bold py-3">
        Around the Web
        <span className="font-extrabold pl-1">_</span>
      </h1>

      <ul>
        <li>
          <LinkButton
            url="mailto:tadasknieza@gmail.com"
            title="Email"
            Icon={MdEmail}
          />
        </li>
        <li>
          <LinkButton
            url="https://www.linkedin.com/in/tadas-knieza/"
            title="LinkedIn"
            Icon={BsLinkedin}
          />
        </li>
        <li>
          <LinkButton
            url="https://github.com/tknieza"
            title="GitHub"
            Icon={BsGithub}
          />
        </li>
        <li>
          <LinkButton
            url="https://twitter.com/tadasknieza"
            title="Twitter"
            Icon={BsTwitter}
          />
        </li>
      </ul>

      {/* <h1>Music</h1>
        <p>
          I like to record/produce music in my spare time. Here are some
          tracks.
        </p>
        <ul>
          <li>
            <a href="https://soundcloud.com/">Song 1</a>
          </li>
          <li>
            <a href="https://soundcloud.com/">Song 2</a>
          </li>
          <li>
            <a href="https://soundcloud.com/">Song 3</a>
          </li>
          <li>
            <a href="https://soundcloud.com/">Song 4</a>
          </li>
        </ul> */}

      <h1 className="text-2xl font-bold py-3">
        Settings &amp; Gear
        <span className="font-extrabold pl-1">_</span>
      </h1>

      <ul className="font-blackbird">
        <li className="flex">
          <span className="w-16">Main PC</span>
          <ul>
            <li className="flex">
              <span className="w-16">CPU</span>
              <p>AMD Ryzen 5 2600X</p>
            </li>
            <li className="flex">
              <span className="w-16">GPU</span>
              <p>Nvidia GeForce GTX 1660 SUPER</p>
            </li>
            <li className="flex">
              <span className="w-16">MOBO</span>
              <p>ASRock B450M Pro4</p>
            </li>
            <li className="flex">
              <span className="w-16">Memory</span>
              <p>G.Skill Aegis 16 GB (2 x 8GB)</p>
            </li>
            <li className="flex">
              <span className="w-16">Storage</span>
              <p>ADATA XPG GAMMIX S11 Pro (512 GB)</p>
            </li>
            <li className="flex">
              <span className="w-16">Cooler</span>
              <p>Cooler Master Hyper 212 Black Edition</p>
            </li>
          </ul>
        </li>
        <li className="flex">
          <span className="w-16">Laptop</span> <p>ASUS Zenbook UX430UQ</p>
        </li>
        <li className="flex">
          <span className="w-16">Editor</span>
          <p>Visual Studio Code</p>
        </li>

        <li className="flex">
          <span className="w-16">Theme</span>
          <a
            className="hover:underline underline-offset-2"
            href="https://github.com/sdras/night-owl-vscode-theme"
          >
            Night Owl
          </a>
        </li>
        <li className="flex">
          <span className="w-16">Config</span>
          <a
            className="hover:underline underline-offset-2"
            href="https://google.com/"
          >
            Repo Link
          </a>
        </li>
        <li className="flex">
          <span className="w-16">Notes</span>
          <a
            className="hover:underline underline-offset-2"
            href="https://products.office.com/en-gb/onenote/digital-note-taking-app/"
          >
            Microsoft OneNote
          </a>
        </li>
      </ul>
    </div>
  )
}

export default About
