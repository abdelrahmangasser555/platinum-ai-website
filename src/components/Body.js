import React from "react";
import "../css/Body.css";
import AnimatedText from "./animate-text";
import Veba from "./animation";
import joe from "../joe_duplicate.jpg";
import marwan from "../marwan.jpg";
import fares from "../fares-cropped-2.jpg";
import ana from "../gasser-cropped-2.png";
import hamada from "../joe-shorse-amplify.png";

export default function Body() {
  return (
    <div className="body-section ">
      <div className="about-us-section">
        <h1 className="about-us-header-part-top">About Us</h1>
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
            word1="automate "
            word2="your"
            word3="business "
            word4="with "
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
              boosting your CRM 📈
            </p>
          </div>
        </div>
        <div className="our-service-container">
          <div className="our-service-container-header">
            <h1>automations</h1>
            <p className="service-description">
              automations will connect all your apps together and CI&CD <br />
              save your time 🕒 and money 💰
            </p>
          </div>
        </div>
        <div className="our-service-container">
          <div className="our-service-container-header">
            <h1>costum solutions</h1>
            <p className="service-description">
              just imagine what you what to create and we will make it work 🚀
            </p>
          </div>
        </div>
      </div>
      <div className="our-team">
        <div className="our-team-header">
          <h1>our team</h1>
        </div>
        <div className="our-team-container">
          <div className="our-team-container-card">
            <div className="our-team-container-card-img">
              <img
                src={fares}
                alt="hello joe"
                className="image-profile-marwan"
              />
            </div>
            <div className="our-team-container-card-text">
              <h1 className="name">FARES WAEL</h1>
              <p className="position">COO</p>
            </div>
          </div>

          <div className="our-team-container-card">
            <div className="our-team-container-card-img">
              <img src={ana} alt="hello joe" className="image-profile-marwan" />
            </div>
            <div className="our-team-container-card-text">
              <h1 className="name">gasser</h1>
              <p className="position">CMO</p>
            </div>
          </div>

          <div className="our-team-container-card">
            <div className="our-team-container-card-img">
              <img
                src="https://i.pinimg.com/originals/44/c1/87/44c1876c21a647474142f9534f8f34ed.jpg"
                alt="joe shorse"
                className="image-profile-marwa"
                style={{
                  width: "100%",
                  height: "80%",
                  // don't maintain aspect ratio
                  objectFit: "cover",
                  // contain,
                  // scale the image uniformly
                  objectPosition: "center",
                  overflow: "hidden",
                }}
              />
            </div>
            <div className="our-team-container-card-text">
              <h1 className="name">yusuf emad</h1>
              <p className="position">CTO</p>
            </div>
          </div>

          <div className="our-team-container-card">
            <div className="our-team-container-card-img">
              <img
                src={marwan}
                alt="hello joe"
                className="image-profile-marwan"
              />
            </div>
            <div className="our-team-container-card-text">
              <h1 className="name">marwan wael</h1>
              <p className="position">ceo</p>
            </div>
          </div>
        </div>
      </div>
      <div className="call-to-action" id="to-section">
        <h1>see the future</h1>
      </div>
    </div>
  );
}
