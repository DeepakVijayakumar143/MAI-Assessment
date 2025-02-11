import React from "react";
import FormImage from "../assets/FormImage.png";
import "../css/Form.css";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
const Form = () => {
  return (
    <div className="form-container">
      <h3>
        <i>Enquiry now</i>
      </h3>
      <div className="form-flex">
        <img src={FormImage}></img>
        <div className="form">
          <label>Name*</label>
          <TextField
            id="filled-basic"
            label="Enter"
            variant="filled"
            sx={{ marginBottom: "30px" }}
          />
          <label>Mobile Number*</label>
          <TextField
            id="filled-basic"
            label="Enter your number"
            variant="filled"
            sx={{ marginBottom: "30px" }}
          />
          <label>Email id*</label>
          <TextField
            id="filled-basic"
            label="Enter Mail"
            variant="filled"
            sx={{ marginBottom: "30px" }}
          />
          <label>Site Location*</label>
          <TextField
            id="filled-basic"
            label="Enter Location"
            variant="filled"
            sx={{ marginBottom: "30px" }}
          />
          <Button
            variant="contained"
            sx={{
              marginBottom: "30px",
              paddingTop: "20px",
              paddingBottom: "20px",
              backgroundColor: "#003f6b",
            }}
          >
            Get Quotes
          </Button>
          <p className="text-align-center">We will get back to you</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
