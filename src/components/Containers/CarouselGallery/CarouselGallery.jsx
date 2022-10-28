import "../../../../node_modules/react-image-gallery/styles/css/image-gallery.css";
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
  if (isLoaded) {
    const photogallery = photos.reduce((accum, photo) => {
      const object = { original: photo, thumbnail: photo };
      return [...accum, object];
    }, []);

    return <ImageGallery items={photogallery} />;
  }
  return <ImageGallery items={placeHolders} />;
}
