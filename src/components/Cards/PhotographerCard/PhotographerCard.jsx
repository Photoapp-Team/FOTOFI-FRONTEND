import * as React from "react";
import "./PhotographerCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import PhotographerCardFooter from "../PhotographerCardFooter";
import StarTwoToneIcon from "@mui/icons-material/StarTwoTone";
import { useNavigate } from "react-router-dom";

export default function PhotographerCard({
  name,
  coverImg,
  ranking,
  rankingCount,
  profilePic,
  location,
  isLoaded,
  withFooter,
  photographerId,
}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/profile/${photographerId}`);
  };

  return (
    <Card
      sx={{ minWidth: 250, maxWidth: 250, borderRadius: 2, margin: 2 }}
      elevation={4}
      onClick={handleOnClick}
    >
      <CardHeader
        className="cardHeader"
        sx={{ p: 0.75, minHeight: 60, maxHeight: 60 }}
        avatar={
          isLoaded ? (
            <Avatar alt={name} src={profilePic} />
          ) : (
            <Skeleton animation="wave" variant="circular" width={40} height={40} />
          )
        }
        title={isLoaded ? name : <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />}
        subheader={
          isLoaded ? location : <Skeleton variant="text" width="40%" sx={{ fontSize: ".9rem" }} />
        }
        action={
          <IconButton aria-label="ranking">
            <Typography
              sx={{ p: 0.75 }}
              variant="caption"
              component="div"
              children={
                isLoaded ? (
                  ranking
                ) : (
                  <Skeleton variant="text" width="20px" sx={{ fontSize: ".75rem" }} />
                )
              }
              align="center"
            />
            <Typography
              sx={{ p: 0.75 }}
              variant="caption"
              component="div"
              children={
                isLoaded ? (
                  `(${rankingCount})`
                ) : (
                  <Skeleton variant="text" width="20px" sx={{ fontSize: ".75rem" }} />
                )
              }
              align="center"
            />
            <div className="starIconContainer">
              <StarTwoToneIcon className="StarIcon" />
            </div>
          </IconButton>
        }
      />

      {isLoaded ? (
        <CardMedia
          className="cardCover"
          sx={{ borderBottomRadius: 3, minHeight: 194, maxHeight: 194 }}
          component="img"
          image={coverImg}
          alt="Cover Picture"
        />
      ) : (
        <Skeleton variant="rectangular" height={194} align="center" />
      )}
      {withFooter ? <PhotographerCardFooter /> : <></>}
    </Card>
  );
}
