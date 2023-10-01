import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  // const [ready, setReady] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      tempeture: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
      description: response.data.weather[0].description,
      date: "wendsday 7:00",
    });
    // setReady(true);
  }
  if (weatherData.ready) {
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
        <h1>{weatherData.name}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              ></img>
              <div className="float-left">
                <span className="tempeture">
                  {" "}
                  {Math.round(weatherData.tempeture)}{" "}
                </span>
                <span className="unit">c</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipation:15%</li>
              <li>Humidity:{weatherData.humidity}</li>
              <li>wind:{weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "04bde8cc7f569f7c5603cdbc6deb89a3";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units="metric"`;
    axios.get(apiUrl).then(handleResponse);
    return "loading....";
  }
}
