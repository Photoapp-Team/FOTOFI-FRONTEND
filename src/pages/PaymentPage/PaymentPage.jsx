import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import "./PaymentPage.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Button from "../../components/Inputs/Button/Button";
import Link from "@mui/material/Link";

const PaymentPage = () => {
  const params = useParams();
  const { id } = params;

  const navigate = useNavigate();
  return (
    <Box
      className="payment-page-container"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box className="payment-page-background"></Box>
      <Box
        className="payment-banner"
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Paper className="title-container">
          <Typography
            variant="h3"
            children="Paga mensualmente y obten excelentes beneficios"
            className="page-title"
          />
        </Paper>
      </Box>
      <Box
        className="payment-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          className="typography-Style"
          align="center"
          sx={{
            m: 3,
          }}
          gutterBottom
        >
          Aviso de Privacidad FOTOFI S.A.
        </Typography>
        <Typography
          align="center"
          variant="body1"
          sx={{
            marginBottom: "2rem",
          }}
        >
          Los datos personales que nos proporciona son utilizados estrictamente en la realización de
          funciones propias de nuestra empresa y por ningún motivo serán transferidos a terceros.
        </Typography>
        <Typography
          align="center"
          variant=""
          sx={{
            marginBottom: "2rem",
          }}
        >
          A nuestros clientes les notificamos que sus datos personales que registren dentro de
          nuestra plataforma serán públicos, FOTOFI no se hace responsable del mal manejo de la
          información proporcionada.
        </Typography>
        <Button
          type="submit"
          name={"LO QUIERO"}
          className={"button-login"}
          onClick={() => {
            navigate(`/Suscription/${id}`);
          }}
        ></Button>
        <Link to={`/profile/${id}`} variant="body2">
          No quiero este increíble beneficio
        </Link>
      </Box>
    </Box>
  );
};

export default PaymentPage;
