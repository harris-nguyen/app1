import React, { Component } from "react";
import "./App.css";
import Form from'./Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.pastDayData = this.pastDayData.bind(this);
    this.jsonData = this.jsonData.bind(this);
    this.query = this.query.bind(this);
  }

  componentDidMount() {
    // this.pastDayData()
    // this.jsonData();
    // this.query();
  }

  pastDayData() {
    fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
      .then((response) => response.json())
      .then((data) => console.log("pastDayData", data));
  }

  jsonData() {
    fetch("https://earthquake.usgs.gov/fdsnws/event/1/application.json")
      .then((response) => response.json())
      .then((data) => console.log("jsonData", data));
  }

  query() {
    fetch(
      "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02"
    )
      .then((response) => response.json())
      .then((data) => console.log("query", data));
  }

  render() {
    return (
      <div className="">
        <br />
        <Form />
      </div>
    );
  }
}

export default App;
