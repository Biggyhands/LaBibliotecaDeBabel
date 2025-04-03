import React from "react";
import { contactInfoData } from "@/lib/helpers/contactData";

function ContactInfoDetails() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
      {/* Dirección */}
      <div className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
          {contactInfoData.address.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">
            Dirección (Sede Conceptual)
          </h3>
          <p className="text-gray-600">{contactInfoData.address.street}</p>
          <p className="text-gray-600">
            {contactInfoData.address.city}, {contactInfoData.address.country}
          </p>
        </div>
      </div>

      {/* Teléfono */}
      <div className="cursor-pointer flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
          {contactInfoData.phone.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">
            {contactInfoData.phone.label}
          </h3>
          <p className="text-gray-600">{contactInfoData.phone.number}</p>
          <p className="text-sm text-gray-500">
            (Solo para consultas urgentes sobre paradojas temporales)
          </p>
        </div>
      </div>

      {/* Email */}
      <div className=" cursor-pointer flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
          {contactInfoData.email.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">
            {contactInfoData.email.label}
          </h3>
          <a
            href={`mailto:${contactInfoData.email.address}`}
            className="text-indigo-600 hover:text-indigo-800 break-all"
          >
            {contactInfoData.email.address}
          </a>
          <p className="text-sm text-gray-500">
            (Respondemos más rápido que cambiar de pagina)
          </p>
        </div>
      </div>

      {/* Horario */}
      <div className="cursor-pointer flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center mb-4 ">
          {contactInfoData.hours.icon}
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1 text-gray-800">
            Horarios de Atención
          </h3>
          <p className="text-gray-600">{contactInfoData.hours.digital}</p>
          <p className="text-gray-600">{contactInfoData.hours.support}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfoDetails;
