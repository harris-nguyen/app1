import React, { Component } from "react";
import Tabledata from './TableResults'

class Results extends Component {
  render(){
    const data = this.props.data.map((data, i) => {
      return (
        <Tabledata
          place={data.properties.place}
          mag={data.properties.mag}
          time={data.properties.time}
          index={i}
        />
      );
    });

    return (
      <div className="container">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">LOCATION</th>
              <th scope="col">MAG</th>
              <th scope="col">TIME</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    );
  }
}

export default Results;


//  <table className="table table-striped table-dark">
//    <thead>
//      <tr>
//        <th scope="col"></th>
//      </tr>
//    </thead>
//    <tbody>
//      <tr>
//        <td>
//          <div>
//            <span> | {this.props.index + 1}</span>
//            <span> | LOCATION: {this.props.data.place}</span>
//            <span> | MAGNITUDE: {this.props.data.mag}</span>
//            <span> | TIME: {humanDateFormat} |</span>
//          </div>
//        </td>
//      </tr>
//    </tbody>
//  </table>;
