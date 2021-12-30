import React from "react";
import "./App.css";
import Dictionary from "./Dictionary.js";
import "./Dictionary.css";
import logo from "./bookoutline.png";

export default function App() {
  return (
    <div className="Dictionary">
      <div className="container">
        <div className="heading">
          <header>DICTIONARY</header>
          <img src={logo} className="Logo" alt="logo" />
        </div>
        <main>
          <Dictionary defaultKeyword="fire" />
        </main>
        <footer className="footer">
          Coded by Nermine Obeng. Open-sourced on{" "}
          <a href="https://github.com/Nemobeng/dictionary-project">
            <strong>Github</strong>
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
