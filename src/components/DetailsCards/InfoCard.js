import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function InfoCard({ title, icon, description }) {
  return (
    <Card sx={{ maxWidth: 345, marginRight: "1.5rem", textAlign: "center" }}>
      <CardMedia sx={{ height: 260 }} image={icon} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View all</Button>
      </CardActions>
    </Card>
  );
}
