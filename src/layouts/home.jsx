import React from 'react'

import Projects from 'components/Projects/projects'
import ProjectsPersonal from 'components/ProjectsPersonal/projectsPersonal'
// import Social from 'components/social'
import VoxelArt from 'components/VoxelArt'
import profilePhoto from 'assets/photo-50.jpg'
// import 'layouts/home.styles.scss'

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
        <div className="flex">
          <div className="">
            <h1 className="text-4xl font-bold">Hi, I&apos;m Tad!</h1>
            <p>
              I build open-source web applications and spend time in modern
              JavaScript, design & Java development.
            </p>
          </div>
          <div className="shrink min-w-fit">
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
          {/* <Social
            github={{
              url: 'https://github.com/tknieza',
              title: 'Follow',
              desc: 'tknieza'
            }}
          /> */}
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
