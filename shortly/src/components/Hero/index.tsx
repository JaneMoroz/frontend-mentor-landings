import React from "react";

// Styles
import "./style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__text">
            <h1>More than just shorter links</h1>
            <p className="paragraph paragraph--big">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <button className="btn btn--primary btn--big" type="button">
              Get started
            </button>
          </div>
          <div className="hero__image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
