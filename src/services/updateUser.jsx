const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/users/`;

export const updateUser = async (values, id) => {
    const { name, lastname, password, city, suburb, street, number, zipCode, phoneNumber } = values;
    const userData = {
        name,
        lastname,
        password,
        location: {
            city,
            suburb,
            street,
            number,
            zipCode,
        },
        phoneNumber,
    };
    const token = localStorage.getItem("token")
    const response = await fetch(`${USER_URL}${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();

    return data;
};
