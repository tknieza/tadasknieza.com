import { Popover, Transition } from '@headlessui/react'
import { FiMenu, FiMoon, FiCodepen } from 'react-icons/fi'
import { SiAboutdotme } from 'react-icons/si'
import { Link } from 'react-router-dom'
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

function MyPopover({ toggleColorMode }) {
  const solutions = [
    {
      name: 'About Me',
      description: 'Paragraph about me and what I do',
      href: '/about',
      icon: SiAboutdotme
    },
    {
      name: 'Books/Reading',
      description: 'Documenting what I read and what I should read next',
      href: '/books',
      icon: FiCodepen
    },
    {
      name: 'Dark Mode',
      description: 'Because every website has it',
      function: toggleColorMode,
      icon: FiMoon
    }
  ]

  return (
    <div className="visible md:invisible max-w-md top-16 z-[50]">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${
                  open
                    ? 'dark:border-gray-300'
                    : 'text-opacity-50 dark:border-gray-700'
                }
                text-white group border-gray-800 bg-gray-800 border-2 dark:bg-gray-800 px-3 py-2 rounded-md inline-flex items-center text-base font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 transition-colors`}
            >
              <FiMenu
                className={`${
                  open ? '' : 'text-opacity-70'
                } h-5 w-5 group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 w-screen max-w-xs px-4 mt-3 transform -translate-x-drop-down translate-y-2 md:px-0 lg:max-w-2xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-6 lg:grid-cols-2">
                    {solutions.map(item => (
                      <Link
                        key={item.name}
                        to={item.href ? item.href : ''}
                        onClick={() => {
                          if (item.function) {
                            item.function()
                          }
                        }}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-electric-yellow select-none"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white bg-gray-900 md:h-12 md:w-12 rounded-lg">
                          <item.icon
                            className="w-1/2 h-1/2"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-50 ">
                    <div
                      href="##"
                      className="flow-root px-2 py-2 rounded-md focus:outline-none focus-visible:ring focus-visible:ring-electric-yellow"
                    >
                      <span className="block text-sm text-right font-medium text-gray-900">
                        Built with &#10084; by Tad
                      </span>
                      <span className="block text-sm text-right text-gray-500">
                        @2022
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

MyPopover.propTypes = {
  toggleColorMode: PropTypes.func.isRequired
}

export default MyPopover
