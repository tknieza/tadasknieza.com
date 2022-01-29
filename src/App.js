import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

// import About from 'layouts/about'
// import Books from 'layouts/books'
import Home from 'layouts/home'
import Footer from 'components/footer'
import Navigation from 'components/navigation'

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

          <Routes>
            <Route
              exact
              path="/"
              element={
                <div className="homepage">
                  <Home />
                </div>
              }
            ></Route>
            {/* <Route path="/about" element={<About />} />
            <Route path="/books" element={<Books />} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
