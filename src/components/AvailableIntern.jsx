import React from "react";

import "../css/RecentProject.css";
import RecentProjectCard from "./RecentProjectCard";
import AvailableInternCard from "./AvailableInternCard";
const AvailableIntern = () => {
  return (
    <div className="recent-project">
      <h3>Available Intern</h3>
      <div className="recent-project-bottom scrolling-wrapper">
        <AvailableInternCard></AvailableInternCard>
        <AvailableInternCard></AvailableInternCard>
        <AvailableInternCard></AvailableInternCard>
        <AvailableInternCard></AvailableInternCard>
        <AvailableInternCard></AvailableInternCard>
        <AvailableInternCard></AvailableInternCard>
        <AvailableInternCard></AvailableInternCard>
        <AvailableInternCard></AvailableInternCard>
      </div>
    </div>
  );
};

export default AvailableIntern;
