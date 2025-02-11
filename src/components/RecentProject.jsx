import React from "react";

import "../css/RecentProject.css";
import RecentProjectCard from "./RecentProjectCard";
const RecentProject = () => {
  return (
    <div className="recent-project">
      <h3>Recent Project Post</h3>
      <div className="recent-project-bottom scrolling-wrapper">
        <RecentProjectCard></RecentProjectCard>
        <RecentProjectCard></RecentProjectCard>
        <RecentProjectCard></RecentProjectCard>
        <RecentProjectCard></RecentProjectCard>
        <RecentProjectCard></RecentProjectCard>
        <RecentProjectCard></RecentProjectCard>
        <RecentProjectCard></RecentProjectCard>
        <RecentProjectCard></RecentProjectCard>
      </div>
    </div>
  );
};

export default RecentProject;
