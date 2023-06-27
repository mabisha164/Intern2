import React from "react";

const BoxComponent = ({ icons, title, icon }) => {
  return (
    <div className="h-[60px] w-[420px] border-2 border-white rounded-[30px] text-center py-2 cursor-pointer hover:bg-white hover:text-black  align items-center justify-center ml-[5px]">
      <div className="flex justify-between mt-2 ">
        <div className="text-2xl ml-4 ">{icons}</div>
        <h5 className="">{title}</h5>
        <div className="text-lg mr-4">{icon}</div>
      </div>
      <br />
    </div>
  );
};

export default BoxComponent;
