import React from "react";
import License from "./License";
import Search from "./Search";

const Number = () => {
  return (
    <div>
      <License />
      <Search
        title="Search Data Using License No"
        input={
          <input
            type="name"
            className="w-[400px] h-[60px] text-center p-3 text-black text-xl rounded-2xl mt-2"
            placeholder=" Enter License Number"
          />
        }
        searchIcon={true}
      />
    </div>
  );
};

export default Number;
