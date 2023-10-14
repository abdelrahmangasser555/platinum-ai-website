import React from "react";
import "../css/body1.css";
import down from "../down-NB.png";
import weOffer from "../we-offer-RB.png";
import boosting from "../boosting-RB.png";

export default function Body2() {
  return (
    <div className="body-2" id="to-section">
      <div className="sec">
        <div className="image-container">
          <img src={down} alt="down" className="image-down"></img>
        </div>
        <div
          className="text-part
      "
        >
          <h1 className="heading">
            <span className="span-heading">problems </span>you have
          </h1>
          <ul className="list">
            <li className="list-item">low leads generation</li>
            <li className="list-item">time consumption</li>
            <li className="list-item">no constinouse development</li>
          </ul>
        </div>
      </div>
      <div className="sec">
        <div
          className="text-part-01
      "
        >
          <h1 className="heading">
            solutions <span className="span-heading">we offer</span>
          </h1>
          <ul className="list">
            <li className="list-item">low leads generation</li>
            <li className="list-item">time consumption</li>
            <li className="list-item">no constinouse development</li>
          </ul>
        </div>
        <div className="image-container-right">
          <img src={weOffer} alt="down" className="image-down"></img>
        </div>
      </div>
      <div className="sec">
        <div className="image-container">
          <img
            src={boosting}
            alt="down"
            className="image-down"
            id="boosting"
          ></img>
        </div>
        <div
          className="text-part
      "
        >
          <h1 className="heading">
            where you <span className="span-heading">will be</span>{" "}
          </h1>
          <ul className="list">
            <li className="list-item">low leads generation</li>
            <li className="list-item">time consumption</li>
            <li className="list-item">no constinouse development</li>
          </ul>
        </div>
      </div>
      <div className="call-to-action-01">
        <h1>
          are you ready <br></br> to boost ?
        </h1>
      </div>
      <nav>
        <a href="https://calendly.com/abdelrahmangasser2020/30min">
          <button className="let-us-talk">Book Meeting now !</button>
        </a>
      </nav>
    </div>
  );
}
