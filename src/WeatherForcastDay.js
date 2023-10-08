import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForcastDay(props) {
  function maxTempeture() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }
  function minTempeture() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }
  function Day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForcast-day"> {Day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={36}></WeatherIcon>
      <div className="WeatherForcast-tempetures">
        <span className="WeatherForcast-tempetures-max"> {maxTempeture()}</span>
        <span className="WeatherForcast-tempetures-min">
          {" "}
          {minTempeture()}"
        </span>
      </div>
    </div>
  );
}
