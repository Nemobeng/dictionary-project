import React from "react";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "./Dictionary.css";
import logo from "./bookoutline.png";

export default function App() {
  return (
    <div className="dictionary">
      <div className="container">
        <div className="title">
          <img src={logo} className="Logo" alt="logo" />
          <div className="header">DICTIONARY</div>
        </div>
        <main>
          <Dictionary defaultKeyword="fire" />
        </main>
        <footer className="footer">
          Coded by Nermine Obeng. Open-sourced on{" "}
          <a
            href="https://github.com/Nemobeng/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            <strong>Github</strong>
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
