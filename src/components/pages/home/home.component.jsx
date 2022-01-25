import React from 'react'

import Projects from '../../Projects/projects.component'
import ProjectsPersonal from '../../ProjectsPersonal/projectsPersonal.component'
import Slideshow from '../../slideshow/slideshow.component'
import Social from '../../social/social.component'

import './home.styles.scss'
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
      <div>
        <div className="section heading">
          <div>
            <h1>Hi, I&apos;m Tadas</h1>
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
          <Slideshow
            className="slideshow"
            currentImageIndex={this.state.image}
          />
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
