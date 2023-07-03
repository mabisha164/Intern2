import React from "react";
import Chat from "./components/Chat";
import User from "./components/User";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Message from "./components/Message";
import { Route, Routes } from "react-router-dom";
// import "typeface-lato";

const App = () => {
  return (
    <div className="bg-sky-200 w-full font-lato ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
};

export default App;
