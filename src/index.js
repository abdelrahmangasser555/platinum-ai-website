import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import vedio from "./vedio.mp4";
import "./index.css";

function App() {
  return (
    <div className="my-app">
      <div className="background-container">
        <video autoPlay muted loop id="video-background">
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
