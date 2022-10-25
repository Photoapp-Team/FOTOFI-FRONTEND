import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import React from "react";
import { Card } from "@mui/material";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/1000/600/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];
const placeHolders = [
  {
    original:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
    thumbnail:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
  },
  {
    original:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
    thumbnail:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
  },
  {
    original:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
    thumbnail:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
  },
];

export default function CarouselGallery({ isLoaded }) {
  return isLoaded ? (
    <ImageGallery items={images} />
  ) : (
    <ImageGallery items={placeHolders} />
  );
}
