import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const { REACT_APP_API_ENDPOINT } = process.env;
const USER_URL = `${REACT_APP_API_ENDPOINT}/sessions/session/rate`;

export const rateSession = async (rate, sessionId) => {
  const MySwal = withReactContent(Swal);
  const id = sessionId;
  const sessionRate = rate;
  const token = localStorage.getItem("token");

  const response = await fetch(`${USER_URL}/${id}`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ ratingValue: sessionRate }),
  });
  const data = await response.json();
  if (data.success === true) {
    MySwal.fire({
      title: <strong>¡Sesión calificada con éxito! </strong>,
      icon: `success`,
    });
    return data;
  }
  if (data.success !== true) {
    MySwal.fire({
      title: <strong>¡La sesión no pudo ser calificada! </strong>,
      icon: `error`,
    });
    return data;
  }
};
