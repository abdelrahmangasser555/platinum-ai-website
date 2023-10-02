import React from "react";
import "../css/Body.css";
import AnimatedText from "./animate-text";
import Veba from "./animation";

export default function Body() {
  return (
    <div className="body-section ">
      <div className="about-us-section">
        <h1 className="about-us-header">About Us</h1>
        <p className="about-us-text">
          PLATINUM AI 🌟 <br></br>is your dedicated partner for the entire AI
          development journey, from idea inception to realization and beyond. We
          specialize in enhancing business 🚀 units by creating cutting-edge AI
          solutions 🔥 that boost efficiency and drive growth. We'll work
          closely with you through every phase, turning your concepts into
          practical solutions. With our industry experience, we'll help create
          an innovative product for your company's success! 💪
        </p>
      </div>
      <div className="services-section">
        <div className="services-text">
          <AnimatedText
            word1="just"
            word2="your"
            word3="business"
            word4="with"
            word5="platinumai"
          />
        </div>
      </div>
      <div className="about-us-header">
        <h1>OUR SERVICE</h1>
      </div>
      <div className="animation-3d-masro2a">
        <Veba />
      </div>
      <div className="our-services">
        <div className="our-service-container">
          <div className="our-service-container-header">
            <h1>ai agents</h1>
            <p className="service-description">
              ai agents will boost your leads so what are you waiting for start
              boosting your <span className="crm ">crm </span>📈
            </p>
          </div>
        </div>
        <div className="our-service-container">
          <div className="our-service-container-header">
            <h1>automations</h1>
            <p className="service-description">
              ai agents will boost your leads and{" "}
            </p>
          </div>
        </div>
        <div className="our-service-container">
          <div className="our-service-container-header">
            <h1>costum code solutions</h1>
            <p className="service-description">
              just imagine what you what to create and we will make it work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
