import * as React from "react";
import { Box } from "@mui/system";
import {
  Alert,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import CustomInput from "../../../../Inputs/CustomInput";
import CustomSelect from "../../../../Inputs/CustomSelect";
import dayjs from "dayjs";
import "./FormBasicInfo.css";
import { ProfileDropZone } from "../../../../../services/ProfileDropZone/ProfileDropZone";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { useField } from "formik";

const FormBasicInfo = (props) => {
  const { stepNumber, setFieldValue, values, touched, errors } = props;
  const [selectedDate, setSelectedDate] = useState(null);
  const [meta] = useField(props);

  const CssTextField = styled(TextField)({
    fontSize: "12px",
    "& input::placeholder": {
      fontSize: "12px",
    },
  });

  return (
    <>
      <Grid container spacing={1} className="formBasicInfo">
        <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start" }}>
          <h3>Información Básica</h3>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start" }}>
          <Typography sx={{ pt: 0, my: 0, fontSize: "15px", fontWeight: 600 }}>
            Selecciona una foto de portada{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", pt: 0, lineHeight: "0.5rem" }}>
          <Typography sx={{ pt: 0, my: 0, fontSize: "12px" }}>
            *Tamaño mínimo sugerido 1330 x 500
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", pt: 0 }}>
          <ProfileDropZone
            name="coverPhoto"
            fieldName={"coverPhoto"}
            setFieldValue={setFieldValue}
            showAlerts={["error"]}
          />
          {touched.coverPhoto && errors.coverPhoto && (
            <Alert severity="error">Por favor sube al menos 1 foto</Alert>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            textAlign: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              textAlign: "flex-start",
            }}
          >
            <Typography sx={{ my: 0, fontSize: "15px", fontWeight: 600 }}>
              Selecciona una foto de perfil
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ textAlign: "flex-start", pt: 0 }}>
            <ProfileDropZone
              name="profilePic"
              fieldName={"profilePic"}
              setFieldValue={setFieldValue}
              showAlerts={["error"]}
            />
            {touched.profilePic && errors.profilePic && (
              <Alert severity="error">Por favor sube una foto</Alert>
            )}
          </Grid>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            textAlign: "flex-start",
            alignItems: "stretch",
            gap: 3,
          }}
        >
          <Grid item xs={12} sm={12} sx={{ padding: "5px" }}>
            <FormControl fullWidth>
              <CustomInput fullWidth label="Nickname" name="username" required />
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ gap: 2, display: "flex", alignItems: "flex-start" }}>
            <Box component="span" sx={{ fontSize: "14px", fontWeight: "500" }}>
              Género{" "}
            </Box>
            <CustomSelect
              fullWidth
              label="Genero"
              name="gender"
              defaultValue="default"
              size="small"
            >
              <MenuItem value="default">Por favor selecciona</MenuItem>
              <MenuItem value="m">H</MenuItem>
              <MenuItem value="f">M</MenuItem>
              <MenuItem value="o">Otro</MenuItem>
            </CustomSelect>
          </Grid>
          <Grid item xs={12} sm={12} sx={{ gap: 2, display: "flex", alignItems: "flex-start" }}>
            <Typography sx={{ fontSize: "14px", fontWeight: "500", textAlign: "initial" }}>
              Fecha de Nacimiento{" "}
            </Typography>
            <FormControl fullWidth>
              <DatePicker
                fullWidth
                label={<Typography sx={{ fontSize: "14px" }}>Selecciona...</Typography>}
                name="birthDate"
                renderInput={(params) => <CssTextField {...params} size="small" />}
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue);
                  setFieldValue("birthDate", dayjs(newValue));
                }}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Nombre" name="name" />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <CustomInput fullWidth label="Apellido" name="lastname" />
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
