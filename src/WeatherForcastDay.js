import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForcastDay(props) {
  let day = new Date(props.data.dt * 1000);

  return (
    <div className="WeatherForcastDay">
      <div className="WeatherForcast-days">
        {day.toLocaleDateString("en-Us", { weekday: "short" })}
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={45} />
      <br />
      <span className="WeatherForcast-temp-max">
        {Math.round(props.data.temp.max)}°
      </span>{" "}
      <span className="WeatherForcast-temp-min">
        {Math.round(props.data.temp.min)}°
      </span>
    </div>
  );
}
export default WeatherForcastDay;
