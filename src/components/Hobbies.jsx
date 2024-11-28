import React from 'react'
import daisy from "../assets/daisy.png"

const Hobbies = () => {
  return (
    <div className="bg-sageGreen rounded-lg sm:px-6 px-2 mt-20 sm:mt-10 py-6">
      <h3 className="font-unkempt text-softCream text-2xl pb-6">HOBBIES</h3>
      <ul className="space-y-4">
        <li className="flex text-lg items-center gap-5 text-shadowColor font-medium">
          <img src={daisy} className="w-9" />
          Crochet
        </li>
        <li className="flex text-lg items-center gap-5 text-shadowColor font-medium">
          <img src={daisy} className="w-9" />
          Arts and crafts
        </li>
        <li className="flex text-lg items-center gap-5 text-shadowColor font-medium">
          <img src={daisy} className="w-9" />
          Reading
        </li>
      </ul>
    </div>
  );
}

export default Hobbies