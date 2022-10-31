import * as React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import "./ImageCard.css";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function ImageCard({ image, selectedImages }) {
  const [selected, setSelected] = React.useState(false);
  const handleSelection = () => {
    if (selectedImages.includes(image.name)) {
      const imagePosition = selectedImages.indexOf(image.name);
      selectedImages.splice(imagePosition, 1);
    } else {
      selectedImages.push(image.name);
    }
  };
  return (
    <ImageListItem key={image.name}>
      <img
        src={`${image.link}?w=248&fit=crop&auto=format`}
        srcSet={`${image.link}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={image.name}
        loading="lazy"
      />

      <ImageListItemBar
        sx={{
          background: "transparent",
        }}
        position="bottom"
        actionIcon={
          <IconButton
            className="circle-button"
            onClick={() => {
              setSelected(!selected);
              handleSelection();
            }}
            sx={{ p: 0, m: 1 }}
            aria-label={`star ${image.name}`}
            children={
              selected ? (
                <CheckCircleIcon size="large" color="success" />
              ) : (
                <RadioButtonUncheckedIcon color="blue" size="medium" />
              )
            }
          ></IconButton>
        }
        actionPosition="right"
      />
    </ImageListItem>
  );
}
