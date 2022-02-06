import React from "react";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 today-weather">
          <img
            src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
            alt={props.data.description}
          />
          <span className="today-temperature">{props.data.temperature}</span>
          <span className="unit">°C</span>
          <div className="today-parameter">
            <ul>
              <li> Precipitation: precipitation% </li>
              <li> Humidity: {props.data.humidity}% </li>
              <li> Wind: {props.data.wind} mph </li>
            </ul>
          </div>
        </div>
        <div className="col-6">
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
