import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import About from 'layouts/about'
import Books from 'layouts/books'
import Home from 'layouts/home'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'
import VoxelArt from 'components/VoxelArt'

const App = () => {
  const [darkMode, toggleDarkMode] = useState(true)

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
    if (localStorage.theme === undefined) {
      // Default to dark mode
      document.documentElement.classList.add('dark')
      toggleDarkMode(true)
    } else {
      if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
        toggleDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        toggleDarkMode(false)
      }
    }
  }, [])

  return (
    <Router>
      <div className="selection:bg-red-400 dark:selection:bg-electric-yellow selection:text-brblack transition-colors">
        <div className="w-11/12 md:w-[36rem] m-auto">
          <ReactTooltip dark={darkMode} />
          <Navigation
            time={new Date().getHours()}
            darkmode={() => toggleColorMode()}
          />
          <VoxelArt />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Home />
                </div>
              }
            ></Route>
            <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
