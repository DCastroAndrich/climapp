import React from "react";
import PredictionCard from "../../components/PredictionCard";

const PredictionContainer = () => {
  return (
    <div className="flex h-fit w-3/4 flex-row items-center justify-evenly rounded ">
      <PredictionCard />
      <PredictionCard />
      <PredictionCard />
      <PredictionCard />
      <PredictionCard />
    </div>
  );
};

export default PredictionContainer;
