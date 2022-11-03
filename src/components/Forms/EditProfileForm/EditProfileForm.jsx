import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./EditProfile.css";
import { Formik, Form, validateYupSchema } from "formik";
import CustomInput from "../../Inputs/CustomInput";
import { editSchema } from "../../schemas/index";
import Button from "../../Inputs/Button/Button";
import { updateUser } from "../../../services/updateUser";
//import { useUser } from "../../../contexts/UserContext";
import ImageUpload from "../../../services/ImageUpload/ImageUpload"
import useFetchUser from "../../../services/FetchServices/useFetchUser";
import { useNavigate, useParams } from "react-router-dom";
import { updateProfilePic } from "../../../services/updateProfilePhotos";



const EditProfileForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params
  const { REACT_APP_API_ENDPOINT } = process.env
  const URL = `${REACT_APP_API_ENDPOINT}/users/6350b364ada26911fb09a1a7`
  const { data } = useFetchUser(URL)
  const handleOnSubmit = (values, actions) => {
    console.log(values, actions)
    updateProfilePic(values, id);
    updateUser(values, id);
    navigate(`/profile/${id}`)
    actions.resetForm();
  };
  let user = ""
  if (data) {
    console.log(data);
    user = data
  }
  return (
    <>{user && <div className="form-contain">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 550,
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
                password: `${user.password}`,
                city: `${user.location.city}`,
                suburb: `${user.location.suburb}`,
                street: `${user.location.street}`,
                number: `${user.location.number}`,
                zipCode: `${user.location.zipCode}`,
                phoneNumber: `${user.phoneNumber}`,
                // webPage: `${user.data.webPage}`,
              }}
              validationSchema={editSchema}
              onSubmit={handleOnSubmit}
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
                    label="Número telefónico"
                    name="phoneNumber"
                    type="number"
                  />
                  {/* <CustomInput
                    label="Página Web"
                    name="webPage"
                    type="text"
                  /> */}
                  {/* <input type="submit" value="enviar" /> */}
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
    }</>);
};

export default EditProfileForm;
