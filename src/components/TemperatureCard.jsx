import React from "react";

const TemperatureCard = () => {
  return (
    <section className="flex flex-col items-center justify-between">

      
        <img
          src="https://cdn-icons-png.flaticon.com/512/2570/2570483.png"
          className="w-2/4 drop-shadow-gold"
        />
        <h3 className="text-2xl text-white">Soleado</h3>

      <p className="mt-10 text-8xl text-yellow-200">25°</p>
    </section>
  );
};

export default TemperatureCard;
