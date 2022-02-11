import React, { useState, useEffect } from "react";
import WeatherForcastDay from "./WeatherForcastDay";
import "./WeatherForcast.css";
import axios from "axios";

function WeatherForcast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forcast, setForcast] = useState(null);

  function handleResponse(response) {
    setForcast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinate]);

  if (loaded) {
    return (
      <div className="WeatherForcast">
        <div className="row">
          {forcast.map(function (dailyForcast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForcastDay data={dailyForcast} />
                </div>
              );
            } else return null;
          })}
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinate.lat;
    let longitude = props.coordinate.lon;
    const apiKey = "7e62f7501b593a16608f7f0c6a1d755f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

export default WeatherForcast;
