import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import LinkButton from "./LinkButton";

const ProjectCard = ({ title, description, github, website, download }) => {
  return (
    <div>
      <div className="flex flex-col justify-between  bg-softCream bg-opacity-10 text-mutedBlush rounded-lg px-5 py-3 min-h-full">
        <div>
          <h4 className="text-xl pb-2">{title}</h4>
          <hr className="h-1 bg-sageGreen border-none" />
          <p className="pt-2 text-justify">{description}</p>
        </div>

        <div className="flex justify-between mt-4 w-full">
          {github && (
            <LinkButton link={github}>
              <p>GitHub</p> 
            </LinkButton>
          )}

          {website && (
            <LinkButton link={website}>
              <p>Live Demo</p> 
            </LinkButton>
          )}
          {download && (
            <LinkButton link={download}>
              <p>Download APK</p> 
            </LinkButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
