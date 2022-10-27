import React, { useEffect, useState } from "react";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import CustomSelect from "../../components/Inputs/CustomSelect";
import { addServiceSchema, registerSchema } from "../../components/schemas";
import axios from "axios";
import { CssBaseline, MenuItem, TextareaAutosize } from "@mui/material";
import { Box } from "@mui/system";
import { Field, Form, Formik, useField } from "formik";
import CustomInput from "../Inputs/CustomInput";
import CustomTextArea from "../Inputs/CustomTextArea";
import Button from "../Button/Button";
import { Height } from "@mui/icons-material";

const AddServiceForm = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coverPhoto, setCoverPhoto] = useState(false);

  const onSubmit = async (values, actions) => {
    console.log("values", values, "coverPhoto", coverPhoto);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const url = "http://localhost:8080/services";
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);

        const response = await axios.get(url);
        if (response) {
        }
        setData(response.data.data.services);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  if (data) console.log({ data });

  return (
    <>
      <CssBaseline />
      <Formik
        initialValues={{ BEBES: "", ARQUITECTURA: "", PRODUCTOS: "", RETRATOS: "" }}
        validationSchema={addServiceSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="formContainer">
            <Box sx={{ m: "auto", textAlign: "center", mb: 10 }}>
              <h1>Agregar un nuevo Servicio</h1>
            </Box>
            <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, ml: "5rem" }}>
              <Box>
                <h3>Tipo de servicio</h3>
              </Box>
              <Box>
                <CustomSelect
                  name="servicio"
                  placeholder="Por favor selecciona uno"
                  defaultValue="default"
                  size="small"
                >
                  <MenuItem value="default">Por favor selecciona una opción</MenuItem>
                  {data &&
                    data.map((item, index) => {
                      return (
                        <MenuItem key={index} value={item.name}>
                          {item.name}
                        </MenuItem>
                      );
                    })}
                </CustomSelect>
              </Box>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h2>Imagenes</h2>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h3>Elige tus imagenes para mostrar</h3>
            </Box>
            <ImageUpload
              phrase={"Arrastra tus archivos aqui o haz click"}
              classbox={"boxAddservice1"}
              classpaper={"paperAddservice1"}
              setFieldValue={setFieldValue}
              name="displayImages"
            />
            <Box sx={{ ml: "5rem" }}>
              <h3>Elige una foto de portada</h3>
            </Box>
            <ImageUpload
              phrase={"Arrastra tu foto de portada aqui o haz click"}
              classbox={"boxAddservice2"}
              classpaper={"paperAddservice2"}
              name="imagenes"
              setCoverPhoto={setCoverPhoto}
            />
            <Box sx={{ ml: "5rem" }}>
              <h2>Configura tu paquete</h2>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h4>Precio</h4>
              <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
                <CustomInput
                  label="Precio Minimo"
                  name="precioMinimo"
                  type="text"
                  placeholder="Precio Mínimo"
                  size="small"
                />
                -
                <CustomInput
                  label="Precio Maximo"
                  name="precioMaximo"
                  type="text"
                  placeholder="Precio Máximo"
                  size="small"
                />
              </Box>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h4>Descripción</h4>
              <Field
                as="textarea"
                aria-label="Descripcion"
                placeholder="Escribe una breve descripción"
                minRows={15}
                name="descripcion"
              />
            </Box>
            <Box sx={{ alignItems: "baseline", gap: 1, ml: "5rem" }}>
              <h4>¿Cuántas fotos incluye? (Preview)</h4>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CustomInput
                  label="Min"
                  name="minPhotosPrev"
                  type="text"
                  placeholder="Min"
                  size="small"
                />
                <Box> - </Box>
                <CustomInput
                  label="Max"
                  name="maxPhotosPrev"
                  type="text"
                  placeholder="Máx"
                  size="small"
                />
              </Box>
            </Box>
            <Box sx={{ alignItems: "baseline", gap: 1, ml: "5rem" }}>
              <h4>¿Cuántas fotos vas a entregar? </h4>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <CustomInput
                  label="Min"
                  name="minPhotosDel"
                  type="text"
                  placeholder="Min"
                  size="small"
                />
                <Box>-</Box>
                <CustomInput
                  label="Max"
                  name="maxPhotosDel"
                  type="text"
                  placeholder="Máx"
                  size="small"
                />
              </Box>
            </Box>
            <Box sx={{ ml: "5rem" }}>
              <h4>Tiempo estimado de entrega</h4>
              <CustomInput
                label="Tiempo"
                name="tiempo"
                type="text"
                placeholder="Tiempo"
                size="small"
              />
            </Box>
            <Box sx={{ display: "flex", m: "auto", justifyContent: "center", mb: 25 }}>
              <Button
                sx={{ mb: 25 }}
                disabled={isSubmitting}
                type="submit"
                text={"Submit"}
                name={"Crear"}
                className={"button-basic-registration"}
              />
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddServiceForm;
