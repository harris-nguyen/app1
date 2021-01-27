import React, { Component } from "react";
import "./App.css";
import Form from'./Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:''
    };
  }

  componentDidMount() {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2000-01-01&endtime=2020-01-02&minmagnitude=5&minmagnitude=1&latitude=37&longitude=100&maxradiuskm=200"
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data
        })
      );
  }
  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <header className=""></header>
        <Form data={this.state.data} />
      </div>
    );
  }
}

export default App;
