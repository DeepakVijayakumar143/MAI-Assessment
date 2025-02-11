import { Button } from "@mui/material";
import React from "react";

import HeroImage from "../assets/HeroImage.svg";
import "../css/Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1 className="h1">Manage your</h1>
        <h1 className="h1">
          project <span>FASTER</span>
        </h1>
        <Button
          sx={{
            textTransform: "none",
            fontSize: "24px",
            padding: "10px 70px",
            marginTop: "10px",
            fontWeight: "700",
            backgroundColor: "#0D99FF",
            borderRadius: "10px",
          }}
          variant="contained"
        >
          Explore your Project
        </Button>
      </div>
      <div className="hero-right">
        <img src={HeroImage} className="hero-image"></img>
        <div className="triangle-left"></div>
      </div>
    </div>
  );
};

export default Hero;
