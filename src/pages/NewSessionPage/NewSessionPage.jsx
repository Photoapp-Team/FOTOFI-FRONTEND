import "./NewSessionPage.css";
import { useParams } from "react-router-dom";
import { Grid, Container, Alert } from "@mui/material";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Formik, Form, Field } from "formik";
import CustomInput from "../../components/Inputs/CustomInput";
import Button from "../../components/Inputs/Button/Button";
import { createSession } from "../../services/createSession";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Typography from "@mui/material/Typography";

const NewSessionPage = () => {
  const params = useParams();
  const { isUserLoggedIn, user } = useUser();
  const queryParams = new URLSearchParams(window.location.search);
  const photographerId = queryParams.get("photographerId");
  const [startDate, onChange] = useState(new Date());
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [alert, setAlert] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const onSubmit = (values, actions) => {
    if (token) {
      const sessionData = {
        ...values,
        startDate,
        package: params.id,
        photographerId,
      };
      console.log(user._id);
      createSession(sessionData);
      actions.resetForm();
      setAlertMessage("sesion creada con exito");
      setAlert("success");
      const timeout = setTimeout(() => {
        navigate(`/Profile/${user._id}`);
      }, 3000);
    } else {
      setAlertMessage("Tienes que estar logeado para crear session");
      setAlert("error");
    }
  };

  return (
    <Container className="mainContainer" maxWidth="md" sx={{ p: 4 }}>
      {alert ? <Alert severity={alert}>{alertMessage}</Alert> : <></>}
      <Typography
        sx={{ px: 4, pt: 2 }}
        className="filterTitle"
        variant="h4"
        component="div"
        children="Selecciona una fecha para agendar tu sessión"
        align="center"
        boxSizing="content-box"
      />
      <Grid container spacing={2} justifyContent="center" alignItems="center" height="inherit">
        <Grid item xs={12} md={8}>
          <Calendar onChange={onChange} value={startDate} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Formik initialValues={{}} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form className="new-session-form">
                <br />
                <CustomInput
                  className="comments-input"
                  label="Comments"
                  name="comments"
                  type="textarea"
                  placeholder="Envia tus comentarios de lo que necesitas al fotografo..."
                  rows="10"
                />

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  name={"Enviar"}
                  size="large"
                  className={"create-session"}
                />
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewSessionPage;
