import React from 'react'

import Projects from 'components/Projects/projects'
import ProjectsPersonal from 'components/ProjectsPersonal/projectsPersonal'
import LinkButton from 'components/LinkButton'
import VoxelArt from 'components/VoxelArt'
import profilePhoto from 'assets/photo-50.jpg'
// import 'layouts/home.styles.scss'
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
        <VoxelArt />
        {/* <div className="flex">
          <div className="bg-gray-50 dark:bg-brblack inline-flex items-center m-auto leading-none rounded-md p-2 shadow text-teal text-sm ">
            <span className="inline-block align-middle px-2 text-pink-600">
              Im a{' '}
              <span className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 mx-1 justify-center items-center">
                software engineer
              </span>{' '}
              based in the United Kingdom
            </span>
          </div>
        </div> */}
        <div className="md:flex">
          <div className="">
            <h1 className="text-3xl font-bold">Hi, I&apos;m Tad!</h1>
            <p className=" pr-8">
              Junior software developer and computer science graduate based in
              the United Kingdom with industry experience developing performant
              web solutions.
            </p>
            <div className="flex justify-center pt-2">
              <LinkButton
                className=""
                url="https://github.com/tknieza"
                title="@tknieza"
                Icon={BsGithub}
              />
              <LinkButton
                className=""
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

        <div className="section">
          <ProjectsPersonal />
        </div>

        <div className="section">
          <h2>Open-Source Projects</h2>
          <Projects />
        </div>
      </div>
    )
  }
}

export default Home
