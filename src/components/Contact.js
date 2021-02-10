import React from "react";
import "../styles/contact.css";
import AbsoluteWrapper from "./AbsoluteWrapper";

const Contact = () => {
  return (
    <AbsoluteWrapper>
      <nav className="social">
        <a
          href="http://github.com/sjsussman"
          target="_blank"
          style={{ fontSize: "10rem", color: "black" }}
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/steven-sussman/"
          target="_blank"
          style={{ fontSize: "10rem", color: "black" }}
        >
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a
          href="http://twitter.com/namssus"
          target="_blank"
          style={{ fontSize: "10rem", color: "black" }}
        >
          <i class="fab fa-twitter"></i>
        </a>
        <a
          href="mailto:hello@sjsussman.com"
          target="_blank"
          style={{ fontSize: "10rem", color: "black" }}
        >
          <i class="fas fa-at"></i>
        </a>
      </nav>
    </AbsoluteWrapper>
  );
};

export default Contact;
