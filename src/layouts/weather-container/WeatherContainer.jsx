import React from "react";
import WeatherMain from "../../components/WeatherMain";
import WeatherStateCard from "../../components/WeatherStateCard";

const WeatherContainer = () => {
  return (
    <div className="flex h-1/3 w-3/4 flex-row items-center justify-evenly rounded-md bg-teal-300">
      <WeatherStateCard />
      <WeatherMain />
    </div>
  );
};

export default WeatherContainer;
