import React from 'react'
import PropTypes from 'prop-types'
import GitHubButton from 'react-github-btn'

const Social = ({ github }) => (
  <div className="social">
    {github && (
      <GitHubButton
        href={github.url}
        data-size="large"
        aria-label={github.desc}
      >
        {github.title}
      </GitHubButton>
    )}
  </div>
)

Social.propTypes = {
  github: PropTypes.exact({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  })
}

export default Social
