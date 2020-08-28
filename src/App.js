import React from "react";

import "./styles.css";
import FetchRepos from "./FetchRepos";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FetchRepos />
        <input type="text" id="reposInput" name="reposInput" required />
        <button onClick={""}>Delete all</button>
      </div>
    );
  }
}
