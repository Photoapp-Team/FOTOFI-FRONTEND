import React from "react";
import UserRegistrationForm from "../../components/Forms/UserRegistrationForm";
import { ReactComponent as ReactLogo } from "../../assets/Logo/Logo.svg";
import "./RegistrationPage.css";
import { Container } from "@mui/system";
import { Card, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import PhotographerRegistrationForm from "../../components/Forms/PhotographerRegistrationForm";
const RegistrationPage = () => {
  const [userType, setUserType] = React.useState(null);

  return (
    <div className="page-container">
      <Container>
        {userType == null ? (
          <Grid
            className="main-container"
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                children="Como te gustaria registrarte?"
                align="center"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => {
                    setUserType("Photographer");
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://cdn-icons-png.flaticon.com/512/4551/4551689.png"
                    alt="CAMERA ICON"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      children="Como fotografo"
                      align="center"
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => {
                    setUserType("User");
                  }}
                >
                  <CardMedia
                    component="img"
                    height="250"
                    image="https://cdn-icons-png.flaticon.com/512/4633/4633099.png"
                    alt="USER ICON"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      children="Como usuario"
                      align="center"
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Grid
            className="main-container"
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {userType === "User" ? (
              <Grid item className="logo-container" xs={0} md={4}>
                <ReactLogo color="white" />
              </Grid>
            ) : (
              <></>
            )}

            {userType === "Photographer" ? (
              <Grid item xs={12} md={12}>
                <PhotographerRegistrationForm />{" "}
              </Grid>
            ) : (
              <></>
            )}
            {userType === "User" ? (
              <Grid item xs={12} md={4}>
                <UserRegistrationForm />
              </Grid>
            ) : (
              <></>
            )}
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default RegistrationPage;
