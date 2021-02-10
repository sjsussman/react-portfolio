import React from "react";
import Card from "./Project Card/Card.js";
import "../styles/project.css";
import AbsoluteWrapper from "./AbsoluteWrapper";

const Projects = () => {
  return (
    <AbsoluteWrapper>
      <div id="project-banner">
        <h1>Just a piece of advice...</h1>
        <p>Click on a card to learn more about the project</p>
      </div>
      <div id="cardWrapper">
        <Card />
      </div>
      <div id="link-container">
        <a
          href="https://my-dev-chat.vercel.app/"
          target="_blank"
          id="devAppLink"
        >
          Check out the deployed site
        </a>
      </div>
    </AbsoluteWrapper>
  );
};

export default Projects;
