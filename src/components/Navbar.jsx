import * as React from "react";
import Button from "@mui/material/Button";

import "../css/Navbar.css";
import MAI_Logo from "../assets/MAI_Logo.svg";
import cart from "../assets/cart.svg";
export default function ButtonAppBar() {
  return (
    <div className="navbar">
      <div className="navbar-top">
        <img src={MAI_Logo}></img>
        <div className="navbar-top-right">
          <Button
            variant="contained"
            sx={{
              boxShadow: "none",
              backgroundColor: "#F5F5F5",
              color: "#000",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Post a Project
          </Button>

          <img src={cart}></img>
          <Button
            sx={{
              color: "#003F6B",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Login
          </Button>
          <Button
            sx={{
              color: "#003F6B",
              fontSize: "16px",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="navbar-bottom-item website">WWW.MYPROJECT.AI</div>
        <div className="navbar-bottom-item">Home</div>
        <div className="navbar-bottom-item">How it Works</div>
        <div className="navbar-bottom-item">Project</div>
        <div className="navbar-bottom-item">Blogs</div>
        <div className="navbar-bottom-item">DIY Worktops</div>
      </div>
    </div>
  );
}
