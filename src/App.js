import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Darkmode from "darkmode-js";
import ReactTooltip from "react-tooltip";

import About from "./components/pages/about/about.component";
import Books from "./components/pages/books/books.component";
import Footer from "./components/footer/footer.component";
import Home from "./components/pages/home/home.component";
import Navigation from "./components/navigation/navigation.component";

const darkmode = new Darkmode({ saveInCookies: true });

const App = () => {
  return (
    <Router>
      <div className="app">
        <ReactTooltip />
        <Navigation
          time={new Date().getHours()}
          darkmode={() => darkmode.toggle()}
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
    </Router>
  );
};

export default App;
