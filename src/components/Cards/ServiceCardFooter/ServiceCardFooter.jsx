import "./ServiceCardFooter.css";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

export default function ServiceCardFooter({ isLoaded, minPrice, editMode }) {
  return (
    <>
      {isLoaded ? (
        <>
          {editMode ? "Aqui va el boton de eliminar" : <></>}
          <Typography
            sx={{ padding: 1 }}
            variant="body2"
            color="text.secondary"
            component="div"
            children={`Desde ${minPrice}$`}
            align="right"
          />
        </>
      ) : (
        <Skeleton variant="text" align="right" sx={{ fontSize: ".9rem" }} />
      )}
    </>
  );
}
