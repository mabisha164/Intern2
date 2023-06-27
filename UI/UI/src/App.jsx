import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-black w-full h-screen text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
          <Routes>
            <Route path="/home" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
