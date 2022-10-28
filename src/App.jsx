import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherContainer from "./layouts/weather-container/WeatherContainer";

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-gray-500">
      <h1 className="font-sans font-bold">CLIMAPP</h1>
      <p>Aplicacion para el cima en tu locacion.</p>
      <SearchBar />
      <WeatherContainer />
    </div>
  );
};

export default App;
