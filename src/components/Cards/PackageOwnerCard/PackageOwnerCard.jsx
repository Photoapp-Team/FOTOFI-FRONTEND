import "./PackageOwnerCard.css";
import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { deletePackage } from "../../../services/FetchServices/deletePackage";

export default function PackageOwnerCard({ service, img, isLoaded, packageId }) {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const userId = localStorage.getItem("userId");
  const handleDelete = () => {
    Swal.fire({
      title: `Seguro que quieres borrar el paquete ${service}`,
      icon: `question`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
    }).then((result) => {
      if (result.isConfirmed) {
        deletePackage(packageId).then((packageResult) => {
          navigate(`/Profile/${userId}`);
        });
      }
    });
  };

  return (
    <>
      <Paper
        elevation={4}
        sx={{
          width: 250,
          height: 250,
          borderRadius: 2,
          margin: 2,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLoaded ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CardMedia className="cardImg" component="img" image={img} alt={service} height={140} />
          </Box>
        ) : (
          <Skeleton variant="rectangular" height={140} width={200} align="center" />
        )}

        <CardContent sx={{ pb: 0 }}>
          {isLoaded ? (
            <Typography
              className="cardTitle"
              variant="h5"
              component="div"
              children={service}
              align="center"
              boxSizing="content-box"
            />
          ) : (
            <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
          )}
        </CardContent>
        <IconButton aria-label="delete" onClick={handleDelete} sx={{ width: 25, height: 25 }}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    </>
  );
}
