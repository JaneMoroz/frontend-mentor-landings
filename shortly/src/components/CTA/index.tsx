import React from "react";

// Styles
import "./style.css";

const CTA = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__inner">
          <h2 className="text--white">Boost your links today</h2>
          <button className="btn btn--primary btn--big" type="button">
            Get started
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
