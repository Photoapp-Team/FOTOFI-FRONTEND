import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./EditProfile.css";
import { Formik, Form, validateYupSchema } from "formik";
import CustomInput from "../../Inputs/CustomInput";
import { editSchema } from "../../schemas/index";
import Button from "../../Inputs/Button/Button";
import { updateUser } from "../../../services/updateUser";
import { useUser } from "../../../contexts/UserContext";
import ImageUpload from "../../../services/ImageUpload/ImageUpload"


const onSubmit = async (values, actions) => {
  updateUser(values);
  actions.resetForm();
};

const EditProfileForm = () => {
  const { user } = useUser();
  return (
    <div className="form-contain">
      <Box
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
        <Paper elevation={3}>
          <div className="">
            <h1 className="edit-profile-title">Edita tú perfil</h1>
            <Formik
              initialValues={{
                ...user,
                profilepic: "",
                name: `${user.name}`,
                lastname: `${user.lastname}`,
                email: `${user.email}`,
                username: `${user.username}`,
                password: `${user.password}`,
                city: `${user.city}`,
                suburb: `${user.suburb}`,
                street: `${user.street}`,
                number: `${user.number}`,
                zipCode: `${user.zipCode}`,
                phoneNumber: `${user.phoneNumber}`,
                webPage: `${user.webPage}`,
              }}
              validationSchema={editSchema}
              onSubmit={onSubmit}
            >
              {({ isSubmitting, setFieldValue }) => (
                <Form className="container-edit-profile">
                  <br />
                  <ImageUpload
                    phrase={"Arrastra tu foto de portada aqui o haz click"}
                    classbox={"boxAddservice2"}
                    classpaper={"paperAddservice2"}
                    name="profilePic"
                    setFieldValue={setFieldValue}
                    fieldName={"profilePic"}
                  />
                  <ImageUpload
                    phrase={"Arrastra tu foto de portada aqui o haz click"}
                    classbox={"boxAddservice2"}
                    classpaper={"paperAddservice2"}
                    name="coverPhoto"
                    setFieldValue={setFieldValue}
                    fieldName={"coverPhoto"}
                  />
                  <CustomInput
                    label="Nombre"
                    name="name"
                    type="text"
                  />
                  <CustomInput
                    label="Apellido"
                    name="lastname"
                    type="text"
                  />
                  <CustomInput
                    label="Email"
                    name="email"
                    type="email"
                  />
                  <CustomInput
                    label="Username"
                    name="username"
                    type="text"
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                  />
                  <CustomInput
                    label="City"
                    name="city"
                    type="text"
                  />
                  <CustomInput
                    label="Suburb"
                    name="suburb"
                    type="text"
                  />
                  <CustomInput
                    label="Street"
                    name="street"
                    type="text"
                  />
                  <CustomInput
                    label="Number"
                    name="number"
                    type="text"
                  />
                  <CustomInput
                    label="ZipCode"
                    name="zipCode"
                    type="text"
                  />
                  <CustomInput
                    label="Número telefonico"
                    name="phoneNumber"
                    type="number"
                  />
                  <CustomInput
                    label="Página Web"
                    name="webPage"
                    type="text"
                  />
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    text={"Submit"}
                    name={"Editar"}
                    className={"button-edit-profile"}
                  />
                </Form>
              )}
            </Formik>
          </div>
        </Paper>
      </Box>
    </div>
  );
};

export default EditProfileForm;
