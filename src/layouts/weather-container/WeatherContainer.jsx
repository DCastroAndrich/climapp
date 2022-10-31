import React from "react";
import Temperature from "../../components/Temperature";
import WeatherImage from "../../components/WeatherImage";

const WeatherContainer = () => {
  return (
    <div className="w3/4 flex h-fit flex-col items-center bg-transparent text-center">
      <WeatherImage />
      <Temperature />
    </div>
  );
};

export default WeatherContainer;
