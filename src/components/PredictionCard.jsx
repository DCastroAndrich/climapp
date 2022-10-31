import React from "react";

const PredictionCard = () => {
  return (
    <div className="mx-2 flex h-fit w-fit flex-col items-center justify-evenly rounded bg-gradient-to-b from-transparent to-slate-100">
      <p className="text-center text-lg text-slate-700">Lunes 31/10</p>
      <img
        src="https://cdn-icons-png.flaticon.com/512/5497/5497362.png"
        className="w-fit"
      />
      <p className="text-center text-sm text-slate-700">Min: 3°</p>
      <p className="text-center text-sm text-slate-700">Max: 16°</p>
    </div>
  );
};

export default PredictionCard;
