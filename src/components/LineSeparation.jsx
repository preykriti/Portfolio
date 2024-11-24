import React from "react";
import daisyFlower from "../assets/daisy.png";

const LineSeparation = () => {
  return (
    <div className="flex items-center">
      <hr className="h-1 flex-grow bg-sageGreen rounded-lg" />
      <img src={daisyFlower} alt="" className="w-11"></img>
      <hr className="h-1 flex-grow bg-sageGreen rounded-lg" />
    </div>
  );
};

export default LineSeparation;
