import React from "react";
import "../css/header.css";
import pl from "../logo-3.svg";
import { Link } from "react-scroll";
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
        <Link
          activeClass="active"
          to="to-section" // Replace with the ID of the section you want to scroll to
          spy={true}
          smooth={true}
          offset={-70} // Adjust the offset as needed
          duration={2000}
        >
          <button className="we-offer-button">what we offer ?</button>
        </Link>
      </nav>
    </div>
  );
}
