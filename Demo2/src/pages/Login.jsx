import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCurrentUser from "./useCurrentUser";
const Login = (props) => {
  const initalValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initalValues);
  const [formError, setFormError] = useState({});
  const [submit, setSubmit] = useState(false);
  const { getId } = useCurrentUser;
  console.log(getId);
  // const [registeredData, setRegisteredData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    setFormError(validate(formValues));
    setSubmit(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && submit) {
      console.log(formValues);
    }
  }, [formError]);
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 character";
    }
    return errors;
  };

  const onLogin = async (e) => {
    e.preventDefault();
    const response = await fetch("https://rest-api-bjno.onrender.com/login", {
      method: "POST",
      body: JSON.stringify(formValues),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data) {
      alert(data.message);
    }
    // .then((response) => response.json())
    // .then((data) => {
    console.log(data);
    localStorage.setItem("message", data.message);
    localStorage.setItem("id", data.data._id);
    localStorage.setItem("email", data.data.email);
  };
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  return (
    <>
      <div className="First">
        <div className="mainc">
          <div className="names">
            <h1>LOGIN PAGE</h1>
          </div>
          <header>
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
                  <Link to="/profile" style={{ color: "white" }}>
                    {" "}
                    Profile
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
          </header>
        </div>
        <div className="main">
          <form onSubmit={onLogin}>
            <div className="container1">
              {Object.keys(formError).length === 0 && submit ? (
                <div className="ui message success">Signed in successfully</div>
              ) : (
                <pre></pre>
              )}
              <div className="form-box">
                <div className="text">
                  <h4>Chatapp</h4>
                  <p>Login to your account</p>
                </div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    className="email"
                    placeholder="       Email"
                    onChange={handleChange}
                    values={formValues.email}
                  />
                  <br />
                  <br />
                  <span>{formError.email}</span>
                  <br />
                  <input
                    type="password"
                    name="password"
                    className="password"
                    placeholder="   *******"
                    onChange={handleChange}
                    values={formValues.password}
                  />
                  <br />
                  <br />
                  <span>{formError.password}</span>
                </div>
                <div className="remember">
                  <input type="checkbox" className="check"></input> Remember me
                  <p>
                    <a href="#">Forget password?</a>
                  </p>
                </div>
                <div className="btn">
                  <button className="login">Login</button>
                  <p>
                    Don't have an account{" "}
                    <button
                      type="button"
                      onClick={() => props.onFormSwitch("register")}
                    >
                      {" "}
                      Sign Up
                    </button>
                    {/* <button className="logout" onClick={handleLogout}>
                      Logout
                    </button> */}
                  </p>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
