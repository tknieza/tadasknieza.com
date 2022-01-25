import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import About from './components/pages/about/about'
import Books from './components/pages/books/books'
import Footer from './components/footer'
import Home from './components/pages/home/home'
import Navigation from './components/navigation/navigation'

const App = () => {
  const [darkMode, toggleDarkMode] = useState(false)

  const toggleColorMode = () => {
    toggleDarkMode(!darkMode)
    if (!darkMode) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  return (
    <Router>
      <div className="app transition-colors">
        <div className="w-full md:w-2/4 m-auto">
          <ReactTooltip />
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
