import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="max-w-[1280px] mx-auto">
      <h1>Sorry No Such Page</h1>
      <Link to={"/"}>
        {" "}
        <button className="border p-3 hover:border-opacity-0 mt-5 border-black hover:bg-green-500 hover:text-white transition-all duration-300">
          Go To Home
        </button>
      </Link>
    </div>
  );
};

export default Errorpage;
