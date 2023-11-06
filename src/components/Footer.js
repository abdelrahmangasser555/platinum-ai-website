import React from "react";
import "../css/Footer.css";
import instgram from "../instgram-icon.jpeg";
import logo from "../logo-3.svg";
import discord from "../discord-RB.png";
export default function Footer() {
  return (
    <div className="all-fotter-section">
      <div className="footer-section ">
        <div className="left-fotter-section">
          <div className="footer-logo">
            <img
              src={logo}
              alt="platinum ai logo"
              className="fotter-logo"
            ></img>
            <h1 className="fotter-name">platinum ai</h1>
          </div>
          <div className="join-our-discord">
            <h3 className="join-our-discord-text">Join our discord</h3>
            <button className="discord-button">
              <img
                src={discord}
                alt="discord icon"
                className="discord-icon"
              ></img>
            </button>
          </div>
        </div>
        <div className="email-fotter">
          <h1 className="left-fotter-text">address</h1>
          <p>alexandria , egypt</p>
        </div>
        <div className="contact-fotter">
          <h1 className="left-fotter-text">contact</h1>
          <p>autox@gmail.com</p>
        </div>
      </div>
      <div className="border">
        <p
          style={{
            display: "inline-block",
            color: "white",
          }}
        >
          copyright plattinum ai ©
        </p>
      </div>
    </div>
  );
}
