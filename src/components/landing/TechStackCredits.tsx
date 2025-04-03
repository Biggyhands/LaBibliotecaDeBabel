"use client";

import React from "react";
import { technologies } from "@/lib/helpers/techData";
import CreditsContextAndMessage from "./CreditsContextAndMessage";
import { motion } from "framer-motion";

export function TechStackCredits() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto text-center">
        {/* Titulo del componente */}
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Detrás de Escena
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Un vistazo a las herramientas y el contexto de creación de La
          Biblioteca de Babel.
        </p>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm text-left">
          {/* Sección de Tecnologías */}
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
            Tecnologías Utilizadas
          </h3>

          {/* Mapeo de las tecnologias */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-10">
            {technologies.map((tech) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center text-center p-4 cursor-pointer"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>

          <hr className="my-8 border-gray-200" />

          {/* Sección de Contexto Académico */}
          <CreditsContextAndMessage />
        </div>
      </div>
    </section>
  );
}
