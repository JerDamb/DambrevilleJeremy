import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import Framer from "./pages/Framer";
import Test from "./pages/Test";
import NotFound from "./pages/NotFound";
import { AnimatePresence } from "framer-motion";

const App = () => {
  
  // let location = useLocation();
  return (
    <>
      <Router>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/competences"exact component={Test} />
            <Route path="/portfolio"exact component={Portfolio} />
            <Route path="/contact"exact component={Contact} />
            <Route path="/test"exact component={Knowledges} />
            <Route path="/framer" exactcomponent={Framer} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
};

export default App;
