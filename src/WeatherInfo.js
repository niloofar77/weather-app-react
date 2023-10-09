import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempeture from "./WeatherTempeture";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          {" "}
          <FormattedDate date={props.data.date}></FormattedDate>
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div className="float-left">
              {" "}
              <WeatherIcon size={52} code={props.data.icon}></WeatherIcon>
            </div>

            <div className="float-left">
              <WeatherTempeture
                celsius={props.data.tempeture}
              ></WeatherTempeture>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="humidity">
              Humidity:{props.data.humidity}
              <span className="wind">%</span>
            </li>
            <li>
              wind:{props.data.wind}
              <span>km/h</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
