const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/sessions/session`;

export const sendSelectedImages = async (selectedImages, id, previewPics) => {
  const imagesArray = selectedImages;
  const preview = previewPics;

  const finalPics = preview.reduce((accum, photo) => {
    if (imagesArray.includes(photo.name)) {
      const object = { ...photo, isChecked: true };
      return [...accum, object];
    }
    return accum;
  }, []);

  const response = await fetch(`${USER_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ selectedPics: finalPics }),
  });
  const data = await response.json();

  return data;
};
