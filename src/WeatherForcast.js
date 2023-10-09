import React, { useState, useEffect } from "react";
import "./WeatherForcast.css";
import axios from "axios";
import WeatherForcastDay from "./WeatherForcastDay";
export default function WeatherForcast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forcast, setForcast] = useState(null);
  useEffect(() => {
    //set loaded false
    setLoaded(false);
  }, [props.coordinets]);
  //if coordinents change
  function handleResponse(response) {
    // console.log(response.data + "kkk");
    setForcast(response.data.daily);
    setLoaded(true);
  }
  function load() {
    const apiKey = "62bc298785543e137bc6756e514eb1c3";
    let longitde = props.coordinets.lon;
    let latitude = props.coordinets.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitde}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    console.log(forcast);
    return (
      <div className="WeatherForcast">
        <div className="row mt-4">
          {forcast.map(function (dailyForcast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  {/* {index} */}
                  <WeatherForcastDay data={dailyForcast}></WeatherForcastDay>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
