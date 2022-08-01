import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Framer from "./pages/Framer";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";

import Cards from "./pages/ProjetsSite/cards";
import Reunion from "./pages/ProjetsSite/reunion";
import CinemaReact from "./pages/ProjetsSite/cinemaReact";
import Mastermind from "./pages/ProjetsSite/mastermind/mastermind";

import { AnimatePresence } from "framer-motion";

const App = () => {
  // let location = useLocation();
  return (
    <>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/competences" exact component={Test} />
            <Route path="/portfolio" exact component={Portfolio} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/test" exact component={Knowledges} />
            <Route path="/framer" exact component={Framer} />

            <Route path="/portfolio/cards" exact component={Cards} />
            <Route path="/portfolio/reunion" exact component={Reunion} />
            <Route
              path="/portfolio/cinemareact"
              exact
              component={CinemaReact}
            />
            <Route path="/portfolio/mastermind" exact component={Mastermind} />

            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
};

export default App;
