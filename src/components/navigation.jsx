import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from 'react-router-dom'
import MyPopover from 'components/popover'
import { FiMoon, FiCodepen } from 'react-icons/fi'
import { SiAboutdotme } from 'react-icons/si'
import { Icon } from 'react-icons-kit'
import { u1F307 } from 'react-icons-kit/noto_emoji_regular/u1F307' // day
import { u1F303 } from 'react-icons-kit/noto_emoji_regular/u1F303' // night

const Navigation = ({ time, darkmode }) => {
  return (
    <header className="flex flex-wrap pt-3 md:pt-6 md:m-auto mb-6 md:flex-row items-center w-full justify-between text-center transition-colors">
      <Link
        to="/"
        className="md:flex md:flex-col text-2xl font-thin group dark:text-white text-brblack hover:text-red-400 dark:hover:text-electric-yellow transition-colors"
      >
        <Icon
          size={38}
          icon={time >= 17 || time <= 6 ? u1F303 : u1F307}
          className="pr-1 md:pr-0 group-hover:text-red-400 dark:group-hover:text-electric-yellow transition-colors"
        />
        Tadas Knieža
      </Link>
      <MyPopover toggleColorMode={darkmode} />
      <div className="text-brblack dark:text-white md:flex pr-2 hidden">
        <Link to="/about" className="p-2">
          <SiAboutdotme className="text-3xl hover:text-red-400 dark:hover:text-electric-yellow transition-colors" />
        </Link>
        <Link to="/books" className="p-2">
          <FiCodepen className="text-3xl hover:text-red-400 dark:hover:text-electric-yellow transition-colors" />
        </Link>
        <button
          href="#"
          className="p-2"
          aria-label={'Dark Mode'}
          data-tip={'Dark Mode'}
          onClick={darkmode}
        >
          <FiMoon className="text-3xl hover:text-red-400 dark:hover:text-electric-yellow transition-colors" />
        </button>
      </div>
      <Outlet />
    </header>
  )
}

Navigation.propTypes = {
  time: PropTypes.number.isRequired,
  darkmode: PropTypes.func.isRequired
}

export default Navigation
