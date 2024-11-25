import React from "react";
import myPhoto from "../assets/myPhoto.png";
import LineSeparation from "./LineSeparation";
import resume from "/resume.pdf";

const Hero = () => {
  return (
    <div className="pt-6 mb-16" id="hero">
      <LineSeparation />
      <div className=" flex sm:flex-row flex-col pt-6 items-center">
        <div className="relative sm:w-1/2 group">
          <div className="absolute bg-sageGreen inset-0 z-0 rounded-lg group-hover:scale-75 transition-transform duration-500"></div>
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
          <p className="sm:text-2xl text-xl  py-6">
            Computer Engineering Student | Aspiring Web Developer
          </p>
          <a
            href={resume}
            target="_blank"
            download="Prakritis_resume.pdf"
            className="text-center bg-softCream bg-opacity-80 shadow-[4px_4px_0px_#556B2F] rounded-full text-sm text-charcoalGrey px-4 py-2 font-medium hover:-translate-y-1 transition-transform duration-300 "
          >
            Download My CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
