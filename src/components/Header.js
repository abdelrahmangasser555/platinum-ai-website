import React from "react";
import "../css/header.css";
import pl from "../logo-3.svg";
export default function Header() {
  return (
    <div className="header-section ">
      <div className="image-section">
        <img
          src={pl}
          alt="platinim ai logo "
          className="image-header-section"
        ></img>
      </div>
      <nav className="text-section">
        <h1 className="text-header-section">Platinum AI</h1>
      </nav>
      <nav className="lets-talk">
        <a href="https://calendly.com/abdelrahmangasser2020/30min">
          <button className="button-lets-talk">Let's Talk</button>
        </a>
      </nav>
      <nav className="we-offer">
        <a href="">
          <button className="we-offer-button" href="https://www.youtube.com/">
            what we offer ?
          </button>
        </a>
      </nav>
    </div>
  );
}
