import React, { Component } from "react";

class Chart extends Component {
  render() {
    let max = 0;
    let min
    let magData = this.props.magCollection;
    for (let i = 0; i < magData.length; i++) {
      if(magData[i] > max){
        max = magData[i];
      }
      if(magData[i] < max){
        min = magData[i]
      }
    }
    return (
      <div className="container">
        <div>Total earthquakes: {this.props.len}</div>
        <div>Avg magnitude: {(max + min) / 2}</div>
        <div>Max magnitude: {max}</div>
        <div>Min magnitude: {min}</div>
        <br />
      </div>
    );
  }
}

export default Chart;
