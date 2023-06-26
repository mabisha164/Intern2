import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const history = useHistory();
  // const handleLogin = () => {
  //   history.push("/login");
  // };
  return (
    <>
      <div className="bg-red-200 py-5 text-2xl flex justify-around cursor-pointer shadow-md rounded-lg">
        <b className=" text-white">E-COMMERCE SITE</b>

        <div className=" text-green-500 ">
          <ul className="flex mt-2 justify-center gap-10">
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>

            <li>
              <NavLink to="/products">PRODUCTS</NavLink>
            </li>
            {/* <li>
              <NavLink to="/listitem">LISTITEM</NavLink>
            </li> */}
            <li>
              <NavLink to="/cart">CART</NavLink>
            </li>
            {/* <li>
              <NavLink to="/login">
                {" "}
                <button type="button" onClick={handleLogin}>
                  Login
                </button>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
