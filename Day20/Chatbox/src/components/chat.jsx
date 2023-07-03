import React from "react";

const Chat = ({ image, name, message, time }) => {
  return (
    <div>
      <div className="pt-4 flex relative gap-4">
        <img src={image} className="w-14 h-14  rounded-full" />

        <div className="">
          <div className="text-xl font-bold">{name}</div>
          <div className="flex text-gray-500 gap-1 justify-center ">
            {message}
            <h2 className="text-sm text-gray-300  flex  items-center ">
              {time}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
