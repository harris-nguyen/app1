import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import { Link } from "react-router-dom";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      starttime: "",
      endtime: "",
      latitude: "",
      longitude: "",
      maxradiuskm: "",
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    axios
      .post(`/post`, {
        starttime: this.state.starttime,
        endtime: this.state.endtime,
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        maxradiuskm: this.state.maxradiuskm,
      })
      .then(function (response) {
        let data = response.data.data
        console.log("data", data);
      })
      .catch(function (error) {
        alert("Must Enter Info");
      });
  };

  locationHandler = (event) => {
    this.setState({ location: event.target.value });
  };
  starttimeHandler = (event) => {
    this.setState({ starttime: event.target.value });
  };
  //2000-01-01
  endtimeHandler = (event) => {
    this.setState({ endtime: event.target.value });
  };
  // 2020-01-02
  latitudeHandler = (event) => {
    this.setState({ latitude: event.target.value });
  };
  //37
  longitudeHandler = (event) => {
    this.setState({ longitude: event.target.value });
  };
  //100
  maxradiuskmHandler = (event) => {
    this.setState({ maxradiuskm: event.target.value });
  };
  //200

  render() {
    return (
      <div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div md="6">
            <form onSubmit={this.submitHandler}>
              <br />
              <p className="h4 text-center mb-4">POST</p>

              <br />

              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                start time
              </label>

              <input
                type="date"
                style={{ background: "#e6f2ff" }}
                className="form-control"
                value={this.state.starttime}
                onChange={this.starttimeHandler}
              />

              <br />

              <br />

              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                end time
              </label>

              <input
                type="date"
                style={{ background: "#e6f2ff" }}
                className="form-control"
                value={this.state.endtime}
                onChange={this.endtimeHandler}
              />

              <br />
              Location:
              <br />

              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                latitude
              </label>

              <input
                style={{ background: "#e6f2ff" }}
                className="form-control"
                type="text"
                value={this.state.latitude}
                onChange={this.latitudeHandler}
              />

              <br />
              <br />

              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                longitude
              </label>

              <input
                style={{ background: "#e6f2ff" }}
                className="form-control"
                type="text"
                value={this.state.longitude}
                onChange={this.longitudeHandler}
              />

              <br />
              <br />

              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                max radiuskm
              </label>

              <input
                style={{ background: "#e6f2ff" }}
                className="form-control"
                type="text"
                value={this.state.maxradiuskm}
                onChange={this.maxradiuskmHandler}
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
      </div>
    );
  }
}

export default Form;
