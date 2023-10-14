import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body2 from "./components/body-p2";
import "./index.css";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div className="my-app">
      <Header />
      <Body />
      <Body2 />

      <Footer />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
