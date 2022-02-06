import React, { useState } from "react";
import "./weather.css";
import axios from "axios";

function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    const today = new Date(response.data.dt * 1000);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: today.toLocaleDateString("en-Us", {
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
      }),
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function search() {
    const apiKey = "7e62f7501b593a16608f7f0c6a1d755f";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  className="form-control"
                  autoFocus="on"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6 today-weather">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt={weatherData.description}
              />
              <span className="today-temperature">
                {weatherData.temperature}
              </span>
              <span className="unit">°C</span>
              <div className="today-parameter">
                <ul>
                  <li> Precipitation: precipitation% </li>
                  <li> Humidity: {weatherData.humidity}% </li>
                  <li> Wind: {weatherData.wind} mph </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <h1>
                {weatherData.city}, {weatherData.country}
              </h1>
              <ul className="today-description">
                <li> {weatherData.date} </li>
                <li>{weatherData.description} </li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <p>
            This project was coded by <a href="">Huong Nguyen </a>
            and is <a href="">open-sourced on GitHub</a>
          </p>
        </footer>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

export default Weather;
