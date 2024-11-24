import React from 'react'
import { IoMdMenu } from "react-icons/io";
import{Link} from "react-scroll"


const Navbar = () => {
  return (
    <nav className="bg-sageGreen h-16 px-4 flex justify-between  items-center text-softCream ">
      <h1 className="text-4xl font-unkempt">PORTFOLIO</h1>
      <ul className="gap-14 text-lg hidden sm:flex font-poppins">
        <Link
          to="aboutMe"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-mutedBlush"
        >
          About Me
        </Link>

        <Link to="projects">Projects</Link>
        <Link>Contact</Link>
        <Link>Resume</Link>
        <Link>GitHub</Link>
      </ul>
      <IoMdMenu className="sm:hidden" />
    </nav>
  );
}

export default Navbar