import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

function CustomBreadcrumbs({ sessionName }) {
  const user = localStorage.getItem("userId");
  const navigate = useNavigate();

  function handleClick(event) {}
  return (
    <div
      role="presentation"
      onClick={handleClick}
      sx={{ display: "flex", justifyContent: "flex-end" }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ display: "flex", justifyContent: "flex-end", mr: "5vw" }}
      >
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href="/MainPage"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="inherit"
          href={`/Profile/${user}`}
        >
          <CameraAltIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Sesiones
        </Link>
        <Typography sx={{ display: "flex", alignItems: "center" }}>
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {sessionName}
        </Typography>
      </Breadcrumbs>
    </div>
  );
}

export default CustomBreadcrumbs;
