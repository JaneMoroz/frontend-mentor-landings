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
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="hero__text"
          >
            <h1>More than just shorter links</h1>
            <p className="paragraph paragraph--big">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn btn--primary btn--big" type="button">
              Get started
            </button>
          </motion.div>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-40%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            className="hero__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
