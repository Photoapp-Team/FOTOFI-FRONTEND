const { REACT_APP_API_ENDPOINT } = process.env;

const USER_URL = `${REACT_APP_API_ENDPOINT}/users/`;

export const updateUser = async (values, id) => {
    const { name, lastname, password, city, state, country, suburb, street, number, zipCode, phoneNumber, facebook, instagram, www, profilePic, coverPhoto } = values;
    const updateData = {
        profilePic,
        coverPhoto,
        name,
        lastname,
        password,
        location: {
            city,
            state,
            country,
            suburb,
            street,
            number,
            zipCode,
        },
        phoneNumber,
        socialNetwork: {
            facebook,
            instagram,
            www,
        },
    };
    const token = localStorage.getItem("token")
    const response = await fetch(`${USER_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updateData),
    });
    const data = await response.json();

    return data;
};
