import React from "react";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

import { ContactDetails } from "@/lib/types/globals";

export const contactInfoData: ContactDetails = {
  address: {
    street: "Calle del Laberinto Infinito, Nº 42",
    city: "Ciudad Imaginaria",
    country: "Mundo Literario",
    icon: <MapPin className="w-7 h-7 text-gray-700" />,
  },
  phone: {
    number: "+1 (234) 567-890",
    label: "Teléfono de Consultas",
    icon: <Phone className="w-7 h-7 text-gray-700" />,
  },
  email: {
    address: "contacto@bibliotecadebabel.org",
    label: "Correo Electrónico",
    icon: <Mail className="w-7 h-7 text-gray-700" />,
  },
  hours: {
    digital: "Acceso Digital: 24 horas / 7 días",
    support: "Soporte: Lunes a Viernes, 9:00 - 17:00",
    icon: <Clock className="w-7 h-7 text-gray-700" />,
  },
};
