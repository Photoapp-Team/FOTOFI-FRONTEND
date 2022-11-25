import * as React from "react";
import "./PackageGalleryCard.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import CarouselGallery from "../../Containers/CarouselGallery";
import { useNavigate } from "react-router-dom";

export default function PackageGalleryCard({
  name,
  profilePic,
  location,
  isLoaded,
  photographerId,
  photos,
}) {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/profile/${photographerId}`);
  };

  return (
    <Card sx={{ borderRadius: 1, mx: 0, my: "16px" }} elevation={2}>
      <CarouselGallery
        className="carouselGallery"
        isLoaded={isLoaded}
        photos={photos}
      ></CarouselGallery>
    </Card>
  );
}
