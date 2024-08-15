import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Browse = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      Browseeeee
      {/* <button onClick={handleButtonClick}>ABC </button> */}
    </div>
  );
};

export default Browse;
