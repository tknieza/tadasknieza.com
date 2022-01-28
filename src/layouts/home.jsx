import React from 'react'

import Projects from '../components/Projects/projects'
import ProjectsPersonal from '../components/ProjectsPersonal/projectsPersonal'
import Social from '../components/social'

// import './home.styles.scss'
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
        <div className="flex">
          <div>
            <h1 className="text-2xl">Hi, I&apos;m Tadas</h1>
            <p>
              I build open-source web applications and spend time in modern
              JavaScript, design & Java development.
            </p>
            <Social
              github={{
                url: 'https://github.com/tknieza',
                title: 'Follow',
                desc: 'Follow @tknieza on GitHub'
              }}
            />
          </div>
          <div>Placeholder</div>
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
