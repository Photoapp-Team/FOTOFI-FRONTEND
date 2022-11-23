import { Box, CssBaseline, Divider, FormControl, Grid, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { updateSession } from "../../../services/updateSession";
import Button from "../../Inputs/Button/Button";
import CustomInput from "../../Inputs/CustomInput";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { dateFormater } from "../../../services/dateFormater";
import { confirmSessionSchema } from "../../schemas";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./ConfirmSession.css";

const ConfirmSession = ({ sessionId, data, sessionUser, setStatusWorkspace, statusWorkspace }) => {
  const [approveSession, setApproveSession] = useState(false);
  const MySwal = withReactContent(Swal);

  const onClick = async (value) => {
    if (value === "confirm") {
      setApproveSession(true);
    } else if (value === "reject") {
      const newValue = {
        status: {
          cancelled: Date.now(),
        },
      };
      const updatedSession = await updateSession(sessionId, newValue);
      if (updatedSession) {
        MySwal.fire({
          title: <strong>Sesión Cancelada!</strong>,
          text: "La sesión fue cancelada",
          icon: `error`,
        });
        setStatusWorkspace(updatedSession);
      }
    }
  };

  const onSubmit = async (values) => {
    const newValues = {
      ...values,
      status: {
        scheduled: Date.now(),
      },
    };
    const updatedSession = await updateSession(sessionId, newValues);
    if (updatedSession) {
      MySwal.fire({
        title: <strong>Sesión Confirmada!</strong>,
        icon: `success`,
      });
      setStatusWorkspace(updatedSession);
    }
  };

  let fecha = dateFormater(data.startDate);
  return (
    <>
      {!approveSession && (
        <Card sx={{ maxWidth: 695, height: "auto", mx: "auto", my: "5%" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold", ml: "1rem" }}
              color="text.secondary"
              gutterBottom
            >
              Aviso de nueva sesión
            </Typography>
            <Divider variant="middle" />
            <Typography
              margin="auto"
              width={"90%"}
              component="div"
              textAlign={"initial"}
              sx={{ fontSize: "22px" }}
            >
              {sessionUser.name} {sessionUser.lastname} te ha solicitado una nueva sesión para el
              dia:
              <br /> {fecha}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography margin="auto" width={"80%"} variant="subtitle1" textAlign={"initial"}>
              Si ya te contacto, tienes los detalles y estás de acuerdo por favor confirma, de lo
              contrario cancela.
            </Typography>
          </CardContent>
          <CardActions>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
              <Button
                size="small"
                type="submit"
                text={"Submit"}
                name={"Confirmar"}
                value="confirm"
                className={"buttonApproveSession"}
                onClick={() => onClick("confirm")}
              />
              <Button
                size="small"
                type="submit"
                text={"Submit"}
                name={"Cancelar"}
                value="confirm"
                className={"buttonApproveSessionRej"}
                onClick={() => onClick("reject")}
              />
            </Box>
          </CardActions>
        </Card>
      )}
      {approveSession && (
        <Box sx={{ mt: "50px", height: "100vh" }}>
          <CssBaseline />
          <Formik
            initialValues={{
              name: "",
              location: "",
              price: "",
              quantityPrevPhotos: "",
              quantityFinalPhotos: "",
              deliveryTime: "",
            }}
            validationSchema={confirmSessionSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, values }) => (
              <Paper
                elevation={8}
                sx={{
                  maxWidth: 500,
                  height: "auto",
                  mx: "auto",
                  borderRadius: 4,
                  pb: "20px",
                  mb: "10px",
                }}
              >
                <Form>
                  <Grid
                    container
                    spacing={1}
                    sx={{ px: 10 }}
                    className="gridContainerConfirmSession"
                  >
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start" }}>
                      <h1>Detalles de la sesión</h1>
                    </Grid>
                    <Divider variant="middle" />
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start" }}>
                      <h2>Configura la sesión</h2>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", lineHeight: "1px" }}>
                      <h4>Nombre de la Sesión</h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <CustomInput
                          fullWidth
                          label="Nombre"
                          name="name"
                          type="text"
                          placeholder="Nombre"
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", lineHeight: "1px" }}>
                      <h4>Lugar donde será la sesión</h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <CustomInput
                          fullWidth
                          label="Locación"
                          name="location"
                          type="text"
                          placeholder="Locación"
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", lineHeight: "1px" }}>
                      <h4>Precio</h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <CustomInput
                          fullWidth
                          label="Precio"
                          name="price"
                          type="text"
                          placeholder="Precio"
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", lineHeight: "1px" }}>
                      <h4>¿Cuántas fotos incluye? (Preview)</h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <CustomInput
                          fullWidth
                          label="Fotos sin Editar"
                          name="quantityPrevPhotos"
                          type="text"
                          placeholder="Min"
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", lineHeight: "1px" }}>
                      <h4>¿Cuántas fotos vas a entregar? </h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <CustomInput
                          fullWidth
                          label="Fotos Editadas"
                          name="quantityFinalPhotos"
                          type="text"
                          placeholder="Min"
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", lineHeight: "1px" }}>
                      <h4>Tiempo estimado de entrega</h4>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <FormControl fullWidth>
                        <CustomInput
                          fullWidth
                          label="Tiempo"
                          name="deliveryTime"
                          type="text"
                          placeholder="Tiempo"
                          size="small"
                        />
                      </FormControl>
                    </Grid>
                    <Box sx={{ display: "flex", m: "auto", justifyContent: "flex-start", my: 5 }}>
                      <Button
                        disabled={isSubmitting}
                        type="submit"
                        text={"Submit"}
                        name={"Aceptar"}
                        className={"buttonApproveSession"}
                      />
                    </Box>
                  </Grid>
                </Form>
              </Paper>
            )}
          </Formik>
        </Box>
      )}
    </>
  );
};

export default ConfirmSession;
