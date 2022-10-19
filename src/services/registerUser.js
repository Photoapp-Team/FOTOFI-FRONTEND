const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/users/`;

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
