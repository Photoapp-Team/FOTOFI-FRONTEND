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
import { useUser } from "../../contexts/UserContext";

const NewSessionPage = () => {
  const params = useParams();
  const { createSession } = useUser();
  const [dateValue, onChange] = useState(new Date());
  const { REACT_APP_API_ENDPOINT } = process.env;
  const url = `${REACT_APP_API_ENDPOINT}/packages/${params.id}`;

  const onSubmit = (values, actions) => {
    const sessionData = { ...values, dateValue };
    createSession(sessionData);
    actions.resetForm();
    Navigate("/Profile");
  };

  return (
    <Container className="mainContainer" maxWidth="md" sx={{ p: 4 }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8}>
          <Calendar onChange={onChange} value={dateValue} />
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
