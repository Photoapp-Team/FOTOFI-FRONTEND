const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/users/`;
const IMAGE_URL = `${REACT_APP_API_ENDPOINT}/upload/profile/`;

export const createPhotographer = async (values) => {
  const {
    username,
    name,
    lastname,
    email,
    password,
    gender,
    phoneNumber,
    city,
    state,
    country,
    suburb,
    street,
    number,
    zipCode,
    facebook,
    instagram,
    www,
    photoTags,
    coverPhoto,
    profilePic,
  } = values;

  const userData = {
    username,
    name,
    lastname,
    email,
    password,
    gender,
    role: "Photographer",
    premium: { isPremiun: false },
    phoneNumber,
    location: { city, state, country, suburb, street, number, zipCode },
    socialNetworks: { facebook, instagram, www },
    photoTags: photoTags,
  };

  const updatePhoto = {
    coverPhoto,
    profilePic,
  };

  let formData = new FormData();
  Object.entries(updatePhoto).forEach(([propName, files]) => {
    files.forEach((photo, index) => {
      formData.append(propName, photo);
    });
  });

  const response = await fetch(`${USER_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  const { _id } = data;
  if (data) {
    console.log(data.data.createdUser._id);

    const picProfileResponse = await fetch(`${IMAGE_URL}${data.data.createdUser._id}`, {
      method: "POST",
      body: formData,
    });

    const updatePhotoRes = await picProfileResponse.json();
  }

  return data;
};

export const createBasicUser = async (values) => {
  const { name, username, password, email, lastname } = values;
  const userData = {
    name,
    lastname,
    username,
    email,
    password,
  };
  const response = await fetch(`${USER_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const data = await response.json();

  return data;
};
