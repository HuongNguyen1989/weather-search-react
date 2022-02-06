import React from "react";
import "./weather.css";

function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
            alt="clear with perodic clouds"
          />
          <h1>22oC</h1>
          <ul>
            <li> precipitation: 0% </li>
            <li> Humidity: 53% </li>
            <li> Wind: 5 mph </li>
          </ul>
        </div>
        <div className="col-6">
          <h1>New York, NY, USA</h1>
          <ul>
            <li>Saturday 21:00 </li>
            <li>Clear with periodic clounds </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Weather;
