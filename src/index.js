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
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
