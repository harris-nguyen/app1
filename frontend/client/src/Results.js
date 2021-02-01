import React, { Component } from "react";

class Results extends Component {
  render(){
    const milliseconds = this.props.data.time;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString();

    return (
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">{this.props.data.place}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <span> | Magnitude: {this.props.data.mag}</span>
                  <span> | Time: {humanDateFormat} |</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Results;
