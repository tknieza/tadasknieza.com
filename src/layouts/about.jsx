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
        I am a junior software engineer specializing in web development, having
        practical industry knowledge of building and contributing to software
        projects. My venture in software started in school, where I learned to
        code video games and participate in competitive coding competitions
        around Lithuania 🇱🇹. These experiences eventually led me to pursue
        studies in computer science at Newcastle University 🇬🇧.
      </p>
      <p className="font-blackbird tracking-wide text-justify pb-2">
        Nowadays, I am focused on developing web solutions using the latest web
        technologies and software development methodologies. A good chunk of my
        projects is version-controlled on GitHub. My projects utilize external
        APIs, databases and front-end web frameworks. Apart from web
        development, I am passionate about game development, occasionally
        participating in game jams and other similar competitions. As my final
        dissertation project for university, I plan to develop an urban
        environment generation tool utilizing advanced procedural graphics
        generation.
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
              <span className="w-16">MB</span>
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
          <span className="w-16">Keyboard</span>
          <ul>
            <li className="flex">
              <span className="w-16">Kit</span>
              <a
                className="hover:underline decoration-red-400 dark:decoration-electric-yellow"
                href="https://epomaker.com/products/gk68xs-kit"
              >
                GK68XS (Plastic, White)
              </a>
            </li>
            <li className="flex">
              <span className="w-16">Switches</span>
              <a
                className="hover:underline decoration-red-400 dark:decoration-electric-yellow"
                href="https://zealpc.net/products/zealio?variant=6502846147"
              >
                Zealio V2 (62g, Tactile)
              </a>
            </li>
            <li className="flex">
              <span className="w-16">Keycaps</span>
              <a
                className="hover:underline decoration-red-400 dark:decoration-electric-yellow"
                href="https://www.amazon.co.uk/HK-Gaming-Dye-Sublimation-Mechanical/dp/B08JKYF7XH/ref=sr_1_1?crid=3K161UIM3VZY0&keywords=hk+gaming+bow&qid=1644359168&sprefix=hk+gaming+bow%2Caps%2C145&sr=8-1"
              >
                HK Gaming BoW (Cherry Profile)
              </a>
            </li>
          </ul>
        </li>
        <li className="flex">
          <span className="w-16">Laptop</span>
          <p>ASUS Zenbook UX430UQ</p>
        </li>
        <li className="flex">
          <span className="w-16">Editor</span>
          <p>Visual Studio Code</p>
        </li>

        <li className="flex">
          <span className="w-16">Theme</span>
          <a
            className="hover:underline decoration-red-400 dark:decoration-electric-yellow"
            href="https://github.com/sdras/night-owl-vscode-theme"
          >
            Night Owl
          </a>
        </li>
        <li className="flex">
          <span className="w-16">Config</span>
          <a
            className="hover:underline decoration-red-400 dark:decoration-electric-yellow"
            href="#"
          >
            DL Link
          </a>
        </li>
        <li className="flex">
          <span className="w-16">Notes</span>
          <a
            className="hover:underline decoration-red-400 dark:decoration-electric-yellow"
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
