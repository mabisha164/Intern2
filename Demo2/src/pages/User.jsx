import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://rest-api-bjno.onrender.com/users").then((result) => {
      result.json().then((resp) => {
        setData(resp);
      });
    });
  }, []);
  console.log(data);
  return (
    <div className="list">
      <div className="names1">
        <h2>USERS</h2>
      </div>
      <br />

      <header className="header">
        <nav>
          <ul>
            <li style={{ color: "black" }}>
              <Link to="/register" style={{ color: "white" }}>
                Register
              </Link>
            </li>
            <li style={{ color: "black" }}>
              <Link to="/login" style={{ color: "white" }}>
                {" "}
                Login
              </Link>
            </li>
            <li style={{ color: "black" }}>
              <Link to="/users" style={{ color: "white" }}>
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <h2 style={{ color: "black" }}>List for all register users</h2>
      <div className="table">
        <table>
          <tr>
            <td style={{ color: "black" }}>FirstName</td>
            <td style={{ color: "black" }}>LastName</td>
            <td style={{ color: "black" }}>Email</td>
          </tr>
          {data.map((datas) => (
            <tr>
              <td style={{ color: "black" }}>{datas.firstName}</td>
              <td style={{ color: "black" }}>{datas.lastName}</td>
              <td style={{ color: "black" }}>{datas.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default Users;
