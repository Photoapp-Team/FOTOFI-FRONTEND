import * as React from "react";
import { styled } from "@mui/material/styles";
import "./PhotographerCardFooter.css";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PhotographerCardFooter({ cardFooter }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <CardActions disableSpacing sx={{ p: 0 }}>
        <IconButton aria-label="add to favorites" sx={{ p: 0.25 }}>
          <FavoriteIcon sx={{ color: "tertiary.main" }} />
        </IconButton>
        <ExpandMore
          sx={{ p: 0 }}
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <CardMedia
            component="img"
            height="194"
            image="https://i.insider.com/61a7a6e10ed48c0019e537e8?width=1000&format=jpeg&auto=webp" //image={img} Esta linea es para ya pasar la info
            alt="Paella dish"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://i.insider.com/61a7a6e10ed48c0019e537e8?width=1000&format=jpeg&auto=webp" //image={img} Esta linea es para ya pasar la info
            alt="Paella dish"
          />
          <CardMedia
            component="img"
            height="194"
            image="https://i.insider.com/61a7a6e10ed48c0019e537e8?width=1000&format=jpeg&auto=webp" //image={img} Esta linea es para ya pasar la info
            alt="Paella dish"
          />
        </CardContent>
      </Collapse>
    </>
  );
}
