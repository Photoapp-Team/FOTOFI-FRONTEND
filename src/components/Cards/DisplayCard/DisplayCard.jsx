import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import "./DisplayCard.css";

export default function DisplayCard({ image }) {
  return (
    <ImageListItem key={image}>
      <img
        src={`${image}?w=248&fit=crop&auto=format`}
        srcSet={`${image}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={image}
        loading="lazy"
      />
    </ImageListItem>
  );
}
