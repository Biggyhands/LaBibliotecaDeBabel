import React from "react";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

function ContactInfoComponent() {
  const contactInfo = {
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
  return (
    <section className="py-16 md:py-20 px-4 bg-gray-50 min-h-[calc(100vh-var(--navbar-height,80px)-var(--footer-height,200px))] flex items-center">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Ponte en Contacto
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            ¿Tienes preguntas, sugerencias o simplemente quieres charlar sobre
            libros? Aquí encontrarás cómo localizarnos en el vasto universo
            digital.
          </p>
        </div>

        {/* Grid de Información de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {/* Dirección */}
          <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
              {contactInfo.address.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                Dirección (Sede Conceptual)
              </h3>
              <p className="text-gray-600">{contactInfo.address.street}</p>
              <p className="text-gray-600">
                {contactInfo.address.city}, {contactInfo.address.country}
              </p>
            </div>
          </div>

          {/* Teléfono */}
          <div className="cursor-pointer flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
              {contactInfo.phone.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                {contactInfo.phone.label}
              </h3>
              <p className="text-gray-600">{contactInfo.phone.number}</p>
              <p className="text-sm text-gray-500">
                (Solo para consultas urgentes sobre paradojas temporales)
              </p>
            </div>
          </div>

          {/* Email */}
          <div className=" cursor-pointer flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
              {contactInfo.email.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                {contactInfo.email.label}
              </h3>
              <a
                href={`mailto:${contactInfo.email.address}`}
                className="text-indigo-600 hover:text-indigo-800 break-all"
              >
                {contactInfo.email.address}
              </a>
              <p className="text-sm text-gray-500">
                (Respondemos más rápido que cambiar de pagina)
              </p>
            </div>
          </div>

          {/* Horario */}
          <div className="cursor-pointer flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
              {contactInfo.hours.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1 text-gray-800">
                Horarios de Atención
              </h3>
              <p className="text-gray-600">{contactInfo.hours.digital}</p>
              <p className="text-gray-600">{contactInfo.hours.support}</p>
            </div>
          </div>
        </div>

        {/* mapa conceptual o un formulario aquí más adelante */}
        {/*
     <div className="mt-16 text-center">
       <h3 className="text-2xl font-semibold mb-4">O envíanos un mensaje directo</h3>
       {/* Aquí iría un componente de formulario de contacto *}
       <p className="text-gray-500">(Formulario en construcción... como la biblioteca misma)</p>
     </div>
     */}
      </div>
    </section>
  );
}

export default ContactInfoComponent;
