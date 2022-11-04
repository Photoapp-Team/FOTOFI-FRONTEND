import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ServiceCard from "../../components/Cards/ServiceCard/ServiceCard";
import Button from "../../components/Inputs/Button/Button";
import HeroPic from "../../assets/backgroundImages/sujeto2.png";
import Marco from "../../assets/backgroundImages/marco.jpg";
import Gio from "../../assets/backgroundImages/Gio.jpeg";
import Ara from "../../assets/backgroundImages/ara.jpeg";
import "./LandingPage.css";
import PhotographerCard from "../../components/Cards/PhotographerCard/PhotographerCard";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
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
              <Typography variant="h4">¿Que tipo de fotografo necesitas?</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={HeroPic} alt="HERO PHOTOGRAPHER" height={600} className="hero-pic" />
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
            <Grid item xs={12} sm={4} md={4}>
              <Typography variant="h3" className="popular-services" fontSize="3rem">
                Servicios mas populares
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
            <ServiceCard
              withFooter={false}
              service="BEBE"
              img="https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1600"
              isLoaded={true}
              Link="/"
            />
            <ServiceCard
              withFooter={false}
              service="RETRATOS"
              img="https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=…"
              isLoaded={true}
              Link="/"
            />
            <ServiceCard
              withFooter={false}
              service="ARQUITECTURA"
              img="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=…"
              isLoaded={true}
              Link="/"
            />
            <ServiceCard
              withFooter={false}
              service="BODAS"
              img="https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?aut…"
              isLoaded={true}
              Link="/"
            />
          </div>
          <Button
            className="button-login"
            name="EXPLORA TODOS"
            onClick={() => {
              navigate("/");
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
              <Typography variant="h2" className="best-experience" fontSize="4rem">
                Nos importa que tengas la mejor experiencia, <br></br> ¿Porque escogernos?
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} className="property-container">
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">
                  Tu dinero esta seguro y no es entregado hasta que recibas tus fotografias.
                </Typography>
              </div>
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">
                  Pueden usar nuestras herramientas para recibir tus fotos en maxima calidad.
                </Typography>
              </div>
              <div className="property-item">
                <TaskAltIcon fontSize="large" color="success" />
                <Typography variant="h5">
                  Los fotografos con las mejores calificaciones estan a tu disposición.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={0} md={6}>
              <img
                src="https://images.pexels.com/photos/1391786/pexels-photo-1391786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PHOTOGRAPHER STUDIO"
                height={380}
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
            <Grid item xs={12} md={8}>
              <Typography variant="h3" className="explore-photographers-text" fontSize="3rem">
                Explora a nuestros fotografos favoritos
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
                />
                <PhotographerCard
                  name="Luis"
                  coverImg="https://picsum.photos/250/194?random=3"
                  ranking="4.1"
                  rankingCount="220"
                  profilePic={Ara}
                  location="Cdmx"
                  withFooter={false}
                  key="Luis"
                  isLoaded={true}
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
                />
              </div>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h3" className="best-jobs-text" fontSize="3rem">
                Puedes ver sus mejores trabajos
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="photographers-container">
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
              minHeight: "95vh",
            }}
          >
            <Grid item xs={12}>
              <Typography variant="h2" className="photographer-offer" fontSize="4rem">
                Eres fotografo y quieres ofrecer tus servicios?
              </Typography>
            </Grid>
            <Grid item xs={0} md={6}>
              <img
                src="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="PHOTOGRAPHER STUDIO"
                height={380}
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
                  Usa las herramientas de la pagina para entregar tus fotografias
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
    </>
  );
};

export default LandingPage;
