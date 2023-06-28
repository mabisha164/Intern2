import React from "react";
import License from "./License";
import Search from "./Search";

const Applicant = () => {
  return (
    <div>
      <License />
      <Search
        title="Search Data Using Applicant ID"
        input={
          <input
            type="name"
            className="w-[400px] h-[60px] text-center p-3 text-black text-xl rounded-2xl mt-3"
            placeholder="    Enter applicant id"
          />
        }
        searchIcon={true}
      />
    </div>
  );
};
export default Applicant;
