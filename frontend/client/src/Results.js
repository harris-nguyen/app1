import React, { Component } from "react";

class Results extends Component {
  render(){
    // console.log("data!", this.props.data.length);
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
                  <div>Mag: {this.props.data.mag}</div>
                  <div>Ids: {this.props.data.ids}</div>
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
