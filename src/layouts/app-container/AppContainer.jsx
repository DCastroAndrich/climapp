import React from "react";
import DateAndLoc from "../../components/DateAndLoc";
import NavContainer from "../nav-container/NavContainer";
import PredictionContainer from "../prediction-container/PredictionContainer";
import WeatherContainer from "../weather-container/WeatherContainer";

const AppContainer = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-evenly rounded bg-gradient-to-br from-purple-300 to-fuchsia-500">
      <DateAndLoc />
      <WeatherContainer />
      <PredictionContainer />
      <NavContainer />
    </div>
  );
};

export default AppContainer;
