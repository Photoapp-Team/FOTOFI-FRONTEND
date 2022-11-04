import React from "react";

const { REACT_APP_API_ENDPOINT } = process.env;
const IMAGE_URL = `${REACT_APP_API_ENDPOINT}/upload/profile/`;

export const updateProfilePic = async (values, id) => {
    const {
        coverPhoto,
        profilePic,
    } = values

    const updatePhoto = {
        coverPhoto,
        profilePic,
    };

    let formData = new FormData();
    Object.entries(updatePhoto).forEach(([propName, files]) => {
        files.forEach((photo, index) => {
            formData.append(propName, photo);
        })
    })

    const picProfileResponse = await fetch(`${IMAGE_URL}${id}`, {
        method: "POST",
        body: formData,
    })
    const updatePhotoRes = await picProfileResponse.json();

    return updatePhotoRes;

};