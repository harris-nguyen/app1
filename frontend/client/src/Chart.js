import React, { Component } from "react";

class Chart extends Component {
  render() {
    let max = 0;
    let min
    let avg = 0
    let magData = this.props.magCollection;
    for (let i = 0; i < magData.length; i++) {

      if(magData[i] > max){
        max = magData[i];
      }
      if(magData[i] < max){
        min = magData[i]
      }
    }

    console.log((max + min) / 2);
    return (
      <div className="container">
        <div>Number of earthquakes: {this.props.len}</div>
        <div>Median magnitude: {(max + min) / 2}</div>
        <div>Max magnitude: {max}</div>
        <div>Min magnitude: {min}</div>
      </div>
    );
  }
}

export default Chart;
