import React, { useState } from "react";

// Styles
import "./style.css";

const CTA = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  // Check if email is valid
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    if (!isValidEmail(target.email.value)) {
      setError("Whoops, make sure it's an email");
    } else {
      setError("");
      setEmail("");
    }
  };

  return (
    <section className="cta">
      <div className="container">
        <div className="cta__inner">
          <span className="text--white">35.000+ already joined</span>
          <h2 className="text--white">Stay up-to-date with what we’re doing</h2>
          <form onSubmit={(e) => handleSubmit(e)} className="form">
            <div className="form__input-group">
              <label htmlFor="email">Url</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                required
              />
              {error !== "" && <span className="form__error">{error}</span>}
            </div>
            <button className="btn btn--rect btn--primary" type="submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
