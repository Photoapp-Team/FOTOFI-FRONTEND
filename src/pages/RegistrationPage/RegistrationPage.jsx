import React, { useState } from "react";
import UserRegistrationForm from "../../components/Forms/UserRegistrationForm";
import { ReactComponent as ReactLogo } from "../../assets/Logo/Logo.svg";
import "./RegistrationPage.css";
import { Container } from "@mui/system";
import { Card, Grid } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import PhotographerSession from "../../assets/images/photographersession.png";
import UserSession from "../../assets/images/usersession.png";
import PhotographerRegistrationForm from "../../components/Forms/PhotographerRegistrationForm/PhotographerRegistrationForm";


const RegistrationPage = () => {
  const [userType, setUserType] = useState(null);

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
            }}
          >
            <Grid item xs={12}>
              <Typography
                gutterBottom
                variant="h2"
                component="div"
                children="¿Cómo te gustaría registrarte?"
                align="center"
                mt={3}
                sx={{color:"white"}}
                

              />
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <CardActionArea
                  onClick={() => {
                    setUserType("Photographer");
                  }}
                >
                  <img
                    src={PhotographerSession}
                    alt="CAMERA ICON" 
                    style= {{aspectRatio:"4/3", width:"100%", left: "100%", bottom: "100%" }}
                    
                  
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      children="Como fotógrafo"
                      align="center"
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card>
                <CardActionArea
                  onClick={() => {
                    setUserType("User");
                  }}
                >
                   <img 
                   src={UserSession}
                   alt="USER SESSION" 
                   style= {{aspectRatio:"4/3", width:"100%" }}
                   
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
              <>
                <PhotographerRegistrationForm />{" "}
              </>
            ) : (
              <></>
            )}
            {userType === "User" ? (
              <Grid item xs={12} md={4} mdOffset={2} className="userRegistrationContainer">
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
