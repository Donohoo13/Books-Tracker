import React, { Component } from "react";
import Books from "./Books";
import "../CSS/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Books />
      </div>
    );
  }
}

export default App;
