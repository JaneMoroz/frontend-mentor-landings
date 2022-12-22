import React from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hero__text"
          >
            <h1>A Simple Bookmark Manager </h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="hero__btns">
              <button className="btn btn--rect btn--secondary" type="button">
                Get it on Chrome
              </button>
              <button className="btn btn--rect btn--tertiary" type="button">
                Get it on Firefox
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
