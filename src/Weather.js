import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForcast from "./WeatherForcast";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  // const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      coordinets: response.data.coord,
      ready: true,
      tempeture: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    // setReady(true);
  }
  //search for city
  function search() {
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              {" "}
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
        <WeatherInfo data={weatherData}></WeatherInfo>
        <WeatherForcast coordinets={weatherData.coordinets} />
      </div>
    );
  } else {
    search();
    return "loading....";
  }
}
