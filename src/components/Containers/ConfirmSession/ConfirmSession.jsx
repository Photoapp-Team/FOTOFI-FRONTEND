import { Box, CssBaseline, Divider, Paper } from "@mui/material";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { updateSession } from "../../../services/updateSession";
import Button from "../../Inputs/Button/Button";
import CustomInput from "../../Inputs/CustomInput";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./ConfirmSession.css";
import { dateFormater } from "../../../services/dateFormater";

const ConfirmSession = ({ sessionId, data, sessionUser, setStatusWorkspace, statusWorkspace }) => {
  const [approveSession, setApproveSession] = useState(false);

  const onClick = async (value) => {
    if (value === "confirm") {
      setApproveSession(true);
    } else if (value === "reject") {
      const newValue = {
        status: {
          cancelled: Date.now(),
        },
      };
      updateSession(sessionId, newValue);
      setStatusWorkspace("cancelled");
    }
  };

  const onSubmit = async (values, actions) => {
    const newValues = {
      ...values,
      status: {
        scheduled: Date.now(),
      },
    };
    const updatedSession = updateSession(sessionId, newValues);
    setStatusWorkspace("1");
  };

  let fecha = dateFormater(data.startDate);
  return (
    <>
      {!approveSession && (
        <Card sx={{ maxWidth: 695, height: "auto", mx: "auto", my: "5%" }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="text.secondary"
              gutterBottom
            >
              Aviso de nueva sesión
            </Typography>
            <Divider variant="middle" />
            <Typography
              margin="auto"
              width={"70%"}
              variant="h5"
              component="div"
              textAlign={"center"}
            >
              {sessionUser.name} {sessionUser.lastname} te ha solicitado una nueva sesión para el
              dia:
              <br /> {fecha}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary"></Typography>
            <Typography margin="auto" width={"70%"} variant="subtitle1" textAlign={"center"}>
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
        <>
          <CssBaseline />
          <Formik
            initialValues={{}}
            // validationSchema={addServiceSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting, setFieldValue, values }) => (
              <Paper sx={{ width: 500, height: "auto", m: "auto", borderRadius: 4 }}>
                <Form
                  sx={{
                    display: "flex",
                    width: 250,
                    m: "auto",
                    p: 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box sx={{ m: "auto", textAlign: "center" }}>
                    <h1>Detalles de la sesión</h1>
                  </Box>
                  <Divider variant="middle" />
                  <Box sx={{ m: "auto", textAlign: "center" }}>
                    <h2>Configura la sesión</h2>
                  </Box>
                  <Box sx={{ m: "auto", textAlign: "center" }}>
                    <h4 className="confirmSessionText">Precio</h4>

                    <CustomInput
                      sx={{ width: 250 }}
                      label="Precio"
                      name="price"
                      type="text"
                      placeholder="Precio"
                      size="small"
                    />
                  </Box>
                  <Box sx={{ m: "auto", textAlign: "center" }}>
                    <h4 className="confirmSessionText">¿Cuántas fotos incluye? (Preview)</h4>
                    <Box sx={{ m: "auto", textAlign: "center" }}>
                      <CustomInput
                        sx={{ width: 250 }}
                        label="Fotos sin Editar"
                        name="quantityPrevPhotos"
                        type="text"
                        placeholder="Min"
                        size="small"
                      />
                    </Box>
                  </Box>
                  <Box sx={{ m: "auto", textAlign: "center" }}>
                    <h4 className="confirmSessionText">¿Cuántas fotos vas a entregar? </h4>
                    <Box sx={{ m: "auto", textAlign: "center" }}>
                      <CustomInput
                        sx={{ width: 250 }}
                        label="Fotos Editadas"
                        name="quantityFinalPhotos"
                        type="text"
                        placeholder="Min"
                        size="small"
                      />
                    </Box>
                  </Box>
                  <Box sx={{ m: "auto", textAlign: "center" }}>
                    <h4 className="confirmSessionText">Tiempo estimado de entrega</h4>
                    <CustomInput
                      sx={{ width: 250 }}
                      label="Tiempo"
                      name="deliveryTime"
                      type="text"
                      placeholder="Tiempo"
                      size="small"
                    />
                  </Box>
                  <Box sx={{ display: "flex", m: "auto", justifyContent: "center", my: 5 }}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      text={"Submit"}
                      name={"Aceptar"}
                      className={"buttonApproveSession"}
                    />
                  </Box>
                </Form>
              </Paper>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default ConfirmSession;
