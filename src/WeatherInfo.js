import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        {/* {weatherData.date.getDay()} */}
        <li>
          {" "}
          <FormattedDate date={props.data.date}></FormattedDate>
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src={props.data.iconUrl}
              alt={props.data.description}
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="tempeture">
                {" "}
                {Math.round(props.data.tempeture)}{" "}
              </span>
              <span className="unit">c</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipation:15%</li>
            <li>Humidity:{props.data.humidity}</li>
            <li>wind:{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}