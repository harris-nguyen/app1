import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import axios from "axios";
import Results from './Results'
import Chart from './Chart'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      starttime: "",
      endtime: "",
      latitude: "",
      longitude: "",
      minmagnitude: "",
      maxradiuskm: "",
      data: [],
      data2: [],
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    // let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-26&endtime=2021-01-28`;
    let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${this.state.starttime}&endtime=${this.state.endtime}&minmagnitude=${this.state.minmagnitude}&minmagnitude=${this.state.minmagnitude}`;
    // let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2021-01-27&endtime=2021-01-28&minmagnitude=4.9&minmagnitude=4.9&latitude=37&longitude=100&maxradiuskm=200`
    fetch(url, {
      starttime: Number(this.state.starttime),
      endtime: Number(this.state.endtime),
      minmagnitude: Number(this.state.minmagnitude),
    })
      .then((response) => response.json())
      .then((contents) => {
        this.setState(
          {
            data: [...this.state.data, ...contents.features],
            // data2: [...this.state.data2, ...contents],
          },
          console.log(contents)
        );
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  };

  locationHandler = (event) => {
    this.setState({ location: event.target.value });
  };
  starttimeHandler = (event) => {
    this.setState({ starttime: event.target.value });
  };
  endtimeHandler = (event) => {
    this.setState({ endtime: event.target.value });
  };
  minmagnitudeHandler = (event) => {
    this.setState({ minmagnitude: event.target.value});
  }

  render() {
    let numberOfEarthQauks = this.state.data.length;
    let magCollection = []

    let allData = this.state.data
    for(let i = 0; i < allData.length; i++){
      magCollection.push(allData[i].properties.mag);
    }

    return (
      <div>
        <div className="container">
          <div md="6">
            <form onSubmit={this.submitHandler}>
              <br />
              <p className="h4 text-center mb-4">POST</p>
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                start time
              </label>
              <input
                type="text"
                style={{ background: "#e6f2ff" }}
                className="form-control"
                value={this.state.starttime}
                placeholder={"2021-01-27"}
                onChange={this.starttimeHandler}
              />
              <br />
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                end time
              </label>
              <input
                type="text"
                style={{ background: "#e6f2ff" }}
                className="form-control"
                value={this.state.endtime}
                placeholder={"2021-01-28"}
                onChange={this.endtimeHandler}
              />
              <br />
              Location:
              <br />
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                minmagnitude
              </label>
              <input
                style={{ background: "#e6f2ff" }}
                className="form-control"
                type="text"
                placeholder={"4.9"}
                value={this.state.minmagnitude}
                onChange={this.minmagnitudeHandler}
              />
              <br />
              <br />
              <div className="text-center mt-4">
                <MDBBtn color="indigo" type="submit">
                  Submit
                </MDBBtn>
              </div>
            </form>
          </div>
        </div>
        {this.state.data.length !== 0 ? (
          <Chart len={numberOfEarthQauks} magCollection={magCollection} />
        ) : null}
        <div>
          <div>
            {this.state.data.length !== 0 ? (
              <div>
                {this.state.data.map((info, i) => {
                  return (
                    <div key={i}>
                      <Results data={info.properties} />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default Form;


  // maxradiuskmHandler = (event) => {
  //   this.setState({ maxradiuskm: event.target.value });
  // };

  // latitudeHandler = (event) => {
  //   this.setState({ latitude: event.target.value });
  // };
  // longitudeHandler = (event) => {
  //   this.setState({ longitude: event.target.value });
  // };

// <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
//                 latitude
//               </label>
//               <input
//                 style={{ background: "#e6f2ff" }}
//                 className="form-control"
//                 type="text"
//                 value={this.state.latitude}
//                 onChange={this.latitudeHandler}
//               />
//               <br />
//               <br />
//               <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
//                 longitude
//               </label>
//               <input
//                 style={{ background: "#e6f2ff" }}
//                 className="form-control"
//                 type="text"
//                 value={this.state.longitude}
//                 onChange={this.longitudeHandler}
//               />
//               <br />
//               <br />
