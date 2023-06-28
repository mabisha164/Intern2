import React from "react";
import Content from "./Content";
import { NavLink } from "react-router-dom";

const License = () => {
  return (
    <div>
      <h1 className="text-3xl text-center mt-10">License Data</h1>
      <br />
      <br />
      <br />
      <div className="flex justify-around align-middle text-2xl">
        <NavLink
          to="/reference"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "",
          })}
        >
          <Content
            title1="Reference data"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "",
            })}
          />
        </NavLink>

        <NavLink
          to="/applicantid"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "",
          })}
        >
          <Content title2=" Applicant Id" />
        </NavLink>
        <NavLink
          to="/number"
          style={({ isActive }) => ({
            textDecoration: isActive ? "underline" : "",
          })}
        >
          <Content title3="License No" />
        </NavLink>
      </div>
    </div>
  );
};

export default License;
