import React from "react";
import "../styles/home.css";
import ExportedDeck from "./TechStack/Deck.js";

const Home = () => {
  return (
    <>
      <div id="home-container">
        <h1 id="home-header">Hello, my name is Steven</h1>
        <p>
          I am a full stack web developer with an enthusiasm for UX/UI design.
        </p>
        <p>Check out my work here.</p>
        <p>Want to chat? You can reach me here.</p>
        <p id="tech-stack">My Tech Stack</p>
      </div>
      <div>
        <ExportedDeck />
      </div>
    </>
  );
};

export default Home;
