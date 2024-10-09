import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon, MinusIcon, PlusIcon } from "../../assets/svg"; // Ensure correct paths for icons
import { accountFaqs, OPCRFaqs, OOFaqs } from "../utils/index"; // Ensure correct path for FAQs data
import '../../styles/landing_page.css'; // Ensure correct path for your stylesheet

function FAQsComponent() {
  const [activeCategory, setActiveCategory] = useState("Account"); // Track active FAQ category
  const [activeQuestions, setActiveQuestions] = useState({}); // Track which questions are open
  const faqsSectionRef = useRef(null); // Reference to the FAQs section for any scrolling behavior

  // Scroll animation for the heading and paragraph section
  useEffect(() => {
    const handleScroll = () => {
      const faqsHeadingAndParagraph = document.querySelector(".faqsHeadingAndParagraph");
      if (faqsHeadingAndParagraph) {
        const bounding = faqsHeadingAndParagraph.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          faqsHeadingAndParagraph.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll animation for the stacks of FAQs
  useEffect(() => {
    const handleScroll = () => {
      const faqsStacks = document.querySelector(".faqsStacks");
      if (faqsStacks) {
        const bounding = faqsStacks.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          faqsStacks.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle the visibility of a question's answer
  const toggleQuestion = (index) => {
    console.log("Toggling question:", index); // Log which question is clicked
    console.log("Current state:", activeQuestions); // Log current state of activeQuestions

    setActiveQuestions((prevState) => {
      const newState = {
        ...prevState,
        [index]: !prevState[index], // Toggle the specific question's visibility
      };

      console.log("Updated state:", newState); // Log updated state of activeQuestions
      return newState;
    });
  };

  // Change category and reset active questions
  const toggleCategory = (category) => {
    setActiveCategory(category);
    setActiveQuestions({}); // Reset all active questions when category changes
  };

  // Render the FAQs for the active category
  const renderFAQs = () => {
    switch (activeCategory) {
      case "Account":
        return accountFaqs;
      case "OPCR":
        return OPCRFaqs;
      case "OO":
        return OOFaqs;
      default:
        return [];
    }
  };

  return (
    
        <div ref={faqsSectionRef} id="faqs">
          <div className="wrapper">
            {/* Heading & Paragraph */}
            <div className="faqsHeadingAndParagraph headingAndParagraph">
              <h2>
                Having Questions About Us? We Have Just The Right Answers For
                You
              </h2>
              <p>
                If you can’t find the answer you’re looking for? Chat with{" "}
                <Link to="#">our team here</Link>.
              </p>
            </div>

            {/* Stacks */}
            <div className="faqsStacks stacks">
              {/* Categories */}
              <div className="categories stack">
                <h3>Categories</h3>

                {/* Tabs */}
                <div className="tabs">
                  <div
                    className={
                      activeCategory === "Account" ? "active tab" : "tab"
                    }
                    onClick={() => toggleCategory("Account")}
                  >
                    <p>Account</p>
                    <button className="text btn">
                      <ChevronRightIcon
                        width="14px"
                        height="14px"
                        color="#232323"
                      />
                    </button>
                  </div>

                  <div
                    className={activeCategory === "OPCR" ? "active tab" : "tab"}
                    onClick={() => toggleCategory("OPCR")}
                  >
                    <p>Office Performance Commitment and Review (OPCR)</p>
                    <button className="text btn">
                      <ChevronRightIcon
                        width="14px"
                        height="14px"
                        color="#232323"
                      />
                    </button>
                  </div>

                  <div
                    className={activeCategory === "OO" ? "active tab" : "tab"}
                    onClick={() => toggleCategory("OO")}
                  >
                    <p>Organizational Outcome (OO)</p>
                    <button className="text btn">
                      <ChevronRightIcon
                        width="14px"
                        height="14px"
                        color="#232323"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* QA */}
              <div className="qa stack">
                <h3>FAQs</h3>

                <div className="dropdowns">
                  {renderFAQs().map((faq, index) => (
                    <div
                      key={index}
                      className={
                        activeQuestions[index] ? "dropdown active" : "dropdown"
                      }
                      id="active"
                      onClick={() => toggleQuestion(index)}
                    >
                      <div className="question">
                        <p>{faq.question}</p>
                        <button className="text btn">
                          {activeQuestions[index] ? (
                            <MinusIcon
                              width="14px"
                              height="14px"
                              color="#232323"
                            />
                          ) : (
                            <PlusIcon
                              width="14px"
                              height="14px"
                              color="#232323"
                            />
                          )}
                        </button>
                      </div>
                      {activeQuestions[index] && (
                        <div className="answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default FAQsComponent;
