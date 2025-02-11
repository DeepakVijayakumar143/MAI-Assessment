import React from "react";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import LiveProjectCard from "../assets/LiveProjectCard.png";
import "../css/InfiniteMovingCards.css";
const cards = [
  "Card 1",
  "Card 2",
  "Card 3",
  "Card 4",
  "Card 5",
  "Card 6",
  "Card 7",
  "Card 8",
  "Card 9",
];

const InfiniteMovingCards = () => {
  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex space-x-4"
        initial={{ x: 0 }}
        animate={{ x: [0, -600] }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
          onRepeat: () => {
            return { x: 0 };
          },
        }}
      >
        {[...cards, ...cards].map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-lg flex items-center justify-center rounded-xl text-lg font-semibold"
          >
            {/* <Card sx={{ width: "275px", borderRadius: "25px" }}>
              <CardActionArea sx={{ borderRadius: "40px" }}>
                
              </CardActionArea>
            </Card> */}
            <div className="card">
              <img src={LiveProjectCard}></img>
              <div className="live-project-card-text">
                <div className="card-flex">
                  <p className="progress text-align-end">Progress</p>
                  <h3>Interior Works</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMovingCards;
