import React from "react";

const TemperatureCard = () => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4470/4470693.png"
        className="w-1/4"
      />
      <h3 className=" font-mono text-2xl text-yellow-100">Soleado</h3>
      <div className="flex w-2/4 flex-row items-center justify-around"></div>
      <p className="font-mono text-4xl text-yellow-200">25°</p>
      <div className="my-8 p-8 rounded-lg grid grid-cols-2 grid-rows-2 bg-yellow-500 justify-center justify-items-center gap-4">
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-slate-200">
          <p className="text-red-500">Sens. Térmica: </p>
          <p className="text-red-500">30°</p>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center rounded-md bg-slate-200">
          <p className="text-red-500">Humedad:</p>
          <p className="text-red-500">30%</p>
        </div>
        <div className=" flex h-full w-full flex-col items-center justify-center rounded-md bg-slate-200">
          <p className="text-red-500">Vel. Viento:</p>
          <p className="text-red-500">SO 5km/h</p>
        </div>
        <div className=" flex h-full w-full flex-col items-center justify-center rounded-md bg-slate-200">
          <p className="text-red-500">Vel. Viento:</p>
          <p className="text-red-500">SO 5km/h</p>
        </div>
      </div>
    </div>
  );
};

export default TemperatureCard;
