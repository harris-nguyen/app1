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
      starttime: "",
      endtime: "",
      minmagnitude: "",
      data: []
    };
  }

  submitHandler = (event) => {
    event.preventDefault();

    if(this.state.starttime && this.state.endtime){
      let url = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${this.state.starttime}&endtime=${this.state.endtime}&minmagnitude=${this.state.minmagnitude || 0 }&minmagnitude=${this.state.minmagnitude || 0}`;
      fetch(url, {
        starttime: Number(this.state.starttime),
        endtime: Number(this.state.endtime),
        minmagnitude: Number(this.state.minmagnitude),
      })
        .then((response) => response.json())
        .then((contents) => {
          this.setState({
              data: [...this.state.data, ...contents.features],
            });
        })
        .catch(() =>
          console.log("Can’t access " + url + " response. Blocked by browser?")
        );
    } else {
      alert('Must enter dates')
    }
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
              <p className="h4 text-center mb-4">Earthquake</p>
              <br />
              <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                Start Date
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
                End Date
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
              <br />
              <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                Minmagnitude
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
                  SEARCH
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
