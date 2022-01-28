import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

// import About from './layouts/about'
// import Books from './layouts/books'
// import Home from './layouts/home'
import Footer from './components/footer'
import Navigation from './components/navigation'
import VoxelArt from './components/VoxelArt'

const App = () => {
  const [darkMode, toggleDarkMode] = useState(
    localStorage.theme === 'dark' ||
      (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
  )

  const toggleColorMode = () => {
    toggleDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  useEffect(() => {
    if (localStorage.theme && localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <Router>
      <div className="app selection:bg-electric-yellow selection:text-brblack transition-colors">
        <div className="w-11/12 md:w-[42rem] m-auto">
          <ReactTooltip dark={darkMode} />
          <Navigation
            time={new Date().getHours()}
            darkmode={() => toggleColorMode()}
          />
          <VoxelArt />
          {/* text-white group border-gray-800 bg-gray-800 border-2 dark:bg-gray-800 px-3 py-2 rounded-md */}
          <div className="flex">
            <div className="bg-gray-50 dark:bg-brblack inline-flex items-center m-auto leading-none rounded-md p-2 shadow text-teal text-sm ">
              <span className="inline-flex px-2 text-pink-600">
                Im a{' '}
                <span className="inline-flex bg-pink-600 text-white rounded-full h-6 px-3 justify-center items-center">
                  software engineer
                </span>{' '}
                based in the United Kingdom
              </span>
            </div>
          </div>

          {/* <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="homepage">
                  <Home />
                </div>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
          </Routes> */}
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
