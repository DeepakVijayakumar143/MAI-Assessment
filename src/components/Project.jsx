import React from "react";

import "../css/RecentProject.css";
import ProjectCard from "./ProjectCard";
const Project = () => {
  return (
    <div className="recent-project">
      <h3>Project</h3>
      <div className="recent-project-bottom scrolling-wrapper">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      <h3 className="text-align-end">View All</h3>
    </div>
  );
};

export default Project;
