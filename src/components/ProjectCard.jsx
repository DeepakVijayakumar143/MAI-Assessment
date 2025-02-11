import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ProjectCardImage from "../assets/ProjectCardImage.png";
export default function ProjectCard() {
  return (
    <Card sx={{ minWidth: 345, backgroundColor: "#f5f5f5" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={ProjectCardImage}
      />
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ backgroundColor: "#3E3D3D", color: "#fff", fontWeight: "bold" }}
        paddingLeft="10%"
      >
        Home Renovation
      </Typography>
      <CardContent sx={{ backgroundColor: "#fff", margin: "0 10%" }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Project initiation - The beginning of the project that includes the
          hiring of construction and design teams, defining the scope of the
          work, creating a budget.....
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          margin: "0 10%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small">Budget; €100</Button>
        <Button
          size="large"
          variant="contained"
          sx={{ backgroundColor: "#003f6b" }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
