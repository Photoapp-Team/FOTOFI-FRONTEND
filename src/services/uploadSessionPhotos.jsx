export const uploadSessionPhotos = async (sessionUrl, values) => {
  const { previewPics } = values;

  let formData = new FormData();
  previewPics.forEach((previewPic, index, array) => {
    formData.append("previewPics", previewPic);
  });

  const response = await fetch(sessionUrl, {
    method: "POST",
    body: formData,
  });
  const imageDataRes = await response.json();

  return imageDataRes;
};
