import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Darkmode from "darkmode-js";

import { Navigation } from "./components/navigation/navigation.component";

// Pages
import { Home } from "./components/pages/home/home.component";
import { About } from "./components/pages/about/about.component";
import { Books } from "./components/pages/books/books.component";
import { Footer } from "./components/footer/footer.component";

const darkmode = new Darkmode({ saveInCookies: true });

export const App = () => {
  return (
    <Router>
      <div className="app">
        <ReactTooltip />
        <Navigation
          time={new Date().getHours()}
          darkmode={() => darkmode.toggle()}
        />
        <Switch>
          <Route exact path="/">
            <div className="homepage">
              <Home />
            </div>
          </Route>
          <Route path="/about">
            <div>
              <About />
            </div>
          </Route>
        </Switch>
        <Route path="/books">
          <div>
            <Books />
          </div>
        </Route>

        <Footer />
      </div>
    </Router>
  );
};
