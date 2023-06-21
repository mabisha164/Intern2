// import { useState } from "react";
import React from "react";
// import Navbar from ".";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/User";
import Logout from "./pages/Logout";
import { Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile";
// import useCurrentUser from "./pages/useCurrentUser";

// import "./App.css";
// import Login from "./Components/Login";

// import Register from "./Components/Register";

// function App() {
//   const [currentForm, setCurrentForm] = useState("login");
//   const toggleForm = (formName) => {
//     setCurrentForm(formName);
//   };
// function App() {
// let Component;
// switch (window.location.pathname) {
//   case "/":
//     Component = <Signup />
//     break
//   case "/login":
//     Component = <Login />
//     break
//   case "/user":
//     Component = <User />
//     break
// }

{
  /* {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )} */
}
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<Users />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
