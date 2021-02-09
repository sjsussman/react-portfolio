import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
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
    </>
  );
}

export default App;
