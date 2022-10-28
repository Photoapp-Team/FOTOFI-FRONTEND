import { file } from "@babel/types";
import React from "react";
const { REACT_APP_API_ENDPOINT } = process.env;

const PACKAGE_URL = `${REACT_APP_API_ENDPOINT}/packages/`;
const IMAGE_URL = `${REACT_APP_API_ENDPOINT}/upload/packages/`;

export const createPackage = async (values) => {
  const {
    serviceCategory,
    coverPhoto,
    description,
    displayPhotos,
    maxQuantityFinalPhotos,
    maxQuantityPrevPhotos,
    minQuantityFinalPhotos,
    minQuantityPrevPhotos,
    maxPrice,
    minPrice,
    deliveryTime,
  } = values;

  const token = localStorage.getItem("token");
  const temp = token.split(".")[1];
  const photographerId = JSON.parse(atob(temp)).id;

  const packageData = {
    serviceCategory,
    description,
    maxQuantityFinalPhotos,
    maxQuantityPrevPhotos,
    minQuantityFinalPhotos,
    minQuantityPrevPhotos,
    maxPrice,
    minPrice,
    deliveryTime,
    photographerId,
  };

  const photoData = {
    coverPhoto,
    displayPhotos,
  };

  const packageResponse = await fetch(`${PACKAGE_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(packageData),
  });
  const packageDataRes = await packageResponse.json();

  let formData = new FormData();
  Object.entries(photoData).forEach(([propName, files]) => {
    files.forEach((photo, index) => {
      formData.append(propName, photo);
    });
  });
  //   formData.append("coverPhoto", coverPhoto[0]);
  //   formData.append("displayPhotos", displayPhotos);

  const imageResponse = await fetch(`${IMAGE_URL}${packageDataRes.data.package._id}`, {
    method: "POST",
    body: formData,
  });
  const imageDataRes = await imageResponse.json();

  return { packageDataRes, imageDataRes };
};
