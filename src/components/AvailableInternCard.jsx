import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../css/AvailableInternCard.css";
import AvailableInternCard from "../assets/AvailableInternCard.png";
import { Table, TableCell, TableBody, TableRow } from "@mui/material";
export default function MediaCard() {
  return (
    <Card
      sx={{
        minWidth: 320,
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        position: "relative",
        height: 350,
      }}
      className="intern-card"
    >
      <div className="blue-background"></div>
      <div className="absolute">
        <CardMedia
          sx={{ borderRadius: "100%", height: 120, width: 120 }}
          image={AvailableInternCard}
          title="green iguana"
        />
        <CardContent>
          <div className="intern-card-flex">
            <div>
              <Table>
                <TableBody>
                  <TableRow sx={{ borderBottom: 0 }}>
                    <TableCell>Name</TableCell>
                    <TableCell>:</TableCell>
                    <TableCell>Jery Macson</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Role</TableCell>
                    <TableCell>:</TableCell>
                    <TableCell>Intern</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Button
                size="large"
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#003f6b",
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  //   padding: "10% 80%",
                  whiteSpace: "nowrap",
                }}
              >
                View Profile
              </Button>
            </div>
          </div>
        </CardContent>
      </div>

      <CardActions>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
