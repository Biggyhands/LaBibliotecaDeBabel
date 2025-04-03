import React from "react";

import { Heart, GraduationCap } from "lucide-react";

function CreditsContextAndMessage() {
  return (
    <>
      {" "}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-800">
          Contexto Académico
        </h3>
        <div className="flex justify-center mb-4">
          <GraduationCap className="w-8 h-8 text-indigo-600" />
        </div>
        <p className="text-gray-700 leading-relaxed max-w-xl mx-auto">
          Esta aplicación web fue desarrollada con dedicación como proyecto para
          la materia de {""}
          <strong className="font-medium">Front-end</strong>, correspondiente al{" "}
          <strong className="font-medium">séptimo semestre</strong> de la
          carrera de ingenieria de software en el politecnico Grancolombiano.
        </p>
      </div>
      <hr className="my-8 border-gray-200" />
      {/* Mensaje Final */}
      <div className="text-center text-gray-500">
        <p className="flex items-center justify-center text-base">
          Hecha con
          <Heart
            className="w-5 h-5 mx-1.5 text-red-500 fill-current"
            aria-label="amor"
          />
          para mejorar como desarrollador.
        </p>
      </div>
    </>
  );
}

export default CreditsContextAndMessage;
