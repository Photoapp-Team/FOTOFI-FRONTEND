const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/users/id/`;

export const updateUser = async (values) => {
    const { name, lastname, email, location, phoneNumber, webPage } = values;
    const userData = {
        name,
        lastname,
        email,
        location,
        phoneNumber,
        webPage,
    };
    const response = await fetch(`${USER_URL}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    const data = await response.json();

    return data;
};