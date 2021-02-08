import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="contact">
        <Contact />
      </Route>
      <Route path="contact">
        <Projects />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
