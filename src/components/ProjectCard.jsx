import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div>
      <div className="flex flex-col justify-between  bg-softCream bg-opacity-10 text-mutedBlush rounded-lg p-3 min-h-72">
        <div>
          <h4 className="text-xl pb-2">{props.title}</h4>
          <hr className="h-1 bg-sageGreen border-none" />
          <p className="pt-2 text-justify">{props.description}</p>
        </div>
        <a
          href={props.github}
          target="blank"
          rel="noopener noreferrer"
          className={`${
            props.github ? "flex" : "hidden"
          } justify-between items-center bg-sageGreen rounded-full py-1 px-5 my-3  w-1/3 font-medium text-shadowColor shadow-[4px_4px_0px_#4A5845]`}
        >
          <p>GitHub</p> <FaExternalLinkAlt className="text-sm" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
