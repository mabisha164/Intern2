import React from "react";
// import { FontAwesomeIcon } from "react-icons/fa";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FaSearch } from "react-icons/fa";
const Search = ({ title, input, searchIcon }) => {
  return (
    <div className="text-center text-2xl mt-[130px]">
      <h1>{title}</h1>
      <div className="relative">
        <div>{input}</div>
        {searchIcon && (
          <FaSearch
            icon={FaSearch}
            className="absolute top-1/2 left-9 ml-[670px] mt-2 transform -translate-y-1/2 text-black"
          />
        )}
      </div>
    </div>
  );
};

export default Search;
