import React, { useState } from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

// Features data
const features = [
  {
    button: "Simple Bookmarking",
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: "images/illustration-features-tab-1.svg",
  },
  {
    button: "Speedy Searching",
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: "images/illustration-features-tab-2.svg",
  },
  {
    button: "Easy Sharing",
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: "images/illustration-features-tab-3.svg",
  },
];

const Features = () => {
  const [slider, setSlider] = useState(0);

  return (
    <motion.section
    // initial={{ opacity: 0, y: 72 }}
    // whileInView={{
    //   opacity: 1,
    //   y: 0,
    //   transition: {
    //     delay: 0.5,
    //     duration: 1,
    //   },
    // }}
    // viewport={{ once: true }}
    // className="features"
    >
      <div className="container">
        <div className="features__inner">
          <div className="title">
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </div>
          <div className="features__slider">
            <div className="features__slider-controls">
              {features.map((feature, index) => (
                <button
                  className={`btn features__slider-btn ${
                    slider === index && "features__slider-btn--active"
                  }`}
                  key={index}
                  type="button"
                  onClick={() => setSlider(index)}
                >
                  {feature.button}
                </button>
              ))}
            </div>
            <div className="feature__slider-inner">
              <div className="feature__slider-image">
                <img src={features[slider].image} alt="" />
              </div>
              <div className="feature__slider-text">
                <h2>{features[slider].title}</h2>
                <p>{features[slider].text}</p>
                <button className="btn btn--rect btn--secondary" type="button">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
