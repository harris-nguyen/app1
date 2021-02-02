import React, { Component } from "react";

class TableResults extends Component {
  render() {
    // convert milliseconds
    const milliseconds = this.props.time;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString();
    return (
      <tr>
        <td>{this.props.place}</td>
        <td>{this.props.mag}</td>
        <td>{humanDateFormat}</td>
      </tr>
    );
  }
}

export default TableResults;
