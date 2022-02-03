import React from 'react'
import PropTypes from 'prop-types'

const LinkButton = ({ url, title, Icon, ...otherProps }) => {
  return (
    <div {...otherProps}>
      <a
        type="button"
        href={url}
        className={`${
          title.length > 0 ? 'px-5' : 'px-3'
        } py-2 flex items-center bg-white hover:bg-brblack dark:bg-brblack dark:hover:bg-white hover:text-white dark:hover:text-brblack focus:ring-gray-500 focus:ring-offset-gray-200 text-brblack dark:text-white transition-colors text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg`}
      >
        <Icon className={`${title.length > 0 ? 'mr-1' : ''} w-6 h-6 p-1`} />
        <span className="text-base">{title}</span>
      </a>
    </div>
  )
}
LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
  Icon: PropTypes.any
}

export default LinkButton
