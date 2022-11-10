import * as React from "react";
import { Box } from "@mui/system";
import { FormControl, Grid, MenuItem } from "@mui/material";
import ImageUpload from "../../../../services/ImageUpload";
import CustomInput from "../../../Inputs/CustomInput";
import CustomSelect from "../../../Inputs/CustomSelect";

const FormBasicInfo = ({ setFieldValue }) => {
  return (
    <>
      <Box>
        <Grid container spacing={3} sx={{ width: "90%", m: "auto" }}>
          <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
            <h3>Información Básica</h3>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", m: "auto", alignItems: "center", gap: 5 }}>
            <ImageUpload phrase={"Tutututu"} classbox={"boxRegister2"} classpaper={"paperRegister2"} name="coverPhoto" fieldName={"coverPhoto"} setFieldValue={setFieldValue} />
            <ImageUpload phrase={"Tutututu"} classbox={"boxRegister1"} classpaper={"paperRegister1"} name="profilePic" fieldName={"ProfilePic"} setFieldValue={setFieldValue} />
            <FormControl fullWidth>
              <CustomInput fullWidth label="Nickname" name="username" type="text" />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ gap: 2 }}>
            <Box component="span">Género </Box>
            <CustomSelect fullWidth label="Genero" name="gender" defaultValue="default">
              <MenuItem value="default">Por favor selecciona</MenuItem>
              <MenuItem value="H">H</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="O">Otro</MenuItem>
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
            <CustomInput fullWidth label="Contraseña" name="password" type="password" size="small" autoComplete="new-password" />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomInput fullWidth label="Confirmar contraseña" name="confirmPassword" type="password" size="small" autoComplete="new-password" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FormBasicInfo;
