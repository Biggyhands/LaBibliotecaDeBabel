import * as z from "zod";
/*Utilizado en frase de autor famoso*/
export interface Quote {
  autor: string;
  frase: string;
}

/*Utilizado en en componente about us*/
export interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

//Utilizado en la pagina de contacto

// Interfaz para cada sección de información de contacto
interface AddressInfo {
  street: string;
  city: string;
  country: string;
  icon: React.ReactNode;
}

interface PhoneInfo {
  number: string;
  label: string;
  icon: React.ReactNode;
}

interface EmailInfo {
  address: string;
  label: string;
  icon: React.ReactNode;
}

interface HoursInfo {
  digital: string;
  support: string;
  icon: React.ReactNode;
}

// Interfaz principal para el objeto completo
export interface ContactDetails {
  address: AddressInfo;
  phone: PhoneInfo;
  email: EmailInfo;
  hours: HoursInfo;
}
// *------*//

// Utilizado para las tecnologias en el componente de creditos

export interface TechnologyInfo {
  name: string;
  icon: React.ReactNode;
}

//Utilizado como validacion en el formulario de registro

export const formSchema = z
  .object({
    username: z.string().min(3, {
      message: "El usuario debe tener al menos 3 caracteres.",
    }),
    firstName: z.string().min(1, {
      message: "El nombre es requerido.",
    }),
    lastName: z.string().min(1, {
      message: "El apellido es requerido.",
    }),
    email: z.string().email({
      message: "Por favor, introduce un correo electrónico válido.",
    }),
    password: z.string().min(8, {
      message: "La contraseña debe tener al menos 8 caracteres.",
    }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    // Validación para que las contraseñas coincidan
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"], // Indica qué campo mostrará el error
  });

//Utilizado como validacion en el formulario de login

export const loginSchema = z.object({
  username: z.string().min(3, {
    // Validamos longitud mínima para username
    message: "El nombre de usuario debe tener al menos 3 caracteres.",
  }),
  password: z.string().min(1, {
    message: "La contraseña es requerida.",
  }),
});

export type LoginFormData = z.infer<typeof loginSchema>;

//Utilizado como validacion en el formulario de recuperar contraseña

export const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: "Por favor, introduce un correo electrónico válido." }),
});
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
