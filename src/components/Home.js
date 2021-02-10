import React from "react";
import "../styles/home.css";
import ExportedDeck from "./TechStack/Deck.js";
import { Link } from "react-router-dom";
import AbsoluteWrapper from "./AbsoluteWrapper";

const Home = () => {
  return (
    <AbsoluteWrapper>
      <div id="home-container">
        <h1 id="home-header">Hello, my name is Steven</h1>
        <p>
          I am a full stack web developer with an enthusiasm for UX/UI design.
        </p>
        <p>
          Check out my work{" "}
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "crimson" }}
          >
            here
          </Link>
          .
        </p>
        <p>
          Want to chat? You can reach me{" "}
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "crimson" }}
          >
            here
          </Link>
          .
        </p>
        <p id="tech-stack">My Tech Stack</p>
      </div>
      <div>
        <ExportedDeck />
      </div>
    </AbsoluteWrapper>
  );
};

export default Home;
