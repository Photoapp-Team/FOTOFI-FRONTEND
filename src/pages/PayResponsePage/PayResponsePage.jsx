import { Typography } from "@mui/material";
import React from "react";
import Button from "../../components/Inputs/Button/Button";
import "./PayResponsePage.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Paper from "@mui/material/Paper";

const PayResponsePage = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Profile/${id}`);
  };

  return (
    <>
      <div className="payment-page">
        <Paper
          className="profile-info-container"
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
          <Typography variant="h3" children="Felicidades!! tu cuenta ha sido activada con exito" />
          <Button name={"Ir a mi perfil"} className={"buttonLogin"} onClick={handleClick}>
            I a mi perfil
          </Button>
        </Paper>
      </div>
    </>
  );
};

export default PayResponsePage;
