import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import BlogCardImage from "../assets/BlogCardImage.png";
export default function ProjectCard() {
  return (
    <Card
      sx={{ minWidth: 245, backgroundColor: "#f5f5f5", borderRadius: "10px" }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={BlogCardImage}
        sx={{ padding: "10px" }}
      />

      <CardContent sx={{ margin: "0 10%" }}>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Safe measures can refer to a wide range of precautions
        </Typography>
      </CardContent>
    </Card>
  );
}
