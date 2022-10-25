import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import React from "react";

const placeHolders = [
  {
    original:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
    thumbnail:
      "https://htmlcolorcodes.com/assets/images/colors/steel-gray-color-solid-background-1920x1080.png",
  },
];

export default function CarouselGallery({ isLoaded, photos }) {
  let photogallery = {};
  if (isLoaded) {
    photogallery = photos.map((cv) => {
      let object = { original: cv, thumbnail: cv };

      return object;
    });

    return <ImageGallery items={photogallery} />;
  }
  return <ImageGallery items={placeHolders} />;
}
