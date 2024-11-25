import React from 'react'

const SkillBox = (props) => {

  return (
    <div
      className={`text-center my-auto ${
        props.bg ? "bg-softCream" : `bg-yellow-300`
      } shadow-[6px_6px_0px_#556B2F] rounded-full text-lg text-charcoalGrey mx-2 px-2 py-2 font-bold group-hover:scale-110 hover:-translate-y-1 transition-transform duration-300`}
    >
      {props.text}
    </div>
  );
}

export default SkillBox