import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const { REACT_APP_API_ENDPOINT } = process.env;
const USER_URL = `${REACT_APP_API_ENDPOINT}/sessions/`;

export const createSession = async (sessionData) => {
  const MySwal = withReactContent(Swal);

  const token = localStorage.getItem("token");
  let userId = "";
  if (token) {
    const payload = token.split(".")[1];
    userId = JSON.parse(atob(payload)).id;
  }
  sessionData = { ...sessionData, userId };
  const response = await fetch(`${USER_URL}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sessionData),
  });
  const data = await response.json();
  if (data.success === true) {
    MySwal.fire({
      title: <strong>Session creada con exito! </strong>,
      icon: `success`,
    });
    return data;
  }
  if (data.success !== true) {
    MySwal.fire({
      title: <strong>La session no pudo ser creada! </strong>,
      icon: `error`,
    });
    return data;
  }

  return data;
};
