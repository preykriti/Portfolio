import React from "react";
import daisyFlower from "../assets/daisy.png";
import LineSeparation from "./LineSeparation";

const AboutMe = () => {
  return (
    <div>
      <LineSeparation />

      <h1 className="font-unkempt text-softCream text-3xl font-bold py-6">
        ABOUT ME
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        fugit deserunt, ipsam possimus iste rem debitis aliquid praesentium
        ducimus, ipsum omnis veritatis! Illo adipisci quos ducimus reprehenderit
        distinctio commodi, magnam eaque et laborum, ullam nulla excepturi? Est
        labore numquam quibusdam sit ratione aperiam perferendis explicabo sint
        temporibus, laborum quo error impedit sunt sed accusantium aut neque
        illo dicta saepe eum.
      </p>

      {/* ed and skills */}

      <div className="flex sm:flex-row flex-col my-6">
        {/* for education */}

        <div className="sm:w-1/2">
          <h1 className="font-unkempt text-sageGreen text-3xl">EDUCATION</h1>
          <ul className="py-3 space-y-8">
            <li className="flex gap-2 items-center">
              <img src={daisyFlower} className="w-11" />
              <h3 className="mr-6">2021-Present</h3>
              <div>
                <p>Bachelor in Computer Engineering</p>
                <p>Himalaya College of Engineering, Chyasal, Lalitpur</p>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <img src={daisyFlower} className="w-11" />
              <h3 className="mr-11">2018-2020</h3>
              <div>
                <p>
                  Grade 11 GPA – 3.31 Grade 12 GPA – 3.50 Aggregate GPA – 3.41
                </p>
                <p>Capital College and Research Center, Balkumari, Lalitpur</p>
              </div>
            </li>
            <li className="flex gap-2 items-center">
              <img src={daisyFlower} className="w-11" />
              <h3 className="mr-11">2006-2018</h3>
              <div>
                <p>SEE GPA – 3.86 </p>
                <p>
                  Pawan Prakriti English Secondary School, Tikathali, Lalitpur
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* for skills */}
        <div className="bg-sageGreen rounded-lg sm:w-1/2">
          <h1 className="font-unkempt text-backgroundColor text-3xl ">
            SKILLS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
