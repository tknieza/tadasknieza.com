import React from 'react'
import PropTypes from 'prop-types'

const LinkButton = ({ url, title, Icon, ...otherProps }) => {
  return (
    <div {...otherProps}>
      {url && title && Icon && (
        <a
          type="button"
          href={url}
          className="py-2 px-5 flex justify-center items-center bg-white hover:bg-brblack dark:bg-brblack dark:hover:bg-white hover:text-white dark:hover:text-brblack focus:ring-gray-500 focus:ring-offset-gray-200 text-brblack dark:text-white w-fit transition-colors text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
        >
          <Icon className="mr-2 w-5 h-5" />
          {title}
        </a>
      )}
    </div>
  )
}
LinkButton.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  Icon: PropTypes.any
}

export default LinkButton
