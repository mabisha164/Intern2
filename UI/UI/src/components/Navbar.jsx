import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex p-8 w-full  justify-between relative ">
        <div className="text-4xl font-bold ml-20 hover:bg-white hover:text-black rounded-lg">
          <NavLink to="/">NDLE</NavLink>
        </div>

        <div className="flex-1 ml-48 mt-2  ">
          <ul className="flex gap-[120px] ">
            <li className="  mr-[10px] ">
              <NavLink
                to="/home"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isPending ? "red" : "white",
                  };
                }}
              >
                Home
              </NavLink>
            </li>

            <li className=" mr-[10px">
              <NavLink
                to="/aboutus"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isPending ? "red" : "white",
                  };
                }}
              >
                About Us
              </NavLink>
            </li>

            <li className=" mr-[10px">
              <NavLink
                to="/contactus"
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isPending ? "red" : "white",
                  };
                }}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex ">
          <li>
            <NavLink to="/signin">
              <button className="bg-white text-black p-2 w-[100px] rounded-3xl mr-[230px] ">
                Sign in
              </button>
            </NavLink>
          </li>
        </div>
      </div>
    </>
  );
};

export default Navbar;
