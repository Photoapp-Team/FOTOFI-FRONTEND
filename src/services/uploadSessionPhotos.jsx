export const uploadSessionPhotos = async (sessionUrl, values) => {
  const { previewPics, finalPics } = values;
  let formData = new FormData();

  if (previewPics) {
    previewPics.forEach((previewPic, index, array) => {
      formData.append("previewPics", previewPic);
    });
  } else {
    finalPics.forEach((finalPic, index, array) => {
      formData.append("finalPics", finalPic);
    });
  }

  const response = await fetch(sessionUrl, {
    method: "POST",
    body: formData,
  });
  const imageDataRes = await response.json();

  return imageDataRes;
};
