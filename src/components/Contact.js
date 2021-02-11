import React from "react";
import "../styles/contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <h1 id="contact-banner">CONTACT</h1>
      <h1 id="me-banner">ME</h1>
      <nav className="social">
        <a href="http://github.com/sjsussman" target="_blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/steven-sussman/" target="_blank">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="http://twitter.com/namssus" target="_blank">
          <i class="fab fa-twitter"></i>
        </a>
        <a href="mailto:hello@sjsussman.com" target="_blank">
          <i class="fas fa-at"></i>
        </a>
      </nav>
    </motion.div>
  );
};

export default Contact;
