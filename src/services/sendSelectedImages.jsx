const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/sessions/session`;

export const sendSelectedImages = async (selectedImages, sessionId, previewPics) => {
  const id = sessionId;
  const imagesArray = selectedImages;
  const preview = previewPics;
  console.log("SELECCION:", imagesArray);
  console.log("URL;,", `${USER_URL}/${id}`);
  console.log("preview", preview);
  const finalPics = [];

  previewPics.forEach((picture) => {
    if (picture.name.includes(imagesArray)) {
      finalPics.push({ name: picture.name, link: picture.link });
    }
    console.log(finalPics);
  });
  const response = await fetch(`${USER_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(selectedImages),
  });
  const data = await response.json();

  return data;
};
