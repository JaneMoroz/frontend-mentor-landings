import type React from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

// Icons
import { ArrowIcon } from "../../assets/icons/icons";

// Questions data
const questions = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Questions = () => {
  const handleExpand = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    if (target) {
      // Get panel id
      const controlId = e.currentTarget.id;

      // Get panel
      const panel = document.querySelector(
        `[aria-labelledby="${controlId}"]`
      ) as HTMLDivElement;

      if (e.currentTarget.ariaExpanded === "true") {
        e.currentTarget.ariaExpanded = "false";
        panel.setAttribute("hidden", "");
      } else {
        e.currentTarget.ariaExpanded = "true";
        panel.removeAttribute("hidden");
      }
    }
  };

  return (
    <section className="questions">
      <div className="container">
        <motion.div
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
          className="questions__inner"
        >
          <div className="title">
            <h2>Frequently Asked Questions</h2>
            <p>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>
          <div className="accordion-group">
            {questions.map((question, index) => (
              <div key={index} className="accordion">
                <h3>
                  <button
                    type="button"
                    aria-expanded="false"
                    className="accordion__btn"
                    aria-controls={`sect1${index}`}
                    id={`accordion${index}id`}
                    onClick={handleExpand}
                  >
                    <span className="accordion__title">
                      {question.question}
                    </span>
                    <span className="accordion__icon">
                      <ArrowIcon />
                    </span>
                  </button>
                </h3>
                <div
                  id={`sect1${index}`}
                  role="region"
                  aria-labelledby={`accordion${index}id`}
                  className="accordion__panel"
                  hidden
                >
                  <div>
                    <fieldset>
                      <p>{question.answer}</p>
                    </fieldset>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="btn btn--rect btn--secondary">More Info</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Questions;
