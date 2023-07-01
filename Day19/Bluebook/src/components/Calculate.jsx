import React from "react";

function Calculate({ charge }) {
  return (
    <div className="bg-pink-300 flex justify-center items-center text-black">
      {" "}
      <h1>Charge of the two wheeler is: {charge}</h1>
    </div>
  );
}

export default Calculate;
