import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8 today-weather">
          <WeatherIcon code={props.data.icon} size={40} />
          <span className="today-temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
          <span className="today-parameter">
            <ul>
              <li> Humidity: {props.data.humidity}% </li>
              <li> Wind: {props.data.wind} km/h </li>
              <li>
                Temperature-range: {props.data.temp_min}/{props.data.temp_max}
              </li>
            </ul>
          </span>
        </div>
        <div className="col-4">
          <h1>
            {props.data.city}, {props.data.country}
          </h1>
          <ul className="today-description">
            <li> {props.data.date} </li>
            <li>{props.data.description} </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default WeatherInfo;
