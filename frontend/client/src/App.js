import React, { Component } from "react";
import "./App.css";
import Form from'./Form'

class App extends Component {

  componentDidMount() {
    // db connection
    fetch("/health-check")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  render() {
    return (
      <div>
        <br />
        <Form />
      </div>
    );
  }
}

export default App;
