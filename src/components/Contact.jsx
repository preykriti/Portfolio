import React from 'react'
import LineSeparation from './LineSeparation'
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";


const Contact = () => {
  return (
    <div id="contact" className="mb-8">
      <LineSeparation />
      <h1 className="font-unkempt text-sageGreen text-3xl py-6 font-bold">
        CONTACT
      </h1>
      <div className="flex items-center gap-6 mb-4 cursor-pointer">
        <div className="flex justify-center items-center w-11 h-11 bg-softCream rounded-full shadow-[4px_4px_0px_#4A5845]">
          <MdOutlineMail className="text-2xl text-oliveGreen" />
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=prakriteeshrestha3@gmail.com"
          target="blank"
        >
          prakriteeshrestha3@gmail.com
        </a>
      </div>
      <div className="flex items-center mb-4 gap-6">
        <div className="flex justify-center items-center w-11 h-11 bg-softCream rounded-full shadow-[4px_4px_0px_#4A5845]">
          <MdOutlinePhone className="text-2xl text-oliveGreen" />
        </div>
        <p>+977 1234567890</p>
      </div>

      <div className="flex items-center mb-4 gap-6">
        <div className="flex justify-center items-center w-11 h-11 bg-softCream rounded-full shadow-[4px_4px_0px_#4A5845]">
          <FaLinkedinIn className="text-2xl text-oliveGreen" />
        </div>
        <p>Linked In</p>
      </div>

      <div className="flex items-center mb-4 gap-6">
        <div className="flex justify-center items-center w-11 h-11 bg-softCream rounded-full shadow-[4px_4px_0px_#4A5845]">
          <FiGithub className="text-2xl text-oliveGreen" />
        </div>
        <p>GitHub</p>
      </div>
    </div>
  );
}

export default Contact