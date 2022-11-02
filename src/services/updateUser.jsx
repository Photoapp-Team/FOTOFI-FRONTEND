const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/users/`;

export const updateUser = async (values) => {
    const { name, lastname, password, city, suburb, street, number, zipCode, phoneNumber } = values;
    const userData = {
        name,
        lastname,
        password,
        city,
        suburb,
        street,
        number,
        zipCode,
        phoneNumber,
    };
    const response = await fetch(`${USER_URL}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
    });
    const data = await response.json();

    return data;
};
