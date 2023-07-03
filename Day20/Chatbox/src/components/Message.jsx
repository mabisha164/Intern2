import React from "react";
import Navbar from "./Navbar";
import { AiOutlineDown } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
// import img5 from "../images/img5.png";
import img4 from "../images/img4.png";
import img6 from "../images/img6.png";

import Chat from "./Chat";

const Message = () => {
  return (
    <div className="">
      <div className="flex justify-center pt-10">
        <div className=" bg-white pt-10 rounded-3xl  ">
          <div className="p-6">
            <div className="flex gap-2">
              <div className="text-3xl font-bold">Messages</div>
              <div className="pt-3 ">
                <AiOutlineDown />
              </div>
              <div className="flex  items-center pl-60 p-2 text-2xl">
                <FiSearch />
              </div>
            </div>
            <div className="">
              <div className="text-gray-500 pt-6">Pinned</div>
              <div className="pt-4 flex relative gap-4">
                <img src={img1} className="w-16 h-16  rounded-full" />
                <div className="bg-green-400 w-3 h-3 absolute bottom-1 left-12 rounded-full"></div>
                <div className="">
                  <div className="text-xl font-bold">Robert Richards</div>
                  <div className="flex text-gray-500 gap-1 justify-center ">
                    Hello, tomorrow in 5 o'clock
                    <h2 className="text-sm text-gray-300  flex  items-center ">
                      . 5m
                    </h2>
                    <div className="w-6 h-6 flex ml-24 text-sm  justify-center items-center text-white rounded-full bg-blue-500">
                      2
                    </div>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="text-gray-500 pt-8">Other</div>
                <div>
                  <div className="pt-6 flex relative gap-4">
                    <div>
                      <img src={img6} className="w-14 h-14  rounded-full" />
                    </div>
                    <div className="">
                      <div className="text-xl font-bold">Connine Lane</div>
                      <div className="flex text-gray-500 gap-1 justify-center ">
                        Where are you?
                        <h2 className="text-sm text-gray-300  flex  items-center ">
                          .yesterday
                        </h2>
                        <div className="w-6 h-6 flex ml-[150px] text-sm  justify-center items-center text-white rounded-full bg-blue-500">
                          12
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>

                  <Chat
                    image={img3}
                    name="Wendy Watson"
                    message="We new to meet today."
                    time="12m"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Chat
                    image={img4}
                    name="Harold Howard"
                    message="Check mail,please."
                    time="1h"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Chat
                    image={img2}
                    name="Kathryn Alexander"
                    message="Alright, It fine."
                    time="yesterday"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Chat
                    image={img6}
                    name="Bernard Nguyen"
                    message="See you soon bye "
                    time="2d"
                  />
                  <div className="pt-4 pl-[70px]">
                    <hr />
                  </div>
                  <Chat
                    image={img1}
                    name="Nathan Fox"
                    message="Thank you so much."
                    time="4d"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
