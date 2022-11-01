import React from 'react';
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import "./EditProfile.css";
import { Formik, Form, validateYupSchema } from "formik";
import CustomInput from "../Inputs/CustomInput";
import { editSchema } from "../schemas";
//import Button from "../Button/Button";
import { updateUser } from "../../services/updateUser";

const onSubmit = async (values, actions) => {
  updateUser(values);
  console.log(values);
  actions.resetForm();
};

const EditProfileForm = () => {
  return (
    <div className="form-contain">
      {/* <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 550,
            height: 600,
          },
        }}
      >
        <Paper elevation={3}> */}
      <div className="">
        <h1 className="edit-profile-title">Edita tú perfil</h1>
        <Formik
          initialValues={{ lastname: "", name: "", email: "" }}
          validationSchema={editSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="container-edit-profile">
              <br />
              <CustomInput
                label="Nombre"
                name="name"
                type="text"
              //placeholder="Ingresa tu nombre"
              />
              <CustomInput
                label="Apellido"
                name="lastname"
                type="text"
              //placeholder="Ingresa tu apellido"
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
              //placeholder="Ingresa tu nuevo email"
              />
              <CustomInput
                label="Ubicación"
                name="location"
                type="text"
              //placeholder="Ingresa tu nueva ubicación"
              />
              <CustomInput
                label="Número telefonico"
                name="phoneNumber"
                type="number"
              //placeholder="Ingresa número telefónico"
              />
              <CustomInput
                label="Página Web"
                name="webPage"
                type="text"
              //placeholder="Ingresa página WEB"
              />
              {/* <Button
                    disabled={isSubmitting}
                    type="submit"
                    text={"Submit"}
                    name={"Editar"}
                    className={"button-edit-profile"}
                  /> */}
            </Form>
          )}
        </Formik>
      </div>
      {/* </Paper>
      </Box> */}
    </div>
  )
}

export default EditProfileForm;