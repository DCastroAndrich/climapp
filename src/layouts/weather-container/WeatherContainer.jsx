import React from "react";
import HourPrediction from "../../components/HourPrediction";
import TemperatureCard from "../../components/TemperatureCard";

const WeatherContainer = () => {
  return (
    <div className="w-3/4 flex h-fit flex-col items-center bg-transparent text-center">
      <TemperatureCard />
      <HourPrediction/>
    </div>
  );
};

export default WeatherContainer;
