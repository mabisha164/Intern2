import React from "react";
import ChatBox from "./Chatbox";

const User = ({ image, username, message }) => {
  // const Images = [{ img1, img2, img3, img4 }];
  return (
    <div>
      {/* <div>
        <div className="">
          <img className="w-20 h-20 rounded-full" src={image} />
        </div>
      </div> */}
      <div className=" mt-8 ">
        <div>
          <div className="flex ">
            <img
              className="bg-gray-100 w-20 h-20 rounded-full"
              src={image}
              alt={username}
            />
            <div className="ml-10">
              <div className="text-2xl">{username}</div>
              <div className="text-s text-gray-500">{message.text}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
