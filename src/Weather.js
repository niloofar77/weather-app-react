import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            {" "}
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>New york</h1>
      <ul>
        <li>Wendsday 07:00</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
              alt="rainy"
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="tempeture"> 6 </span>
              <span className="unit">c</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipation:15%</li>
            <li>Humidity:72%</li>
            <li>wind:13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
