import React from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-8 today-weather">
          <span className="mt-3">
            <WeatherIcon code={props.data.icon} size={62} />
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
          <span className="today-parameter">
            <ul>
              <li> Humidity: {props.data.humidity}% </li>
              <li> Wind: {props.data.wind} km/h </li>
            </ul>
          </span>
        </div>
        <div className="col-4 mt-3">
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
