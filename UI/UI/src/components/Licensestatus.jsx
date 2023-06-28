import React from "react";
import { FaSearch } from "react-icons/fa";

const Licensestatus = () => {
  return (
    <div>
      <h1 className="text-4xl ml-[90px] mt-[80px]">License Status</h1>
      <div className="text-center mt-[50px]">
        <h1 className="text-2xl mb-2">DOTM Web Service</h1>
        <p>Smart License Printed Detail Status</p>
        <h2 className="text-xl mt-2">Enter Smart License NO (Status)</h2>

        <div className="relative">
          <input
            type="name"
            className="w-[400px] h-[50px] text-center p-3 text-black text-xl rounded-2xl mt-2"
            placeholder="Enter License Number"
          />
          <FaSearch className="absolute top-[50%] left-4 ml-[700px] mt-2 transform -translate-y-1/2 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Licensestatus;
