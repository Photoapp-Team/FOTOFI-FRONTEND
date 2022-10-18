import * as yup from "yup";

const profilePicRules = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;

export const registerSchema = yup.object().shape({
    profilepic: yup
    .string()
    .matches(profilePicRules),
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
    email: yup
    .string()
    .email("Por favor ingresa un email valido")
    .required("Requerido"),
    password: yup
    .string()
    .min(3, "La constraseña debe de tener al menos 3 caracteres")
    .required("Requerido"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Las contraseñas deben de coincidir")
    .required("Requerido"),
    gender: yup
    .string()
    .oneOf(["Hombre", "Mujer", "Otro"], "")
})