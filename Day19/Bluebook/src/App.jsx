import React from "react";
import Bluebook from "./components/Bluebook";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calculate from "./components/Calculate";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black w-full h-screen">
        <Bluebook />
        <Routes>
          <Route path="/" element={<Bluebook />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route
            path="/calculate"
            element={<Calculate charge={window.history.state.charge} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
