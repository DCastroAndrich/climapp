import React from "react";
import Nav from "../../components/Nav";

const NavContainer = () => {
  return (
    <div className="flex h-8 w-2/4 flex-row items-center justify-evenly bg-gradient-to-t from-transparent to-black rounded">
      <Nav />
    </div>
  );
};

export default NavContainer;
