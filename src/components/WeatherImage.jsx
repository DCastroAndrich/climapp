import React from "react";

const WeatherImage = () => {
  return (
    <>
      <img
        src="https://cdn-icons-png.flaticon.com/512/4470/4470693.png"
        className="w-1/4"
      />
      <h3 className=" font-mono text-2xl text-yellow-100">Soleado</h3>
      <div className="flex flex-row w-2/4 justify-around items-center">
        <div></div>
        <div></div>

      </div>
    </>
  );
};

export default WeatherImage;
