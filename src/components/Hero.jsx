import React from "react";
import myPhoto from "../assets/myPhoto.png";
import LineSeparation from "./LineSeparation";

const Hero = () => {
  return (
    <div className="py-6">
      <LineSeparation/>
      <div className=" flex sm:flex-row flex-col pt-6 items-center">
        <div className="relative sm:w-1/2 group">
          <div className="absolute bg-sageGreen inset-0 z-0 rounded-lg group-hover:scale-90 transition-transform duration-500"></div>
          <img
            src={myPhoto}
            alt="photo"
            className=" relative z-10 w-2/3 m-auto group-hover:scale-105 transition-transform duration-500"
          ></img>
        </div>

        <div className="text-sageGreen py-3 text-center sm:w-1/2">
          <p className="py-6 text-xl">Hi, I'm</p>
          <h1 className="font-unkempt text-6xl text-softCream">
            Prakriti Shrestha
          </h1>
          <p className="text-3xl py-6">Computer Engineering Student</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
