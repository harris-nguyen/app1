import React, { Component } from "react";

class Chart extends Component {
  render() {
    console.log("data!", this.props.data.title);
    return (
      <div className="container">
        <div>Median magnitude of all earthquakes:</div>
        <div>Max magnitude:</div>
        <div>Min magnitude:</div>
        <div>Number of earthquakes:</div>
      </div>
    );
  }
}

export default Chart;
