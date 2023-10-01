import React, { useEffect, useState } from "react";
import { Element, animateScroll as scroll, scroller } from "react-scroll";
import "../css/animate-text.css";

const AnimatedText = (props) => {
  const { word1, word2, word3, word4, word5 } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector(".text-container");
      if (textElement) {
        const rect = textElement.getBoundingClientRect();
        const visible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(visible);
      }
    };

    // Add a scroll event listener to trigger the animation
    window.addEventListener("scroll", handleScroll);

    // Initial check in case the element is already in the viewport on page load
    handleScroll();

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Element
      name="text-container"
      className={`text-container ${isVisible ? "visible" : ""}`}
    >
      <span className="word-1">{word1} </span>
      <span className="word-2">{word2} </span>
      <span className="word-3">{word3} </span>
      <span className="word-4">{word4} </span>
      <span className="word-5">{word5}</span>
    </Element>
  );
};

export default AnimatedText;
