import React from 'react'

import Projects from 'components/Projects'
import ProjectsPersonal from 'components/Highlights'
import LinkButton from 'components/LinkButton'
import profilePhoto from 'assets/images/photo-50.jpg'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      image: 0,
      isVisible: false
    }
  }

  componentDidMount() {
    this.setState({ isVisible: !this.state.isVisible })
    this.interval = setInterval(() => {
      this.setState({
        image: this.state.image + 1
      })
    }, 2500)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="text-brblack dark:text-white">
        <div className="md:flex">
          <div className="">
            <h1 className="text-2xl font-bold pb-1">Hi, I&apos;m Tad!</h1>
            <p className="text-justify md:text-left md:pr-8 font-blackbird tracking-wide">
              Junior software developer and computer science graduate based in
              the United Kingdom with industry experience developing performant
              and exciting web solutions.
            </p>
            <div className="flex justify-center pt-2">
              <LinkButton
                url="https://github.com/tknieza"
                title="@tknieza"
                Icon={BsGithub}
              />
              <LinkButton
                url="https://www.linkedin.com/in/tadas-knieza/"
                title="@tadas-knieza"
                Icon={BsLinkedin}
              />
            </div>
          </div>
          <div className="shrink min-w-fit pt-4">
            <a href="#" className="block relative">
              <img
                src={profilePhoto}
                alt="profile"
                className="mx-auto object-cover rounded-full h-28 w-28 border-2 border-white"
              />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold pt-8 pb-4">
            Highlights
            <span className="font-extrabold pl-1">_</span>
          </h2>
          <ProjectsPersonal />
        </div>
        <div>
          <h2 className="text-2xl font-bold pt-8 pb-4">
            Hobbies
            <span className="font-extrabold pl-1">_</span>
          </h2>
          <div className="mx-6 ">
            <p className="font-blackbird tracking-wide">
              Music, Game Dev, Playing Guitar, Cycling, Mechanical Keyboards, 3D
              Modelling
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold pt-8 pb-4">
            Projects
            <span className="font-extrabold pl-1">_</span>
          </h2>
          <Projects />
        </div>
      </div>
    )
  }
}

export default Home
