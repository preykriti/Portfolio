import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IoMdMenu } from "react-icons/io";
import{Link} from "react-scroll";
import daisy from "../assets/daisy.png"


const Navbar = () => {
  return (
    <nav className="bg-sageGreen h-16 px-4 flex justify-between  items-center text-softCream ">
      <Link to="hero" className="text-4xl font-unkempt">
        <span className="flex items-center">
          P<img src={daisy} className="w-8 h-8 animate-spin" />
          RTF
          <img src={daisy} className="w-8 h-8 animate-spin" />
          LI
          <img src={daisy} className="w-8 h-8 animate-spin" />
        </span>
      </Link>
      <ul className="gap-14 text-lg hidden md:flex font-poppins">
        <Link
          to="aboutMe"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-mutedBlush"
        >
          About Me
        </Link>

        <Link
          to="projects"
          smooth={true}
          duration={600}
          className="cursor-pointer hover:text-mutedBlush"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={700}
          className="cursor-pointer hover:text-mutedBlush"
        >
          Contact
        </Link>
        <Link>Resume</Link>
        <a
          href="https://github.com/preykriti"
          target="blank"
          rel="noopener"
          className="flex items-center gap-1 hover:text-mutedBlush"
        >
          GitHub
          <FaExternalLinkAlt className="text-sm" />
        </a>
      </ul>
      <IoMdMenu className="md:hidden" />
    </nav>
  );
}

export default Navbar