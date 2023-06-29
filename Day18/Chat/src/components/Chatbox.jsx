import React from "react";
import User from "./User";
import img1 from "../Images/img1.png";
import img2 from "../Images/img2.png";
import img3 from "../Images/img3.png";
import img4 from "../Images/img4.png";

import img8 from "../Images/img8.png";

const ChatBox = () => {
  const users = [
    {
      id: 1,
      username: "Azar Hosseini",
      message: {
        text: "Hey, how are you?",
      },
      image: img1,
    },
    {
      id: 2,
      username: "Phet Putrie",
      message: {
        text: "Thitiwat shimma",
      },
      image: img2,
    },

    {
      id: 2,
      username: "Kay Totleben",
      message: {
        text: "Brijamohan Mallick",
      },
      image: img3,
    },
    {
      id: 2,
      username: "Brijamohan Mallick",
      message: {
        text: "Indu Chakarvarti",
      },
      image: img4,
    },
    {
      id: 2,
      username: "Miriam de Jesus",
      message: {
        text: "Indu Chakarvarti",
      },
      image: img8,
    },
  ];

  return (
    <div className="w-full sm:w-[560px] h-[950px] bg-blue-600  ml-auto mr-auto text-black border-[2px] border-white rounded-3xl">
      <h1 className="ml-4 mt-4 text-xl font-bold text-white">4:21</h1>
      <div>
        <h1 className="text-4xl font-bold p-4 mt-10 text-white ">Chats</h1>
        <div className="w-full sm:w-[560px] h-[790px] bg-gray-100 rounded-3xl ml-auto mr-auto ">
          <div className="bg-white h-[190px] rounded-2xl">
            <div className="ml-2  flex justify-around ">
              <div className="text-[60px] h-[90px] w-[90px] rounded-full border-black border-2 border-dashed  flex justify-center mt-8">
                {" "}
                +
              </div>
              <div className="flex">
                <img
                  className="h-[90px] w-[90px] rounded-full ml-4 mt-8"
                  src={img1}
                />
                <img
                  className="h-[90px] w-[90px] rounded-full ml-4 mt-8"
                  src={img2}
                />
                <img
                  className="h-[90px] w-[90px] rounded-full ml-4 mt-8"
                  src={img3}
                />
                <img
                  className="h-[90px] w-[90px] rounded-full  ml-4 mt-8"
                  src={img4}
                />
                {/* {users.map((user) => {
                  <User key={user.id} image={user.image} />;
                })} */}
              </div>

              <br />
            </div>
            <ul className="flex gap-8 sam:gap-16 sm:ml-10 text-2xl mt-4 ml-auto mr-auto">
              <li>All</li>
              <li className="text-gray-500">Family</li>
              <li className="text-gray-500">Buddies</li>
            </ul>
          </div>
          <div>
            {users.map((user) => (
              <User
                key={user.id}
                image={user.image}
                username={user.username}
                message={user.message}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    // //{" "}
    // </div>
    //{" "}
    // </div>
  );
};

export default ChatBox;
