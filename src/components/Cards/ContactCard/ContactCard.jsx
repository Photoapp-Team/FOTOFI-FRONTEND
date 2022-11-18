import * as React from "react";
import "./ContactCard.css";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WhereToVoteSharpIcon from "@mui/icons-material/WhereToVoteSharp";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Button from "../../Inputs/Button/Button";
import { Link } from "react-router-dom";

export default function ConctactCard({ userData }) {
  const { location, premium } = userData;
  if (premium.isPremium) {
    return (
      <>
        <Card
          className="contactcard"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "inherit",
            py: 1,
          }}
        >
          {/* <Button name={"Contactar"} className={"buttonLogin"}>
            Contactar
          </Button> */}
          <Box sx={{ display: "flex", justifyContent: "flex-start", width: "inherit" }}>
            <Box
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              <WhereToVoteSharpIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box className="info-box">
              <Typography
                children={`Ciudad: ${location.city}`}
                variant="subtitle1"
                sx={{ fontSize: "18px", fontWeight: "600" }}
              />
              <Typography
                children={`Calle: ${location.street} ${location.number}`}
                variant="subtitle1"
                sx={{ fontSize: "18px", fontWeight: "600" }}
              />
              <Typography
                children={`Col. ${location.suburb}`}
                variant="subtitle1"
                sx={{ fontSize: "18px", fontWeight: "600" }}
              />
              <Typography
                children={`C.P ${location.zipCode}`}
                variant="subtitle1"
                sx={{ fontSize: "18px", fontWeight: "600" }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", width: "inherit" }}>
            <Box
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              <PhoneInTalkOutlinedIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box className="info-box" sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                children={`${userData.phoneNumber}`}
                variant="subtitle1"
                sx={{ fontSize: "18px", fontWeight: "600" }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-start", width: "inherit" }}>
            <Box
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              <MarkEmailReadOutlinedIcon sx={{ fontSize: 30 }} />
            </Box>
            <Box className="info-box" sx={{ display: "flex", alignItems: "center" }}>
              <Typography
                children={`${userData.email}`}
                variant="subtitle1"
                sx={{ fontSize: "18px", fontWeight: "600" }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", width: "inherit", pt: 3 }}>
            <Box
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              <a href={userData.socialNetwork.instagram} className="linkContactCard">
                <InstagramIcon sx={{ fontSize: 30 }} />
              </a>
            </Box>
            <Box
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              <a href={userData.socialNetwork.www} className="linkContactCard">
                <LanguageOutlinedIcon sx={{ fontSize: 30 }} />
              </a>
            </Box>
            <Box
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              <a href={userData.socialNetwork.facebook} className="linkContactCard">
                <FacebookIcon sx={{ fontSize: 30 }} />
              </a>
            </Box>
          </Box>
        </Card>
      </>
    );
  } else {
    return <></>;
  }
}
