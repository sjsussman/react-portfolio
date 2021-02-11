import React from "react";
import Card from "./Project Card/Card.js";
import "../styles/project.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div id="project-banner">
        <h1>PROJECTS</h1>
        {/* <p>Thanks for sticking around! Check out some of my work below.</p> */}
      </div>
      <div id="cardWrapper">
        <Card />
      </div>
      <div id="link-container">
        <p style={{ color: "#fff" }}>
          See{" "}
          <a
            href="https://my-dev-chat.vercel.app/"
            target="_blank"
            id="devAppLink"
          >
            me
          </a>{" "}
          live!
        </p>
      </div>
    </motion.div>
  );
};

export default Projects;
