import React from "react";

const BoxComponent = ({ icons, title, icon }) => {
  return (
    <div className="h-[50px] w-[350px] border-2 border-white rounded-[30px] text-center py-2 cursor-pointer hover:bg-white hover:text-black items-center justify-between ml-[10px]">
      <div className="flex justify-center items-center">
        <div className="text-2xl">{icons}</div>
        <br />
        <p>{title}</p>
        <div className="ml-[120px] text-lg">{icon}</div>
      </div>
      <br />
    </div>
  );
};

export default BoxComponent;
