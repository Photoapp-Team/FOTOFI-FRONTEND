import * as React from "react";
import "./ContactCard.css";
import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import WhereToVoteSharpIcon from "@mui/icons-material/WhereToVoteSharp";
import PhoneInTalkOutlinedIcon from "@mui/icons-material/PhoneInTalkOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function ConctactCard({ userData }) {
  const { location, premium } = userData;
  if (premium.isPremium) {
    return (
      <>
        <Card
          className="contactcard"
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            width: "auto",
            py: 1,
            px: 2,
          }}
        >
          <Grid
            container
            sx={{ display: "flex", justifyContent: "flex-start", width: "100%", pb: "5px" }}
          >
            <Grid
              item
              className="icon-box"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
              sm={2}
              md={2}
            >
              {location.city ? <WhereToVoteSharpIcon sx={{ fontSize: 30 }} /> : ""}
            </Grid>
            <Grid item sm={10} md={10} className="info-box">
              {location.city ? (
                <Typography
                  children={`Ciudad: ${location.city}`}
                  variant="subtitle1"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                />
              ) : (
                ""
              )}
              {location.street ? (
                <Typography
                  children={`Calle: ${location.street} ${location.number}`}
                  variant="subtitle1"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                />
              ) : (
                ""
              )}
              {location.suburb ? (
                <Typography
                  children={`Col. ${location.suburb}`}
                  variant="subtitle1"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                />
              ) : (
                ""
              )}
              {location.zipCode ? (
                <Typography
                  children={`C.P ${location.zipCode}`}
                  variant="subtitle1"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
          <Grid
            container
            sx={{ display: "flex", justifyContent: "flex-start", width: "100%", pb: "5px" }}
          >
            <Grid
              item
              sm={2}
              md={2}
              className="icon-box"
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                pb: 2,
              }}
            >
              {location.zipCode ? <PhoneInTalkOutlinedIcon sx={{ fontSize: 30 }} /> : ""}
            </Grid>
            <Grid
              item
              sm={10}
              md={10}
              className="info-box"
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              {userData.phoneNumber ? (
                <Typography
                  children={`${userData.phoneNumber}`}
                  variant="subtitle1"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                />
              ) : (
                ""
              )}
            </Grid>
            <Grid
              item
              sm={2}
              md={2}
              className="icon-box"
              sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}
            >
              <MarkEmailReadOutlinedIcon sx={{ fontSize: 30 }} />
            </Grid>
            <Grid
              item
              sm={10}
              md={10}
              className="info-box"
              sx={{ display: "flex", alignItems: "flex-start" }}
            >
              {userData.email ? (
                <Typography
                  children={`${userData.email}`}
                  variant="subtitle1"
                  sx={{ fontSize: "18px", fontWeight: "600" }}
                />
              ) : (
                ""
              )}
            </Grid>
          </Grid>
          <Grid container sx={{ display: "flex", justifyContent: "center", width: "100%", pt: 3 }}>
            <Grid
              item
              sm={4}
              md={4}
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              {userData?.socialNetwork?.instagram ? (
                <a href={userData.socialNetwork.instagram} className="linkContactCard">
                  <InstagramIcon sx={{ fontSize: 30 }} />
                </a>
              ) : (
                <InstagramIcon sx={{ fontSize: 30 }} />
              )}
            </Grid>
            <Grid
              item
              sm={4}
              md={4}
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              {userData?.socialNetwork?.www ? (
                <a href={userData.socialNetwork.www} className="linkContactCard">
                  <LanguageOutlinedIcon sx={{ fontSize: 30 }} />
                </a>
              ) : (
                <LanguageOutlinedIcon sx={{ fontSize: 30 }} />
              )}
            </Grid>
            <Grid
              item
              sm={4}
              md={4}
              className="icon-box"
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", p: 1 }}
            >
              {userData?.socialNetwork?.facebook ? (
                <a href={userData.socialNetwork.facebook} className="linkContactCard">
                  <FacebookIcon sx={{ fontSize: 30 }} />
                </a>
              ) : (
                <FacebookIcon sx={{ fontSize: 30, opacity: "0.4" }} />
              )}
            </Grid>
          </Grid>
        </Card>
      </>
    );
  } else {
    return <></>;
  }
}
