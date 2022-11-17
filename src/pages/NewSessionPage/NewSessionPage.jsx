import "./NewSessionPage.css";
import { useParams } from "react-router-dom";
import { Grid, Container } from "@mui/material";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Formik, Form } from "formik";
import CustomInput from "../../components/Inputs/CustomInput";
import Button from "../../components/Inputs/Button/Button";
import { createSession } from "../../services/createSession";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { dateFormater } from "../../services/dateFormater";
import Typography from "@mui/material/Typography";
import useFetchAvailableDates from "../../services/FetchServices/useFetchAvailableDates";

const NewSessionPage = () => {
  const MySwal = withReactContent(Swal);
  const params = useParams();
  const { user } = useUser();
  const queryParams = new URLSearchParams(window.location.search);
  const photographerId = queryParams.get("photographerId");
  const [startDate, onChange] = useState(new Date());
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const availableDates = useFetchAvailableDates(photographerId).data;
  const avaiableDatesArray = [];
  if (availableDates) {
    availableDates.forEach((date) => {
      const newDate = new Date(date);
      avaiableDatesArray.push(String(newDate));
    });
  }

  const onSubmit = async (values, actions) => {
    if (token) {
      const sessionData = {
        ...values,
        startDate,
        package: params.id,
        photographerId,
      };
      const date = dateFormater(sessionData.startDate);

      Swal.fire({
        title: `Quieres crear una session para el ${date}`,
        icon: `question`,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
      }).then((result) => {
        if (result.isConfirmed) {
          createSession(sessionData).then((sessionResult) => {
            navigate(`/Profile/${user._id}`);
          });
        }
      });
    } else {
      Swal.fire({
        title: `Tienes que estar logeado para cerar una session`,
        icon: `error`,
      });
    }
  };

  return (
    <Container
      className="mainContainer"
      maxWidth="md"
      sx={{
        p: 4,
        alignItems: "center",
        justifyContent: "space-evenly",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{ px: 4, pt: 2 }}
        className="filterTitle"
        variant="h4"
        component="div"
        children="Selecciona una fecha para agendar tu sessión"
        align="center"
        boxSizing="content-box"
      />
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={8} display="flex" justifyContent="center" alignItems="center">
          {availableDates && (
            <Calendar
              onChange={onChange}
              value={startDate}
              minDate={startDate}
              tileDisabled={(myDates, date) => {
                console.log(avaiableDatesArray);

                if (avaiableDatesArray.includes(String(myDates.date))) {
                  return true;
                }
              }}
            />
          )}
        </Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent="center" alignItems="center">
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
