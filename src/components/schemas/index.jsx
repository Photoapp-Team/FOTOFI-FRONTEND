import * as yup from "yup";

const profilePicRules =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

export const registerSchema = yup.object().shape({
  profilepic: yup.string().matches(profilePicRules),
  name: yup
    .string()
    .min(3, "El nombre debe de tener al menos 3 caracteres")
    .max(25, "El nombre no debe de ser mayor a 25 caracteres")
    .required("Requerido"),
  lastname: yup
    .string()
    .min(3, "El apellido debe de tener al menos 3 caracteres")
    .max(25, "El apellido no debe de ser mayor a 25 caracteres")
    .required("Requerido"),
  username: yup
    .string()
    .min(5, "El nombre de usuario debe tener al menos 5 caracteres")
    .required("Requerido"),
  email: yup.string().email("Por favor ingresa un email valido").required("Requerido"),
  password: yup
    .string()
    .min(3, "La constraseña debe de tener al menos 3 caracteres")
    .required("Requerido"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben de coincidir")
    .required("Requerido"),
  gender: yup.string().oneOf(["Hombre", "Mujer", "Otro"], ""),
});

export const addServiceSchema = yup.object().shape({
  serviceCategory: yup.string().required("Por favor selecciona una opción"),
  displayPhotos: yup.array().min(1, "at least 1").required("Por favor sube al menos 1 imagen"),
  coverPhoto: yup.array().min(1, "at least 1").required("Por favor sube al menos 1 imagen"),
  minPrice: yup.number().required("Por favor ingresa un precio mínimo"),
  maxPrice: yup
    .number()
    .required("Por favor ingresa un precio máximo")
    .moreThan(yup.ref("minPrice"), "El precio máximo no puede ser menor al precio mínimo"),
  description: yup.string().required("Por favor ingresa una descripción"),
  minQuantityPrevPhotos: yup.number().required("Obligatorio"),
  maxQuantityPrevPhotos: yup
    .number()
    .required("Obligatorio")
    .moreThan(
      yup.ref("minQuantityPrevPhotos"),
      "La cantidad máxima de fotos de preview no puede ser menor a la cantidad mínima"
    ),
  minQuantityFinalPhotos: yup.number().required("Obligatorio"),
  maxQuantityFinalPhotos: yup
    .number()
    .required("Obligatorio")
    .moreThan(
      yup.ref("minQuantityFinalPhotos"),
      "La cantidad máxima de fotos a entregar no puede ser menor a la cantidad mínima"
    ),
  deliveryTime: yup.string().required("Ejemplo: 1 semana"),
});

export const photographerRegisterSchema = yup.object().shape({
  coverPhoto: yup.array().min(1, "at least 1").required("Por favor sube al menos 1 imagen"),
  profilePic: yup.array().min(1, "at least 1").required("Por favor sube al menos 1 imagen"),
  birthDate: yup.date(),
  name: yup
    .string()
    .min(3, "El nombre debe de tener al menos 3 caracteres")
    .max(25, "El nombre no debe de ser mayor a 25 caracteres")
    .required("Requerido"),
  lastname: yup
    .string()
    .min(3, "El apellido debe de tener al menos 3 caracteres")
    .max(25, "El apellido no debe de ser mayor a 25 caracteres")
    .required("Requerido"),
  username: yup
    .string()
    .min(5, "El nombre de usuario debe tener al menos 5 caracteres")
    .required("Requerido"),
  email: yup.string().email("Por favor ingresa un email valido").required("Requerido"),
  password: yup
    .string()
    .min(3, "La constraseña debe de tener al menos 3 caracteres")
    .required("Requerido"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Las contraseñas deben de coincidir")
    .required("Requerido"),
  gender: yup.string().oneOf(["f", "m", "o"], ""),
});

export const editSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, "El nombre debe tener por lo menos 2 caracteres")
    .max(25, "No debe pasar de 25 caracteres")
    .required("Requerido"),
  lastname: yup
    .string()
    .min(4, "debe contener mínimo 4 caracteres")
    .max(20, "No debe superar los 20 caracteres")
    .required("Requerido"),
  password: yup
    .string()
    .min(3, "La constraseña debe de tener al menos 3 caracteres")
    .required("Requerido"),
  city: yup
    .string()
    .min(2, "Debe contener por lo menos 3 caracteres")
    .max(15, "No debe superar los 15 caracteres"),
  suburb: yup
    .string()
    .min(2, "Debe contener por lo menos 3 caracteres")
    .max(30, "No debe superar los 30 caracteres"),
  street: yup
    .string()
    .min(2, "Debe contener por lo menos 3 caracteres")
    .max(30, "No debe superar los 30 caracteres"),
  number: yup.number(),
  zipCode: yup.number(),
  phoneNumber: yup.number(),
});

export const confirmSessionSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, "El nombre debe de tener al menos 3 caracteres")
    .required("Por favor escbribe un nombre de sesión"),
  location: yup.string().required("Por favor escribe dónde va a ser la sesión"),
  price: yup.number().required("Por favor ingresa un precio"),
  quantityPrevPhotos: yup.number().required("Obligatorio"),
  quantityFinalPhotos: yup.number().required("Obligatorio"),
  deliveryTime: yup.string().required("Por favor ingresa un tiempo estimado de entrega"),
});
