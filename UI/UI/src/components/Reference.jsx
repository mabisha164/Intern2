import React from "react";
import License from "./License";
import Search from "./Search";
const Reference = () => {
  return (
    <div>
      <License />

      <Search
        title="Search Data Using referenceNo"
        input={
          <input
            type="name"
            className="w-[400px] h-[60px] text-center p-3 text-black text-xl rounded-2xl mt-2"
            placeholder="Enter reference Number"
          />
        }
        searchIcon={true}
      />
    </div>
  );
};

export default Reference;
