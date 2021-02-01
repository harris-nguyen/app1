import React, { Component } from "react";

class Results extends Component {
  render(){
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
                  <span> | Time: {this.props.data.time} |</span>
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
