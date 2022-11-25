import * as React from "react";
import "./IdentityCard.css";
import { Button, Card, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
        {isOwner && (
          <>
            <Button
              name="Editar Perfil"
              variant="secondary"
              children="Editar Perfil"
              onClick={() => {
                handleEditProfile();
              }}
              sx={{ my: "16px" }}
              className="button-identity-card"
            />
            {showGoProButton && (
              <>
                <Typography
                  children="Tus datos de contacto solo se mostraran a los usuarios si pagas la suscripcion PRO"
                  variant="h6"
                  textAlign="center"
                  sx={{ p: 1 }}
                />
                <Button
                  name="Volverse PRO"
                  variant="PRO"
                  children="Volverse PRO"
                  onClick={() => {
                    handleGoPro();
                  }}
                  sx={{ my: "16px" }}
                  className="button-identity-card2"
                />
              </>
            )}
          </>
        )}
      </Card>
    </>
  );
}
