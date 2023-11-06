import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <div className="border-b border-black">
      <div className="bg-black  flex justify-between items-center p-4">
        <Link to="/">
          {" "}
          {/* Use Link to navigate */}
          <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </h1>
        </Link>
        <div>
          <button className="text-white pr-4">Sign In</button>
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
