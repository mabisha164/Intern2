import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contactus from "./components/Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Signin from "./components/signin";
import License from "./components/License";
import Licensestatus from "./components/Licensestatus";
import Reference from "./components/Reference";
import Applicant from "./components/Applicant";
import Number from "./components/Number";
import Search from "./components/Search";
import Online from "./components/Online";
// import Navbar2 from "./components/Navbar2";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-black w-full h-[120vh] text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/license" element={<License />} />
            <Route path="/online" element={<Online />} />
            <Route path="/licensestatus" element={<Licensestatus />} />
            <Route path="/reference" element={<Reference />} />
            <Route path="/applicantid" element={<Applicant />} />
            <Route path="/number" element={<Number />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
