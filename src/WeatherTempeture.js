import React from "react";
import { useState } from "react";
export default function WeatherTempeture(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  const [unit, setUnit] = useState("celsius");
  return (
    <div className="WeatherTempeture">
      <span className="tempeture"> {Math.round(props.celsius)} </span>
      <span className="unit">
        c
        {/* <a href="/" onClick={showFahrenheit}>
            F
          </a> */}
      </span>
    </div>
  );
  // if (unit === "celsius") {

  // }
  // } else {
  //   let fahrenheit = (props.celsius * 9) / 5 + 32;
  //   return (
  //     <div className="WeatherTempeture">
  //       <span className="tempeture"> {Math.round(fahrenheit)} </span>
  //       <span className="unit">
  //         <a href="/" onClick={showCelsius}>
  //           c|
  //         </a>
  //         F
  //       </span>
  //     </div>
  //   );
  // }
}
