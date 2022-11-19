import * as React from "react";
import { Box } from "@mui/system";
import { FormControl, Grid, MenuItem } from "@mui/material";
import CustomInput from "../../../../Inputs/CustomInput";
import CustomSelect from "../../../../Inputs/CustomSelect";
import "./FormBasicInfo.css";
import { ProfileDropZone } from "../../../../../services/ProfileDropZone/ProfileDropZone";

const FormBasicInfo = ({ setFieldValue }) => {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
          <h3>Información Básica</h3>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            m: "auto",
            alignItems: "center",
            gap: 5,
          }}
          className="formBasicInfo"
        >
          <Box component="span">Selecciona una foto de portada </Box>
          <ProfileDropZone
            name="coverPhoto"
            fieldName={"coverPhoto"}
            setFieldValue={setFieldValue}
          />
          <Box component="span">Selecciona una foto de perfil </Box>
          <ProfileDropZone
            name="profilePic"
            fieldName={"profilePic"}
            setFieldValue={setFieldValue}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Nickname" name="username" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ gap: 2, display: "flex", alignItems: "center" }}>
          <Box component="span">Género </Box>
          <CustomSelect fullWidth label="Genero" name="gender" defaultValue="default" size="small">
            <MenuItem value="default">Por favor selecciona</MenuItem>
            <MenuItem value="m">H</MenuItem>
            <MenuItem value="f">M</MenuItem>
            <MenuItem value="o">Otro</MenuItem>
          </CustomSelect>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Nombre" name="name" type="text" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Apellido" name="lastname" type="text" />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            display: "flex",
            m: "auto",
          }}
          fullWidth
        >
          <FormControl fullWidth>
            <CustomInput fullWidth label="Email" name="email" type="email" />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInput
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            size="small"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomInput
            fullWidth
            label="Confirmar contraseña"
            name="confirmPassword"
            type="password"
            size="small"
            autoComplete="new-password"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default FormBasicInfo;
