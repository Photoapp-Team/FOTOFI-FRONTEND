import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Button from "../../components/Inputs/Button/Button";
import "./PayResponsePage.css";
import { useNavigate, useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";

const PayResponsePage = () => {
  let [success, setSuccess] = useState(null);
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Profile/${id}`);
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    setSuccess(query.get("success"));
  }, []);

  return (
    <>
      <div className="payment-response-page">
        <Paper
          className="payment-response-container"
          sx={{
            minWidth: 320,
            minHeight: 400,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 2,
          }}
          elevation={7}
        >
          {success ? (
            <Typography
              variant="h3"
              children="Felicidades!! tu cuenta ha sido activada con exito"
            />
          ) : (
            <Typography variant="h3" children="El pago no pudo ser completado con exito" />
          )}

          <Button name={"Ir a mi perfil"} className={"buttonLogin"} onClick={handleClick}>
            I a mi perfil
          </Button>
        </Paper>
      </div>
    </>
  );
};

export default PayResponsePage;
