import React from "react";
import License from "./License";

const Content = ({ title1, title2, title3 }) => {
  return (
    <div className="flex justify-between align-middle">
      {title1}
      {title2}
      {title3}
    </div>
  );
};

export default Content;
