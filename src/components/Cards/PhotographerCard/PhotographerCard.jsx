import * as React from "react";
import { styled } from "@mui/material/styles";
import "./PhotographerCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
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

export default function RecipeReviewCard(
  name,
  coverImg,
  ranking,
  profilePic,
  location
) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 250, borderRadius: 2 }} elevation={4}>
      <CardHeader
        className="cardHeader"
        font
        sx={{ p: 0.75 }}
        avatar={
          <Avatar
            alt="Luis Rod" //alt={name} Esta linea es para ya pasar la info
            src="https://www.jokesforfunny.com/wp-content/uploads/2021/06/0596bdb89b60fe771acd2f5972a9d3e3.jpg" //src={profilePic} Esta linea es para ya pasar la info
          />
        }
        title="Luis Rod" //title={name} Esta linea es para ya pasar la info
        subheader="Cdmx" //subheader={location} Esta linea es para ya pasar la info
        action={
          <IconButton aria-label="ranking">
            <Typography
              sx={{ p: 0.75 }}
              variant="caption"
              component="div"
              children="4.7" //children={ranking} Esta linea es para ya pasar la info
              align="center"
            />
            <StarIcon className="StarIcon" sx={{ color: "accent.main" }} />
          </IconButton>
        }
      />

      <CardMedia
        className="cardCover"
        sx={{ borderBottomRadius: 3 }}
        component="img"
        height="194"
        image="https://i.insider.com/61a7a6e10ed48c0019e537e8?width=1000&format=jpeg&auto=webp" //image={img} Esta linea es para ya pasar la info
        alt="Paella dish"
      />

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
    </Card>
  );
}
