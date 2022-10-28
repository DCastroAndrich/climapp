import React from "react";

const WeatherMain = () => {
  return (
    <div className="flex w-2/3 flex-col items-center justify-around rounded-md bg-slate-400">
      <div>
        <h2>BUENOS AIRES</h2>
        <p>28/10/2022 --- 15:57</p>
      </div>
      <div>
        <h2>33 °C</h2>
      </div>
      <div className="flex w-2/3 flex-row items-center justify-around">
        <p>Sensacion termica: 50°C</p>
        <p>Humedad: 30%</p>
        <p>Viento: NO 10 km/h</p>
      </div>
    </div>
  );
};

export default WeatherMain;
