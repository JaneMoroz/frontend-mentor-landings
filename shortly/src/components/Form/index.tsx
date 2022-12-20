import React, { useState, useEffect } from "react";

// Styles
import "./style.css";

// Types
type LinkListItemType = {
  original: string;
  new: string;
  copied: boolean;
};

const Form = () => {
  const [linksList, setLinksList] = useState([] as LinkListItemType[]);
  const [originalLink, setOriginalLink] = useState("");

  // Submit
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    fetch(`https://api.shrtco.de/v2/shorten?url==${originalLink}`)
      .then((response) => response.json())
      .then((data) => {
        const newLink = {
          original: originalLink,
          new: data.result.full_short_link,
          copied: false,
        };
        setLinksList([newLink, ...linksList]);
        setOriginalLink("");
      });
  };

  // Copy
  const handleCopy = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLButtonElement)) {
      return;
    }

    if (e.target.dataset.short) {
      const short = e.target.dataset.short;
      // Copy to clipboard
      navigator.clipboard.writeText(short);

      // Mark as copied
      setLinksList(
        linksList.map((link) => {
          if (link.new === short) {
            console.log("change");

            return { ...link, copied: true };
          }
          return { ...link, copied: false };
        })
      );
    }
  };

  // Get links from local storage
  useEffect(() => {
    if (localStorage.getItem("links")) {
      const linksFromLS = localStorage.getItem("links");
      setLinksList(JSON.parse(linksFromLS || "[]"));
    }
  }, []);

  // Save link to local storage
  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(linksList));
  }, [linksList]);

  return (
    <section className="form-section">
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <label htmlFor="url">Url</label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="Shorten a link here..."
              value={originalLink}
              onChange={(e) => setOriginalLink(e.currentTarget.value)}
              required
            />
          </div>
          <button className="btn btn--primary btn--big btn--form" type="submit">
            Shorten It!
          </button>
        </form>
        <ul className="short-links">
          {linksList.map((link, index) => (
            <li key={index} className="short-links__item">
              <span className="original-link">{link.original}</span>
              <div className="short-links__result">
                <span className="short-link">{link.new}</span>
                <button
                  data-short={link.new}
                  onClick={handleCopy}
                  className={`btn btn--primary btn--form ${
                    link.copied && "btn--copied"
                  }`}
                  type="button"
                >
                  {link.copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Form;