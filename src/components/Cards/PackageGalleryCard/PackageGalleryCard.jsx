import * as React from "react";
import "./PackageGalleryCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import CarouselGallery from "../../CarouselGalery/CarouselGallery";
import { useNavigate } from "react-router-dom";

export default function PackageGalleryCard({
  name,
  profilePic,
  location,
  isLoaded,
  photographerId,
}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/profile/${photographerId}`);
  };

  return (
    <Card sx={{ borderRadius: 1, margin: 0 }} elevation={2}>
      <Typography
        sx={{ margin: 1 }}
        children={`${name} > Tipode de foto >`}
      ></Typography>
      <CardHeader
        onClick={handleOnClick}
        className="cardHeader"
        font
        sx={{ p: 0.75 }}
        avatar={
          isLoaded ? (
            <Avatar alt={name} src={profilePic} />
          ) : (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          )
        }
        title={
          isLoaded ? (
            name
          ) : (
            <Skeleton variant="text" width="60%" sx={{ fontSize: ".9rem" }} />
          )
        }
        subheader={
          isLoaded ? (
            location
          ) : (
            <Skeleton variant="text" width="40%" sx={{ fontSize: ".9rem" }} />
          )
        }
      />
      <CarouselGallery
        className="carouselGallery"
        isLoaded={isLoaded}
      ></CarouselGallery>
    </Card>
  );
}
