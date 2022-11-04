import React from "react";
import DateAndLoc from "../../components/DateAndLoc";
import NavContainer from "../nav-container/NavContainer";
import WeatherContainer from "../weather-container/WeatherContainer";

const AppContainer = () => {
  return (
    <div className="font-exo flex h-screen flex-col items-center justify-evenly bg-gradient-to-br from-gray-800 to-black">
      <DateAndLoc />
      <WeatherContainer />
      <NavContainer/>
    </div>
  );
};

export default AppContainer;
