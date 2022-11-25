import { Grid, Paper, Typography } from "@mui/material";
import { borderRadius, Container, padding } from "@mui/system";
import React from "react";
import Button from "../../components/Inputs/Button/Button";
import HeroPic from "../../assets/backgroundImages/sujeto2.png";
import WorkFlowPic from "../../assets/backgroundImages/FUNCIONAMIENT.png";
import WorkFlowMobilePic from "../../assets/backgroundImages/FUNCIONAMIENTO MOBILE.png";
import Marco from "../../assets/backgroundImages/marco.jpg";
import Gio from "../../assets/backgroundImages/Gio.jpeg";
import Ara from "../../assets/backgroundImages/ara.jpeg";
import LuisR from "../../assets/backgroundImages/LuisR.jpg";
import "./LandingPage.css";
import PhotographerCard from "../../components/Cards/PhotographerCard/PhotographerCard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import useWindowDimensions from "../../services/useResize";
const LandingPage = () => {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="first-container">
        <Container>
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              minHeight: "95vh",
            }}
          >
            <Grid item xs={12} md={6}>
              <Typography variant="h3" className="title" fontSize="3rem">
                Conectamos fotógrafos con clientes
              </Typography>
              <Typography variant="h4">¿Qué tipo de fotógrafo necesitas?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={HeroPic} alt="HERO PHOTOGRAPHER" className="hero-pic" />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="second-container">
        <Container className="popular-services-container">
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "left",
              alignItems: "center",
              height: "inherit",
            }}
          >
            <Grid item xs={12} sm={12} md={4}>
              <Typography variant="h3" className="popular-services" fontSize="3rem">
                Servicios más populares
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="third-container">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            height: "inherit",
          }}
        >
          <div className="service-container">
            <Card sx={{ maxWidth: 345, borderRadius: 2, margin: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="BABY PHOTO"
                sx={{ padding: 1, maxWidth: 208, maxHeight: 192, borderRadius: 4 }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  children="BEBÉ"
                  textAlign="center"
                />
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, borderRadius: 2, margin: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=…"
                alt="PORTRAIT PHOTO"
                sx={{ padding: 1, maxWidth: 208, maxHeight: 192, borderRadius: 4 }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  children="RETRATOS"
                  textAlign="center"
                />
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, borderRadius: 2, margin: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/7726294/pexels-photo-7726294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PET PHOTO"
                sx={{ padding: 1, width: 208, maxHeight: 192, borderRadius: 4 }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  children="MASCOTAS"
                  textAlign="center"
                />
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 345, borderRadius: 2, margin: 1 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?aut…"
                alt="WEADING PHOTO"
                sx={{ padding: 1, width: 208, maxHeight: 192, borderRadius: 4 }}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  children="BODAS"
                  textAlign="center"
                />
              </CardContent>
            </Card>
          </div>
          <Button
            className="button-login"
            name="EXPLORA TODOS"
            onClick={() => {
              navigate("/MainPage");
            }}
          />
        </Container>
      </div>
      <div className="fourth-container">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
              minHeight: "95vh",
            }}
          >
            <Grid item xs={12}>
              <Typography className="best-experience" variant="h2">
                Nos importa que tengas la mejor experiencia, <br></br> ¿Por qué elegirnos?
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} className="property-container">
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">
                  Tu dinero esta seguro y no es entregado hasta que recibas tus fotografías.
                </Typography>
              </div>
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">
                  Pueden usar nuestras herramientas para recibir tus fotos en máxima calidad.
                </Typography>
              </div>
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">
                  Los fotógrafos con las mejores calificaciones están a tu disposición.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={0} md={6}>
              <img
                src="https://images.pexels.com/photos/1391786/pexels-photo-1391786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PHOTOGRAPHER STUDIO"
                className="attributes-picture"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="fifth-container">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            maxWidth: "100 %",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} md={8}>
              <Typography variant="h2" className="explore-photographers-text">
                Explora a nuestros fotógrafos favoritos
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className="photographers-container">
                <PhotographerCard
                  name="Araceli"
                  coverImg="https://picsum.photos/250/194?random=1"
                  ranking="4.3"
                  rankingCount="233"
                  profilePic={Ara}
                  location="Gdl"
                  withFooter={false}
                  key="Ara"
                  isLoaded={true}
                  photographerId=""
                />
                <PhotographerCard
                  name="Giovanni"
                  coverImg="https://picsum.photos/250/194?random=2"
                  ranking="4"
                  rankingCount="153"
                  profilePic={Gio}
                  location="Mor"
                  withFooter={false}
                  key="Giovanni"
                  isLoaded={true}
                  photographerId=""
                />
                <PhotographerCard
                  name="LuisRod"
                  coverImg="https://picsum.photos/250/194?random=3"
                  ranking="4.1"
                  rankingCount="220"
                  profilePic={LuisR}
                  location="Cdmx"
                  withFooter={false}
                  key="Luis"
                  isLoaded={true}
                  photographerId="6380fdb3da82bcdcecb2b9e4"
                />
                <PhotographerCard
                  name="Marco"
                  coverImg="https://picsum.photos/250/194?random=4"
                  ranking="4.8"
                  rankingCount="300"
                  profilePic={Marco}
                  location="Cdmx"
                  withFooter={false}
                  key="Marco"
                  isLoaded={true}
                  photographerId="636490f40d20e59ef0c0ddb7"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h2" className="best-jobs-text">
                Puedes ver sus mejores trabajos
              </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className="works-container">
                <img
                  className="random-image"
                  src="https://picsum.photos/250/194?random=5"
                  alt="RANDOM IMAGE"
                />
                <img
                  className="random-image"
                  src="https://picsum.photos/250/194?random=6"
                  alt="RANDOM IMAGE"
                />
                <img
                  className="random-image"
                  src="https://picsum.photos/250/194?random=7"
                  alt="RANDOM IMAGE"
                />
                <img
                  className="random-image"
                  src="https://picsum.photos/250/194?random=8"
                  alt="RANDOM IMAGE"
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="sixth-container">
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h2" className="photographer-offer">
                ¿Eres fotógrafo y quieres ofrecer tus servicios?
              </Typography>
            </Grid>
            <Grid item xs={0} md={6}>
              <img
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PHOTOGRAPHER STUDIO"
                className="attributes-picture"
              />
            </Grid>
            <Grid item xs={12} md={6} className="property-container">
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">Crea un perfil para exponer tu trabajo</Typography>
              </div>
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">
                  Usa las herramientas de la página para entregar tus fotografías
                </Typography>
              </div>
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">Recibe pagos y citas por medio de tu perfil</Typography>
              </div>
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">Maneja tus citas y calendario</Typography>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className="seventh-container">
        {width <= 767 ? (
          <img src={WorkFlowMobilePic} alt="workflow" className="workFlow" />
        ) : (
          <img src={WorkFlowPic} alt="workflow" className="workFlow" />
        )}
      </div>
    </>
  );
};

export default LandingPage;
