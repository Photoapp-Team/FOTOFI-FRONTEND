import * as React from "react";
import "./SpecialityCard.css";
import { Card, Grid, Typography } from "@mui/material";
import { useUser } from "../../../contexts/UserContext";
import { Box } from "@mui/system";
import Button from "../../Inputs/Button/Button";
export default function SpecialityCard({ userData }) {
  const { premium, photoTags } = userData;
  const { user } = useUser();
  console.log(user);
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
            <Box className="info-box">
              <Typography children={`Especializado en:`} variant="h5" sx={{ px: 1 }} />
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
            }}
          >
            {photoTags &&
              photoTags.map((photoTag, index) => {
                return (
                  <Box sx={{ p: 0.5 }}>
                    <Button key={index} name={photoTag} className={"button-service-block"} />
                  </Box>
                );
              })}
          </Box>
        </Card>
      </>
    );
  }
}
