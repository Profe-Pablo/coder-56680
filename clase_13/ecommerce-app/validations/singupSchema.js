import { object, string, ref } from "yup"

export let signupSchema = object({
    email: string()
        .required("Por favor, indica tu email")
        .email("El formato de email no es válido"),
    password: string()
     .required("Por favor, indica tu contraseña")
     .min(6, "La contraseña debe tener 6 caracteres como mínimo"),
    confirmPassword: string()
        .required("Por favor, confirma la contraseña")
        .oneOf([ref('password'), null], "Las contraseñas deben ser iguales"),
})