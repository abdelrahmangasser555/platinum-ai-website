import React from "react";
import "../css/Body.css";
import AnimatedText from "./animate-text";

export default function Body() {
  return (
    <div className="body-section ">
      <div className="about-us-section">
        <h1 className="about-us-header">About Us</h1>
        <p className="about-us-text">
          Platinum AI is your dedicated partner for the entire AI development
          journey, from the spark of an idea to the realization and beyond. We
          specialize in enhancing business units by dedicating time and effort
          to create cutting-edge AI solutions that redefine efficiency and
          ignite growth. We'll walk hand-in-hand with you through every phase,
          transforming your concepts into practical solutions. With our
          extensive industry experience, we'll collaborate closely to create an
          innovative product that becomes the catalyst for your company's
          resounding success! 🚀💎
        </p>
      </div>
      <div className="services-section">
        <div className="services-header">
          <h1></h1>
        </div>
        <div className="services-text">
          <AnimatedText
            word1="automate"
            word2="your"
            word3="business"
            word4="with"
            word5="platinumai"
          />
        </div>
      </div>
    </div>
  );
}
