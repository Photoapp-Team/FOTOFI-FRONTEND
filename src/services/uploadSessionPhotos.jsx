export const uploadSessionPhotos = async (sessionUrl, values) => {
  const { previewPics, finalPics, displayPics } = values;
  let formData = new FormData();

  if (previewPics) {
    previewPics.forEach((previewPic, index, array) => {
      formData.append("previewPics", previewPic);
    });
  }
  if (finalPics) {
    finalPics.forEach((finalPic, index, array) => {
      formData.append("finalPics", finalPic);
    });
  }
  if (displayPics) {
    displayPics.forEach((displayPic, index, array) => {
      formData.append("displayPics", displayPic);
    });
  }

  const response = await fetch(sessionUrl, {
    method: "POST",
    body: formData,
  });
  const imageDataRes = await response.json();

  return imageDataRes;
};
