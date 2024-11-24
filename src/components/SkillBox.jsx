import React from 'react'

const SkillBox = (props) => {

  return (
    <div className={`text-center my-auto ${props.bg?"bg-softCream": `bg-yellow-300`} shadow-[6px_6px_0px_#556B2F] rounded-full text-xl text-charcoalGrey px-4 py-2 font-bold`}>
      {props.text}
    </div>
  );
}

export default SkillBox