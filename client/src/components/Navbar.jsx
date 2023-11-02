import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" max-w-full border-b-2 shadow mb-10 ">
      <div className=" max-w-[1280px] mx-auto flex justify-between py-5  ">
        <Link to={"/"}>
          <h1 className="text-xl font-semibold ">Logo</h1>
        </Link>
        <div className="text-xl">
          <ul className="flex justify-between gap-10">
            <Link to={"/"}>Home</Link>
            <Link to={"/create"}>Create</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
