import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results.js";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <div className="container">
          <section>
            <h2>What word do you want to look up?</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter word"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
              ></input>
            </form>
            <div className="hint">
              <p>Suggested words: idle, nonplussed, onomatopoeia</p>
            </div>
          </section>
          <Results results={results} />
        </div>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
