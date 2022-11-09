import * as React from "react";
import { Box } from "@mui/system";
import { Grid, MenuItem } from "@mui/material";
import ImageUpload from "../../../../services/ImageUpload";
import CustomInput from "../../../Inputs/CustomInput";
import CustomSelect from "../../../Inputs/CustomSelect";

const FormBasicInfo = ({ setFieldValue }) => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} sx={{ textAlign: "center", mb: 5 }}>
            <h3>Información Básica</h3>
          </Grid>
          <Grid
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <ImageUpload
              phrase={"Tutututu"}
              classbox={"boxRegister2"}
              classpaper={"paperRegister2"}
              name="coverPhoto"
              fieldName={"coverPhoto"}
              setFieldValue={setFieldValue}
            />
            <ImageUpload
              phrase={"Tutututu"}
              classbox={"boxRegister1"}
              classpaper={"paperRegister1"}
              name="profilePic"
              fieldName={"ProfilePic"}
              setFieldValue={setFieldValue}
            />
            <CustomInput sx={{ m: 0.5 }} label="Nickname" name="username" type="text" />
          </Grid>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2 }}
            sx={{
              display: "flex",
              px: 30,
              py: 2,
              justifyContent: "space-around",
              textAlign: "center",
              m: "auto",
              alignItems: "center",
            }}
          >
            <Grid xs={6}>
              <CustomInput sx={{ m: 0.5 }} label="Nombre" name="name" type="text" />
            </Grid>
            <Grid xs={6}>
              <CustomInput sx={{ m: 0.5 }} label="Apellido" name="lastname" type="text" />
            </Grid>
            <Grid xs={6}>
              <Box component="span">Género</Box>
              <CustomSelect sx={{ m: 0.5 }} label="Genero" name="gender" defaultValue="default">
                <MenuItem value="default">Por favor selecciona</MenuItem>
                <MenuItem value="H">H</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="O">Otro</MenuItem>
              </CustomSelect>
            </Grid>
            <Grid xs={6}>
              <CustomInput sx={{ m: 0.5 }} label="Email" name="email" type="email" />
            </Grid>
            <Grid xs={6}>
              <CustomInput
                sx={{ m: 0.5 }}
                label="Contraseña"
                name="password"
                type="password"
                size="small"
                autoComplete="new-password"
              />
            </Grid>
            <Grid xs={6}>
              <CustomInput
                sx={{ m: 0.5 }}
                label="Confirmar contraseña"
                name="confirmPassword"
                type="password"
                size="small"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default FormBasicInfo;
