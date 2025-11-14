import React from "react";
import daisyFlower from "../assets/daisy.png";
import LineSeparation from "./LineSeparation";
import SkillBox from "./SkillBox";
import Hobbies from "./Hobbies";

const AboutMe = () => {
  return (
    <div id="aboutMe" className="mb-16">
      <LineSeparation />
      <h1 className="font-unkempt text-sageGreen text-3xl font-bold py-6">
        ABOUT ME
      </h1>
      <p className="text-lg">
        I'm a Computer Engineering graduate who enjoys building things for the web and mobile. I enjoy working with React, React Native, and JavaScript in general.
      </p>

      {/* ed and skills */}

      <div className="flex sm:flex-row flex-col mt-20 " id="edandskills">
        {/* for education */}

        <div
          className="sm:w-1/2 sm:sticky sm:top-16 sm:h-[calc(100vh-4rem)] overflow-hidden z-60"
          id="education"
        >
          <h1 className="font-unkempt text-sageGreen text-3xl pt-4 pb-8">
            EDUCATION
          </h1>
          <ul className=" space-y-12 ">
            <li className="flex gap-2 items-center group">
              <img
                src={daisyFlower}
                className="w-11 group-hover:animate-spin "
              />
              <h3 className="mr-12 text-xl text-mutedBlush">2021-2025</h3>
              <div>
                <p className="text-sm">Bachelors in Computer Engineering</p>
                <p>Himalaya College of Engineering, Chyasal, Lalitpur</p>
              </div>
            </li>
            <li className="flex gap-2 items-center group">
              <img
                src={daisyFlower}
                className="w-11 group-hover:animate-spin"
              />
              <h3 className="mr-12 text-xl text-mutedBlush">2018-2020 </h3>
              <div>
                <p className="text-sm">Grade 11 & Grade 12</p>
                <p>Capital College and Research Center, Balkumari, Lalitpur</p>
              </div>
            </li>
            <li className="flex gap-2 items-center group">
              <img
                src={daisyFlower}
                className="w-11 group-hover:animate-spin"
              />
              <h3 className="mr-12 text-xl text-mutedBlush">2006-2018</h3>
              <div>
                <p className="text-sm">SEE</p>
                <p>
                  Pawan Prakriti English Secondary School, Tikathali, Lalitpur
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* skills */}
        <div className="sm:w-1/2 sm:my-6 sm:mt-0 mt-20" id="skills">
          {/* TECHNICAL SKILLS */}
          <div className="bg-sageGreen rounded-lg sm:px-6 px-2  pb-6 ">
            <h1 className="font-unkempt text-softCream text-3xl pt-4 pb-8">
              TECHNICAL SKILLS
            </h1>
            <div className="group grid grid-cols-2 lg:grid-cols-3 xs:grid-cols-2 gap-8">
              <SkillBox text="HTML" />
              <SkillBox text="CSS" />
              <SkillBox text="Javascript" />
              <SkillBox text="Typescript" />
              <SkillBox text="React Native" />
              <SkillBox text="MERN" />
              <SkillBox text="Firebase" />
              <SkillBox text="C, C++" />
              <SkillBox text="SQL" />
              <SkillBox text="Python" />
              <SkillBox text="Git" />
            </div>

            {/* design tools */}
            <div className="group">
              <h3 className="font-unkempt text-softCream text-3xl pt-10 pb-8">
                DESIGN TOOLS
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 xs:grid-cols-2 gap-8">
                <SkillBox text="Figma" />
                <SkillBox text="Canva" />
              </div>
            </div>

            {/* softskills */}
            <div className="group">
              <h3 className="font-unkempt text-softCream text-3xl pt-10 pb-8">
                SOFT SKILLS
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-3 xs:grid-cols-2 gap-5">
                <SkillBox text="Teamwork" bg="white" />
                <SkillBox text="Problem solving" bg="white" />
                <SkillBox text="Creativity" bg="white" />
                <SkillBox text="Leadership" bg="white" />
                <SkillBox text="Communication" bg="white" />
              </div>
            </div>

            {/* languages */}

            <div className="group">
              <h3 className="font-unkempt text-softCream text-3xl pt-10 pb-8">
                LANGUAGES
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-3 xs:grid-cols-2 gap-8">
                <SkillBox text="Nepali" bg="white" />
                <SkillBox text="English" bg="white" />
                <SkillBox text="Hindi" bg="white" />
              </div>
            </div>
          </div>

          <Hobbies />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
