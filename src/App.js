import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import About from "./components/pages/about/about.component";
import Books from "./components/pages/books/books.component";
import Footer from "./components/footer/footer.component";
import Home from "./components/pages/home/home.component";
import Navigation from "./components/navigation/navigation.component";

const App = () => {
  const [darkMode, toggleDarkMode] = useState(false);

  const toggleColorMode = () => {
    toggleDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <Router>
      <div className="app transition-colors">
        <div className={"w-full md:w-4/6 m-auto"}>
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
  );
};

export default App;
