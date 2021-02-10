import React from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import { useTransition, animated } from "react-spring";

const App = () => {
  const location = useLocation();
  console.log("this is your location", location);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" },
  });
  return (
    <>
      <Navbar />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
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
        </animated.div>
      ))}
    </>
  );
};

export default App;
