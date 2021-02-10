import React from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Switch, useLocation, useHistory } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/NavBar/Navbar";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
