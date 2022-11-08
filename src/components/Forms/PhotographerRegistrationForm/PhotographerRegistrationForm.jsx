import * as React from "react";
import Button from "@mui/material/Button";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import CustomInput from "../../Inputs/CustomInput";
import Confirm from "./Confirm";
import ImageUpload from "../../../services/ImageUpload";
import { Box } from "@mui/system";

const PhotographerRegistrationForm = () => {
  return (
    <>
      <MultiStepForm
        initialValues={{
          username: "",
          name: "",
          lastname: "",
          gender: "",
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
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        }}
      >
        <FormStep stepName="Información Básica" onSubmit={() => console.log("Step1 onSubmit")}>
          <Box sx={{ textAlign: "center", mb: 5 }}>
            <h3>Información Básica</h3>
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <ImageUpload
              phrase={"Tutututu"}
              classbox={"boxRegister1"}
              classpaper={"paperRegister1"}
              name="displayPhotos"
              fieldName={"displayPhotos"}
            />
            <CustomInput sx={{ m: 0.5 }} label="Nickname" name="username" type="text" />
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput sx={{ m: 0.5 }} label="Nombre" name="name" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Apellido" name="lastname" type="text" />
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput sx={{ m: 0.5 }} label="Genero" name="gender" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Email" name="email" type="email" />
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput
              sx={{ m: 0.5 }}
              label="Contraseña"
              name="password"
              type="password"
              size="small"
              autoComplete="new-password"
            />
            <CustomInput
              sx={{ m: 0.5 }}
              label="Confirmar contraseña"
              name="confirmPassword"
              type="password"
              size="small"
              autoComplete="new-password"
            />
          </Box>
        </FormStep>
        <FormStep stepName="Datos de contacto" onSubmit={() => console.log("Step2 onSubmit")}>
          <Box sx={{ textAlign: "center" }}>
            <h3>Dirección</h3>
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput sx={{ m: 0.5 }} label="País" name="country" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Ciudad" name="city" type="text" />
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput sx={{ m: 0.5 }} label="Estado" name="state" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Colonia" name="suburb" type="text" />
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput sx={{ m: 0.5 }} label="Calle" name="street" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Número de casa" name="number" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Código postal" name="zipCode" type="text" />
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <h3>Datos de Contacto</h3>
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput sx={{ m: 0.5 }} label="Número telefónico" name="phoneNumber" type="text" />
          </Box>
          <Box
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <CustomInput sx={{ m: 0.5 }} label="Facebook" name="facebook" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="Instagram" name="instagram" type="text" />
            <CustomInput sx={{ m: 0.5 }} label="www:" name="www:" type="text" />
          </Box>
        </FormStep>
        <FormStep stepName="Confirmación">
          <Confirm />
        </FormStep>
      </MultiStepForm>
    </>
  );
};

export default PhotographerRegistrationForm;
