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
        <button className="button-lets-talk">Let's Talk</button>
      </nav>
      <nav className="we-offer">
        <button className="we-offer-button">what we offer ?</button>
      </nav>
    </div>
  );
}
