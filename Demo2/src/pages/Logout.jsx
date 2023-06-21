import React from "react";
const Logout = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div></div>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
