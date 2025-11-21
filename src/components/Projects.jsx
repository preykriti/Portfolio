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
        Other Projects
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
        <ProjectCard
          title="Notebook App"
          description="A note-taking web application, implementing features like
            creating, editing, and deleting notes. Added user authentication,
            tag-based filtering, and a responsive interface for smooth user
            experience."
          github="https://github.com/preykriti/Notebook"
        />

        <ProjectCard
          title="eCommerce Platform"
          description="An e-commerce website with features like product filtering by category, subcategory, and price, search function, and add-to-cart functionality. The website is fully responsive across different screen sizes, with ongoing work on the backend and additional features."
          github="https://github.com/preykriti/Ecommerce-app"
        />

        <ProjectCard
          title="Cosmic Focus App"
          description=" A productivity and focus app. Users can create tasks, use a pomodoro timer, earn
          rewards for successfully completing sessions. It also supports
          adding friends, starting group focus sessions, posting achievements,
          and activating deep focus mode which prevents distractions by blocking
          other apps during a session."
          github="https://github.com/preykriti/cosmic-focus"
          download="https://github.com/preykriti/cosmic-focus/releases/download/v1.0.0/app-release.apk"
        />

        <ProjectCard
          title="Music Player App"
          description="A music player application built with React Native.  It reads music
          files from your device, allows you to play songs, view them by albums
          or artists, and create custom playlists."
          github="https://github.com/preykriti/music-player"
        />

        <ProjectCard
          title="Todo App"
          description="A Todo App built using React Native and Firebase with user
          authentication. Users can add, edit, and delete tasks, and mark tasks
          as completed using a checkbox system helping them manage their daily
          activities efficiently."
          github="https://github.com/preykriti/todo-mobile-app"
        />

        <ProjectCard
          title="Bubble Shooter Game"
          description="A classic Bubble Shooter game built with HTML, CSS, and JavaScript. Players aim and shoot bubbles from a cannon to match three or more of the same color. The game features multiple difficulty levels, sound effect and a scoring system."
          github="https://github.com/preykriti/bubble-shooter"
          website="https://bubble-shooter-prakriti.netlify.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
