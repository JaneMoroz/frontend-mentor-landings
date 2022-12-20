import React from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

// Icons
import {
  BrandIcon,
  RecordsIcon,
  CustomizableIcon,
} from "../../assets/icons/icons";

// Features
const features = [
  {
    icon: <BrandIcon />,
    title: "Brand Recognition",
    text: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: <RecordsIcon />,
    title: "Detailed Records",
    text: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    icon: <CustomizableIcon />,
    title: "Fully Customizable",
    text: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Features = () => {
  return (
    <section className="features">
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
          <h2>Advanced Statistics</h2>
          <p className="paragraph paragraph--medium">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-list__item">
              <div>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p className="paragraph paragraph--small">{feature.text}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Features;
