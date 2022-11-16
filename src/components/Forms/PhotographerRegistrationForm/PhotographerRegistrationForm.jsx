import * as React from "react";
import { useNavigate } from "react-router-dom";
import { createPhotographer } from "../../../services/registerPhotographer";
import { updateProfilePic } from "../../../services/updateProfilePhotos";
import MultiStepForm from "./MultiStepForm/MultiStepForm";
import "./PhotographerRegistrationForm.css";

const PhotographerRegistrationForm = () => {
  const navigate = useNavigate();
  const emptyOption = { label: "Por favor selecciona una opción", value: "default" };

  const onSubmit = async (values) => {
    const photographer = await createPhotographer(values);
    navigate("/");
  };

  return (
    <>
      <MultiStepForm onSubmit={onSubmit} />
    </>
  );
};

export default PhotographerRegistrationForm;
