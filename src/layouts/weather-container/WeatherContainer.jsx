import React from "react";
import TemperatureCard from "../../components/TemperatureCard";
import WeatherImage from "../../components/WeatherImage";

const WeatherContainer = () => {
  return (
    <div className="w3/4 flex h-fit flex-col items-center bg-transparent text-center">
      <TemperatureCard />
    </div>
  );
};

export default WeatherContainer;
