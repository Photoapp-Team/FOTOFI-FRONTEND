import "./AddServiceCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate, useParams } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";

export default function AddServiceCard() {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const handleOnClick = () => {
    navigate(`/addservice/${id}`);
  };

  return (
    <>
      <Card
        className="addServiceCard"
        sx={{ maxWidth: 250, borderRadius: 2, minWidth: 202, margin: 2 }}
        elevation={4}
        onClick={handleOnClick}
      >
        <CardActionArea sx={{ maxWidth: 300, padding: ".5rem" }}>
          <CardMedia
            className="cardImg"
            component="img"
            height="140"
            image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAElBMVEX///8AAABhYWFQUFBlZWUkJCSLCRfiAAAA/ElEQVR4nO3dOwrDMBRFQcef/W85RVpVxo44YmYB4p72gfG2AQAAAAAAAAAAAKs5PiPH7FkP2oeF++xZD1LYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2KewT2Gfwj6FfQr7FPYp7FPYp7Bv/cJzWHjOnjVw7Lec17DwOu899+Z3GsOh/6dQocL5FCpUOJ9ChQrnU6hQ4XwKFSqc78XC9W9td3XupXetf/NW2KewT2Gfwj6FfQr7FPYp7FPYp7BPYZ/CPoV9CvsU9insU9insE9hn8I+hX0K+xT2KexT2Kewb/3C9f8lCwAAAAAAAAAAAPx8AZ3RGBoLA00uAAAAAElFTkSuQmCC"
            alt="ADD ICON"
          />
          <CardContent sx={{ pb: 0 }}>
            <Typography
              className="cardTitle"
              variant="h5"
              component="div"
              children="AGREGA UN SERVICIO"
              align="center"
              boxSizing="content-box"
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
