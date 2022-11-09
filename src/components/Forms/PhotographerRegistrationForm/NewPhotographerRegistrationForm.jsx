import * as React from "react";
import NewMultiStepForm from "./NewMultiStepForm";

const NewPhotographerRegistrationForm = () => {
  const emptyOption = { label: "Por favor selecciona una opción", value: "default" };

  return (
    <>
      <NewMultiStepForm
        initialValues={{
          username: "",
          name: "",
          lastname: "",
          gender: emptyOption.value,
          email: "",
          password: "",
          confirmPassword: "",
          country: "",
          city: "",
          state: "",
          suburb: "",
          street: "",
          number: "",
          zipCode: "",
          phoneNumber: "",
          facebook: "",
          instagram: "",
          www: "",
          photoTags: [],
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      />
    </>
  );
};

export default NewPhotographerRegistrationForm;
