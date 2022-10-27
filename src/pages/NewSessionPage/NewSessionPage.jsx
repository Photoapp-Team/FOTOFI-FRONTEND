import "./NewSessionPage.css";
import { useParams } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Formik, Form, Field } from "formik";
import { Navigate } from "react-router-dom";
import CustomInput from "../../components/Inputs/CustomInput";
import Button from "../../components/Button/Button";
import { createSession } from "../../services/createSession";

const NewSessionPage = () => {
  const params = useParams();
  const queryParams = new URLSearchParams(window.location.search);
  const photographerId = queryParams.get("photographerId");
  const [startDate, onChange] = useState(new Date());
  const token = localStorage.getItem("token");

  const onSubmit = (values, actions) => {
    if (token) {
      const sessionData = {
        ...values,
        startDate,
        package: params.id,
        photographerId,
      };
      createSession(sessionData);
      actions.resetForm();
      Navigate("/Profile");
    } else {
      alert("Tienes que estar logeado para crear session");
    }
  };

  return (
    <Container className="mainContainer" maxWidth="md" sx={{ p: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
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
