import React, { useState } from "react";
// import Messenger from "./components/Messenger";
import ChatBox from "./components/Chatbox";
// import ChatMessage from "./components/Chatbox";
import User from "./components/User";

const App = () => {
  return (
    <>
      <div className="bg-black text-white w-full h-screen">
        <ChatBox />
      </div>
    </>
  );
};

export default App;
