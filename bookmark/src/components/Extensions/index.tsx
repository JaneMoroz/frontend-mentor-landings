import React from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

// Icons
import { FirefoxIcon, ChromeIcon, OperaIcon } from "../../assets/icons/icons";

// Features
const extensions = [
  {
    icon: <ChromeIcon />,
    title: "Add to Chrome",
    text: "Minimum version 62",
  },
  {
    icon: <FirefoxIcon />,
    title: "Add to Firefox",
    text: "Minimum version 55",
  },
  {
    icon: <OperaIcon />,
    title: "Add to Opera",
    text: "Minimum version 46",
  },
];

const Extensions = () => {
  return (
    <section className="extensions">
      <motion.div
        initial={{ opacity: 0, y: 72 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 1,
          },
        }}
        viewport={{ once: true }}
        className="container"
      >
        <div className="title">
          <h2>Download the extension </h2>
          <p className="paragraph paragraph--medium">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
        <ul className="extensions-list">
          {extensions.map((extension, index) => (
            <li key={index} className="extensions-list__item">
              <div>{extension.icon}</div>
              <h3>{extension.title}</h3>
              <p>{extension.text}</p>
              <div className="extensions-list__item-divider"></div>
              <button className="btn btn--rect btn--secondary" type="button">
                Add & Install Extension
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Extensions;
