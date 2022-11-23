import React, { useEffect, useState } from "react";
import CustomSelect from "../../Inputs/CustomSelect";
import { addServiceSchema } from "../../schemas";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Alert, CircularProgress, FormControl, Grid, MenuItem, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Form, Formik } from "formik";
import CustomInput from "../../Inputs/CustomInput";
import Button from "../../Inputs/Button/Button";
import { createPackage } from "../../../services/createPackage";
import { useNavigate } from "react-router-dom";
import { ProfileDropZone } from "../../../services/ProfileDropZone/ProfileDropZone";
import "./AddServiceForm.css";
import { ServiceDropZone } from "../../../services/ServiceDropZone/ServiceDropZone";

const AddServiceForm = () => {
  const emptyOption = { label: "Por favor selecciona una opción", value: "" };
  const [categories, setCategories] = useState([emptyOption]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [success, setSuccess] = React.useState(false);
  const { REACT_APP_API_ENDPOINT } = process.env;
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  useEffect(() => {}, [loadingUpload]);

  const onSubmit = async (values, actions) => {
    const newPackage = await createPackage(values);
    if (!newPackage) {
      setLoadingUpload(true);
      setSuccess(false);
    } else if (newPackage) {
      setSuccess(true);
      setLoading(false);
      actions.resetForm({ values: "" });
      navigate(`/Profile/${id}`);
    }
  };

  const url = `${REACT_APP_API_ENDPOINT}/services`;
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await axios.get(url);
        if (response) {
        }
        const options = response.data.data.services.map((service) => ({
          label: service.name,
          value: service.name,
        }));
        setCategories([emptyOption, ...options]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <Box>
      <Formik
        initialValues={{
          serviceCategory: emptyOption.value,
          displayPhotos: [],
          coverPhoto: [],
          minPrice: "",
          maxPrice: "",
          description: "",
          minQuantityPrevPhotos: "",
          maxQuantityPrevPhotos: "",
          minQuantityFinalPhotos: "",
          maxQuantityFinalPhotos: "",
          deliveryTime: "",
        }}
        validationSchema={addServiceSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue, values, errors, touched }) => (
          <Paper
            elevation={8}
            sx={{ width: "50%", display: "flex", justifyContent: "center", m: "auto" }}
            className="formAddservicePaper"
          >
            <Form className="formAddService">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <Box sx={{ m: "auto", textAlign: "center", mb: 10 }}>
                    <h1>Agregar un nuevo Servicio</h1>
                  </Box>
                </Grid>
                <Grid
                  item
                  fullwidth
                  xs={12}
                  sm={12}
                  sx={{ gap: 2, display: "flex", justifyContent: "center" }}
                >
                  <Box component="span">Tipo de servicio</Box>
                  <CustomSelect
                    fullwidth
                    displayEmpty
                    name="serviceCategory"
                    label="Por favor selecciona uno"
                    sx={{ minWidth: "200px" }}
                  >
                    {categories.map(({ label, value }, index) => (
                      <MenuItem key={index} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </CustomSelect>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h2>Imagenes</h2>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h3>Elige tus imagenes para mostrar (máx 8)</h3>
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
                >
                  <ServiceDropZone
                    setFieldValue={setFieldValue}
                    name="displayPhotos"
                    fieldName={"displayPhotos"}
                    showAlerts={["error"]}
                  />
                  {touched.displayPhotos && Boolean(errors.displayPhotos) && (
                    <Alert severity="error">Por favor sube al menos 1 foto</Alert>
                  )}

                  <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                    <h3>Elige una foto de portada (máx 1)</h3>
                  </Grid>
                  <ProfileDropZone
                    setFieldValue={setFieldValue}
                    name="coverPhoto"
                    fieldName={"coverPhoto"}
                  />
                  {touched.coverPhoto && errors.coverPhoto && (
                    <Alert severity="error">Por favor sube al menos 1 foto</Alert>
                  )}
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h2>Configura tu paquete</h2>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h4>Precio</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Precio Minimo"
                      name="minPrice"
                      type="text"
                      placeholder="Precio Mínimo"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Precio Maximo"
                      name="maxPrice"
                      type="text"
                      placeholder="Precio Máximo"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h4>Descripción</h4>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      id="standard-textarea"
                      multiline
                      label="Descripcion"
                      name="description"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h4>¿Cuántas fotos incluye? (Preview)</h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Min"
                      name="minQuantityPrevPhotos"
                      type="text"
                      placeholder="Min"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Max"
                      name="maxQuantityPrevPhotos"
                      type="text"
                      placeholder="Máx"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h4>¿Cuántas fotos vas a entregar? </h4>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Min"
                      name="minQuantityFinalPhotos"
                      type="text"
                      placeholder="Min"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Max"
                      name="maxQuantityFinalPhotos"
                      type="text"
                      placeholder="Máx"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center" }}>
                  <h4>Tiempo estimado de entrega</h4>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <FormControl fullWidth>
                    <CustomInput
                      fullWidth
                      label="Tiempo"
                      name="deliveryTime"
                      type="text"
                      placeholder="Tiempo"
                      size="small"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={12} sx={{ textAlign: "center", my: 10 }}>
                  {loadingUpload && (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress />
                    </Box>
                  )}
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    text={"Submit"}
                    name={"Crear Paquete"}
                    className={"button-basic-registration"}
                  />
                  {loadingUpload && (
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress />
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Form>
          </Paper>
        )}
      </Formik>
    </Box>
  );
};

export default AddServiceForm;
