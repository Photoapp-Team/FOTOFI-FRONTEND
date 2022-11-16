import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const { REACT_APP_API_ENDPOINT } = process.env;
const URL = `${REACT_APP_API_ENDPOINT}/packages`;

export const deletePackage = async (packageId) => {
  const MySwal = withReactContent(Swal);

  const token = localStorage.getItem("token");
  let userId = "";
  if (token) {
    const payload = token.split(".")[1];
    userId = JSON.parse(atob(payload)).id;
  }

  const response = await fetch(`${URL}/${packageId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.success === true) {
    MySwal.fire({
      title: <strong>Paquete eliminado con exito! </strong>,
      icon: `success`,
    });
    return data;
  }
  if (data.success !== true) {
    MySwal.fire({
      title: <strong>El paquete no pudo ser eliminado! </strong>,
      icon: `error`,
    });
    return data;
  }

  return data;
};
