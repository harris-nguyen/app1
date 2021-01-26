import React, { Component } from "react";
import "./App.css";

class App extends Component {
  componentDidMount() {
    console.log("hi");
    fetch("/health-check")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">hello</header>
      </div>
    );
  }
}

export default App;
