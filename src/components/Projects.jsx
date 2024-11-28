import React from "react";
import LineSeparation from "./LineSeparation";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {
  return (
    <div id="projects" className="mb-16">
      <LineSeparation />
      <h1 className="font-unkempt text-sageGreen text-3xl py-6 font-bold">
        PROJECTS
      </h1>
      <h3 className="font-unkempt text-softCream text-2xl pb-6">
        Academic Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
        <ProjectCard
          title="Regional Based Crop Yield Prediction Using LSTM"
          description="Collaborated with a team to develop a machine learning-based web app
            that predicts crop yields across Nepal’s regions by analyzing soil,
            weather, and crop data. Managed data collection and preprocessing
            using Jupyter and Python."
        />
      </div>

      <h3 className="font-unkempt text-softCream text-2xl py-6">
        Practice Projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        <ProjectCard
          title="Notebook App"
          description="Developed a note-taking web application, implementing features like
            creating, editing, and deleting notes. Added user authentication,
            tag-based filtering, and a responsive interface for smooth user
            experience."
          github="https://github.com/preykriti/Notebook"
        />

        <ProjectCard
          title="eCommerce Platform"
          description="Building an e-commerce website with features like product filtering by category, subcategory, and price, search function, and add-to-cart functionality. The website is fully responsive across different screen sizes, with ongoing work on the backend and additional features."
          github="https://github.com/preykriti/Ecommerce-app"
        />
      </div>
    </div>
  );
};

export default Projects;
