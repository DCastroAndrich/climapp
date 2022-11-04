import React from "react";

const HourPrediction = () => {
  return (
    <section className="my-8 flex w-ful flex-row">
      <div className="m-4  flex w-1/3 flex-col items-center justify-between">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2580/2580704.png"
          className="my-4 drop-shadow-gold"
        />

        <p className="my-2 text-xs text-white">08:00</p>
        <h4 className="text-2xl text-white">16°</h4>
      </div>
      <div className="m-4  flex w-1/3 flex-col items-center justify-between">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2580/2580709.png"
          className="my-4 drop-shadow-gold"
        />

        <p className="my-2 text-xs text-white">13:00</p>
        <h4 className="text-2xl text-white">25°</h4>
      </div>
      <div className="m-4  flex w-1/3 flex-col items-center justify-between">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2580/2580661.png"
          className="my-4 drop-shadow-moon"
        />

        <p className="my-2 text-xs text-white">19:00</p>
        <h4 className="text-2xl text-white">18°</h4>
      </div>
    </section>
  );
};

export default HourPrediction;
