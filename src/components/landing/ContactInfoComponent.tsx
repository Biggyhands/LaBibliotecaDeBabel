import React from "react";
import ContactInfoDetails from "./ContactInfoDetails";
import { ContactSubscriptionForm } from "./ContactSubscriptionForm";

function ContactInfoComponent() {
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
        <ContactInfoDetails />

        {/*Form de contacto al usuario*/}
        <ContactSubscriptionForm />
      </div>
    </section>
  );
}

export default ContactInfoComponent;
