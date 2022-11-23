import * as React from "react";
import "./SpecialityCard.css";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "../../Inputs/Button/Button";
import { useNavigate } from "react-router-dom";

export default function SpecialityCard({ userData }) {
  const { premium, photoTags } = userData;
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/MainPage");
  };

  if (premium.isPremium) {
    return (
      <>
        <Card
          className="specialitycard"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "inherit",
            py: 1,
          }}
        >
          <Box sx={{ display: "flex", width: "inherit", p: 1 }}>
            <Box>
              <Typography
                children={`Especializado en:`}
                sx={{ px: 2, fontSize: "18px", fontWeight: "600" }}
              />
            </Box>
          </Box>

          <Box
            className="speciality-container"
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "inherit",
              alignItems: "center",
              p: 1,
              border: "1px",
              borderRadius: "10px",
              mb: "10px",
            }}
          >
            {photoTags &&
              photoTags.map((photoTag, index) => {
                return (
                  <Box sx={{ p: 0.5 }}>
                    <Button
                      key={index}
                      name={photoTag}
                      className={"button-service-block"}
                      onClick={() => {
                        onClick();
                      }}
                    />
                  </Box>
                );
              })}
          </Box>
        </Card>
      </>
    );
  }
}
