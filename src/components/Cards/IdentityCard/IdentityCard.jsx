import * as React from "react";
import "./IdentityCard.css";
import { Card, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "../../Inputs/Button/Button";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function IdentityCard({ userData, isPremium, isOwner, isPhotographer }) {
  const navigate = useNavigate();
  const { name, lastname, role, profilePic, _id } = userData;
  const [showGoProButton, setShowGoProButton] = useState(false);

  const handleEditProfile = () => {
    navigate(`/editprofile/${_id}`);
  };
  const handleGoPro = () => {
    navigate(`/Payment/${userData._id}`);
  };

  useEffect(() => {
    if (isPhotographer && isPremium === false) {
      setShowGoProButton(true);
    }
  }, [isPhotographer, isPremium]);

  return (
    <>
      <Card
        className="identitycard"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Avatar
          className="user-avatar"
          alt="USER PROFILE PIC"
          src={profilePic}
          sx={{ width: 70, height: 70, m: 2 }}
        />
        <Typography
          children={`${name} ${lastname}`}
          variant="h5"
          sx={{ p: 1, fontWeight: "700", fontSize: "26px" }}
        />
        <Typography
          children={role === "Photographer" ? "Fotógrafo" : "Usuario"}
          sx={{ p: 1, fontWeight: "600", fontSize: "16px" }}
        />
        {isOwner && (
          <>
            <Button name={"Editar Perfil"} className={"buttonLogin"} onClick={handleEditProfile}>
              Editar mi perfil
            </Button>
            {showGoProButton && (
              <>
                <Typography
                  children="Tus datos de contacto solo se mostraran a los usuarios si pagas la suscripcion PRO"
                  variant="h6"
                  textAlign="center"
                  sx={{ p: 1 }}
                />
                <Button name={"Volverse PRO"} className={"go-pro-button"} onClick={handleGoPro} />
              </>
            )}
          </>
        )}
      </Card>
    </>
  );
}
