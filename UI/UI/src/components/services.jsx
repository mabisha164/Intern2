import React from "react";

const Services = ({ icon, title }) => {
  return (
    <div className="pl-20 mt-8">
      <div className="bg-gradient-to-t from-purple-400 via-dark-300 to-indigo-300 cursor-pointer shadow-2xl rounded-3xl w-[200px] h-[180px] ">
        <div className="text-6xl flex pt-8 text-black justify-center ">
          {icon}
        </div>
        <div className="text-black text-2xl flex justify-center font-bold">
          {title}
        </div>
      </div>
    </div>
  );
};

export default Services;
