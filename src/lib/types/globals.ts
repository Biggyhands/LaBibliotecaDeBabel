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
