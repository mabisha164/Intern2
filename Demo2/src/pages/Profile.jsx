import React, { useState, useEffect } from "react";
import useCurrentUser from "./useCurrentUser";

const Profile = () => {
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });
  const { id } = useCurrentUser();
  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `https://rest-api-bjno.onrender.com/id/${id}`,
          {
            method: "GET",
          }
        );
        const value = await response.json();
        setData(value);
      } catch (err) {
        console.log("Error", err);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <br />
      {/* <header>
        <nav>
          <ul>
            <li style={{ color: "black" }}>
              <Link to="/" style={{ color: "white" }}>
                Home
              </Link>
            </li>
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
            <li>
              <Link to="/logout" style={{ color: "white" }}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </header> */}

      <p>
        <h3 style={{ color: "green" }}>FirstName: {data.firstName}</h3>
      </p>
      <br />
      <p>
        <h3 style={{ color: "green" }}>LastName: {data.lastName}</h3>
      </p>
      <br />
      <p>
        <h3 style={{ color: "green" }}>email: {data.email}</h3>
      </p>
    </div>
    //   </div>
  );
};
export default Profile;
