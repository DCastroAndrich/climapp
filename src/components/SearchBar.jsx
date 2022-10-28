import React from "react";
import { UilSearch, UilLocationPinAlt } from "@iconscout/react-unicons";

const SearchBar = () => {
  return (
    <div className="h1/3 my-4 flex w-3/4 flex-row justify-center rounded-md bg-teal-300 py-6">
      <div className="flex w-full flex-row items-center justify-center bg-transparent ">
        <input
          type="text"
          className="mx-3 w-full rounded-xl p-2 font-mono text-xl font-bold capitalize shadow-xl focus:outline-none"
          placeholder="Choose a city..."
        />
        <UilSearch
          size={30}
          className="mx-4 cursor-pointer text-xl text-green-600 transition ease-in-out hover:scale-150"
        />
        <UilLocationPinAlt
          size={30}
          className="mx-4 cursor-pointer text-xl text-green-600 transition ease-in-out hover:scale-150"
        />
      </div>
    </div>
  );
};

export default SearchBar;
