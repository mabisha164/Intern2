import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Signin from "./components/signin";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-black w-full h-[180vh] text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
