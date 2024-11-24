import React from 'react'
import { IoMdMenu } from "react-icons/io";


const Navbar = () => {
  return (
    <nav className="bg-sageGreen px-6 py-4 flex justify-between  items-center text-softCream ">
      <h1 className="text-4xl font-unkempt">PORTFOLIO</h1>
      <ul className="gap-14 text-lg hidden sm:flex font-poppins">
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>
      <IoMdMenu className='sm:hidden'/>
    </nav>
  );
}

export default Navbar