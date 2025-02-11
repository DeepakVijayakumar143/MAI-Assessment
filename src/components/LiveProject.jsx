import React from "react";
import { TextField } from "@mui/material";

import LiveProjectCard from "./LiveProjectCard";
import "../css/LiveProject.css";
import InfiniteMovingCards from "./InfiniteMovingCards";
const LiveProject = () => {
  return (
    <div className="live-project">
      <div className="live-project-top">
        <h3>LIVE PROJECT</h3>
        <TextField
          id="outlined-basic"
          label="Search your live project"
          variant="outlined"
          sx={{ width: "30%", borderRadius: "10px" }}
        />
        <TextField
          id="outlined-basic"
          label="Search your location.."
          variant="outlined"
          sx={{ width: "30%", borderRadius: "10px" }}
        />
      </div>
      <div className="live-project-bottom">
        <InfiniteMovingCards></InfiniteMovingCards>
      </div>
      <p className="view-all">View all</p>
    </div>
  );
};

export default LiveProject;
