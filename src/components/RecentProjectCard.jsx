import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "../css/RecentProjectCard.css";
import RecentProjectCard from "../assets/RecentProjectCard.png";
export default function MediaCard() {
  return (
    <Card
      sx={{
        minWidth: 320,
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <p>Bedroom Renovation</p>
      <CardMedia
        sx={{ height: 180 }}
        image={RecentProjectCard}
        title="green iguana"
      />
      <CardContent>
        <div className="recent-card-flex">
          <div>
            <Typography gutterBottom variant="h5" component="div">
              Kitchen - Worktop
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Bristol - England
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Slab - Marble
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Duration - Completed
            </Typography>
          </div>

          <AvatarGroup spacing={24} sx={{ alignSelf: "flex-end" }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </AvatarGroup>
        </div>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
      <Button
        size="large"
        variant="contained"
        sx={{ width: "100%", backgroundColor: "#003f6b" }}
      >
        View Project
      </Button>
    </Card>
  );
}
