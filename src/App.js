import React from "react";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="Dictionary">
      <div className="container">
        <header>DICTIONARY</header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer">Coded by Nermine Obeng</footer>
      </div>
    </div>
  );
}
