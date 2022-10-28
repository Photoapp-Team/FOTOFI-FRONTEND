// import React, { useEffect, useState } from "react";
// import ImageUpload from "../../../services/ImageUpload";
// import CustomSelect from "../../Inputs/CustomSelect";
// import { addServiceSchema, registerSchema } from "../../schemas";
// import axios from "axios";
// import { CssBaseline, MenuItem, TextareaAutosize } from "@mui/material";
// import { Box } from "@mui/system";
// import { Field, Form, Formik, useField } from "formik";
// import CustomInput from "../../Inputs/CustomInput";
// import Button from "../../Inputs/Button/Button";
// import { Height } from "@mui/icons-material";
// import { createPackage } from "../../services/createPackage";
// const AddServiceForm = () => {
//   const emptyOption =  {label:"",value:""}
//   const [data, setData] = useState([emptyOption]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (values, actions) => {
//     createPackage(values);
//     actions.resetForm({});
//   };

//   const url = "http://localhost:8080/services";
//   useEffect(() => {
//     (async function () {
//       try {
//         setLoading(true);

//         const response = await axios.get(url);
//         if (response) {
//         }
//         const options = response.data.data.services.map(service => ({ label:service.name, "value": service.name}))
//         setData([emptyOption,...options]);
//       } catch (err) {
//         setError(err);
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, []);

//   return (
//     <>
//       <CssBaseline />
//       <Formik
//         initialValues={{ serviceCategory: "" }}
//         // validationSchema={addServiceSchema}
//         onSubmit={onSubmit}
//       >
//         {({ isSubmitting, setFieldValue, values }) => (
//           <Form className="formContainer">
//             <Box sx={{ m: "auto", textAlign: "center", mb: 10 }}>
//               <h1>Agregar un nuevo Servicio</h1>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "baseline", gap: 1, ml: "5rem" }}>
//               <Box>
//                 <h3>Tipo de servicio</h3>
//               </Box>
//               <Box>
//                 <CustomSelect
//                   name="serviceCategory"
//                   placeholder="Por favor selecciona uno"
//                   size="small"
//                   // defaultValue=""
//                   // onChange={(option) => {
//                   //   console.log("option",option.target);
//                   //   console.log("values",values.serviceCategory);
//                   //   //setFieldValue("serviceCategory", option.target.value);
//                   // }}
//                   as="select"
//                   value={
//                     data
//                       ? data.find((category) => {
//                           console.log({ category }, { values: values.serviceCategory });
//                           return category === values.serviceCategory;
//                         })
//                       : ""
//                   }
//                   options={data}
//                 >
//                   {/* <MenuItem key={"default"} value="">
//                     Por favor selecciona una opción
//                   </MenuItem>
//                   {data &&
//                     data.map((name, index) => {
//                       return (
//                         <MenuItem  value={name}>
//                           {name}
//                         </MenuItem>
//                       );
//                     })} */}
//                 </CustomSelect>
//               </Box>
//             </Box>
//             <Box sx={{ ml: "5rem" }}>
//               <h2>Imagenes</h2>
//             </Box>
//             <Box sx={{ ml: "5rem" }}>
//               <h3>Elige tus imagenes para mostrar</h3>
//             </Box>
//             <ImageUpload
//               phrase={"Arrastra tus archivos aqui o haz click"}
//               classbox={"boxAddservice1"}
//               classpaper={"paperAddservice1"}
//               setFieldValue={setFieldValue}
//               name="displayPhotos"
//               fieldName={"displayPhotos"}
//             />
//             <Box sx={{ ml: "5rem" }}>
//               <h3>Elige una foto de portada</h3>
//             </Box>
//             <ImageUpload
//               phrase={"Arrastra tu foto de portada aqui o haz click"}
//               classbox={"boxAddservice2"}
//               classpaper={"paperAddservice2"}
//               name="coverPhoto"
//               setFieldValue={setFieldValue}
//               fieldName={"coverPhoto"}
//             />
//             <Box sx={{ ml: "5rem" }}>
//               <h2>Configura tu paquete</h2>
//             </Box>
//             <Box sx={{ ml: "5rem" }}>
//               <h4>Precio</h4>
//               <Box sx={{ display: "flex", alignItems: "baseline", gap: 1 }}>
//                 <CustomInput
//                   label="Precio Minimo"
//                   name="minPrice"
//                   type="text"
//                   placeholder="Precio Mínimo"
//                   size="small"
//                 />
//                 -
//                 <CustomInput
//                   label="Precio Maximo"
//                   name="maxPrice"
//                   type="text"
//                   placeholder="Precio Máximo"
//                   size="small"
//                 />
//               </Box>
//             </Box>
//             <Box sx={{ ml: "5rem" }}>
//               <h4>Descripción</h4>
//               <Field
//                 as="textarea"
//                 aria-label="Descripcion"
//                 placeholder="Escribe una breve descripción"
//                 minRows={15}
//                 name="description"
//               />
//             </Box>
//             <Box sx={{ alignItems: "baseline", gap: 1, ml: "5rem" }}>
//               <h4>¿Cuántas fotos incluye? (Preview)</h4>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <CustomInput
//                   label="Min"
//                   name="minQuantityPrevPhotos"
//                   type="text"
//                   placeholder="Min"
//                   size="small"
//                 />
//                 <Box> - </Box>
//                 <CustomInput
//                   label="Max"
//                   name="maxQuantityPrevPhotos"
//                   type="text"
//                   placeholder="Máx"
//                   size="small"
//                 />
//               </Box>
//             </Box>
//             <Box sx={{ alignItems: "baseline", gap: 1, ml: "5rem" }}>
//               <h4>¿Cuántas fotos vas a entregar? </h4>
//               <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
//                 <CustomInput
//                   label="Min"
//                   name="minQuantityFinalPhotos"
//                   type="text"
//                   placeholder="Min"
//                   size="small"
//                 />
//                 <Box>-</Box>
//                 <CustomInput
//                   label="Max"
//                   name="maxQuantityFinalPhotos"
//                   type="text"
//                   placeholder="Máx"
//                   size="small"
//                 />
//               </Box>
//             </Box>
//             <Box sx={{ ml: "5rem" }}>
//               <h4>Tiempo estimado de entrega</h4>
//               <CustomInput
//                 label="Tiempo"
//                 name="deliveryTime"
//                 type="text"
//                 placeholder="Tiempo"
//                 size="small"
//               />
//             </Box>
//             <Box sx={{ display: "flex", m: "auto", justifyContent: "center", mb: 25 }}>
//               <Button
//                 sx={{ mb: 25 }}
//                 disabled={isSubmitting}
//                 type="submit"
//                 text={"Submit"}
//                 name={"Crear"}
//                 className={"button-basic-registration"}
//               />
//             </Box>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

// export default AddServiceForm;
