import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("Celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("Fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("Celsius");
  }

  if (unit === "Celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="today-temperature">{props.celsius}</span>
        <span className="unit">
          <a href="/">°C|</a>
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let Fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="today-temperature">{Math.round(Fahrenheit)}</span>
        <span className="unit">
          °
          <a href="/" onClick={showCelsius}>
            C|
          </a>
          °<a href="/">F</a>
        </span>
      </span>
    );
  }
}
export default WeatherTemperature;
