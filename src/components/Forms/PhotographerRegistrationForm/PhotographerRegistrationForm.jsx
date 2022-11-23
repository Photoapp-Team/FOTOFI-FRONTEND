import * as React from "react";
import { useNavigate } from "react-router-dom";
import { createPhotographer } from "../../../services/registerPhotographer";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./PhotographerRegistrationForm.css";

const PhotographerRegistrationForm = () => {
  const navigate = useNavigate();
  const emptyOption = { label: "Por favor selecciona una opción", value: "default" };
  const MySwal = withReactContent(Swal);

  const onSubmit = async (values) => {

    console.log(values);
    if (values.checked) {
      const photographer = await createPhotographer(values);
      if (photographer) {
        MySwal.fire({
          title: <strong>Bienvenido a Fotofi!</strong>,
          icon: "success",
        });
        navigate("/MainPage");
      }
    } else {
      MySwal.fire({
        title: <strong>Por favor Acepta los términos</strong>,
        icon: `error`,
      });
    }
  };

  return (
    <>
      <MultiStepForm onSubmit={onSubmit} />
    </>
  );
};

export default PhotographerRegistrationForm;
