import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-sageGreen px-6 py-4 flex justify-between  items-center text-softCream">
      <h1 className="text-4xl font-unkempt">Portfolio</h1>
      <ul className="gap-14 text-lg hidden sm:flex font-poppins">
        <li>About Me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar