import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-scroll";
import daisy from "../assets/daisy.png";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <nav className="bg-sageGreen h-16 px-4 flex justify-between  items-center text-softCream ">
      <Link
        to="hero"
        smooth={true}
        duration={600}
        className="text-4xl font-unkempt cursor-pointer"
      >
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
        {/* <a href='../assets/resume.pdf' target='_blank'>Resume</a> */}
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
      <IoMdMenu
        onClick={() => setVisible(visible ? false : true)}
        className="md:hidden text-2xl"
      />

      {/* nav menu for small screen */}
      <div
        className={`${
          visible ? "w-2/3" : "w-0"
        } absolute overflow-hidden rounded-lg top-16 right-0 bottom-0  transition-all h-64 bg-softCream text-shadowColor text-lg font-medium`}
      >
        <div className="flex flex-col ">
          <Link
            onClick={() => setVisible(false)}
            to="aboutMe"
            smooth={true}
            duration={500}
            className="cursor-pointer p-4"
          >
            About Me
          </Link>
          <hr className="h-1 bg-sageGreen border-none mx-2" />
          <Link
            onClick={() => setVisible(false)}
            to="projects"
            smooth={true}
            duration={600}
            className="cursor-pointer p-4"
          >
            Projects
          </Link>
          <hr className="h-1 bg-sageGreen border-none mx-2" />

          <Link
            onClick={() => setVisible(false)}
            to="contact"
            smooth={true}
            duration={700}
            className="cursor-pointer p-4"
          >
            Contact
          </Link>
          <hr className="h-1 bg-sageGreen border-none mx-2" />
          <a
            href="https://github.com/preykriti"
            target="blank"
            rel="noopener"
            className="flex items-center gap-2 p-4"
          >
            GitHub
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
