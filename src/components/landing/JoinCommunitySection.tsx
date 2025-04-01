"use client";

import { useState } from "react";
import { Glasses, BookmarkCheck, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"; // Ensure this path is correct

// Define the unique values for each accordion item
const allItemValues = ["item-1", "item-2", "item-3"];

export function JoinCommunitySection() {
  // State to track if ALL items should be open or closed
  const [isAllOpen, setIsAllOpen] = useState(false);

  // Function to toggle the open/closed state for ALL items
  const handleToggleAll = () => {
    setIsAllOpen((prev) => !prev);
  };

  // Determine the value for the Accordion component based on the state
  // If isAllOpen is true, pass all keys; otherwise, pass an empty array
  const accordionValue = isAllOpen ? allItemValues : [];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          ¡Únete a nuestra comunidad!
        </h2>

        {/* Single Accordion component wrapping all items */}
        <Accordion
          type="multiple" // Allow multiple items to be open
          value={accordionValue} // Controlled value based on isAllOpen state
          onValueChange={handleToggleAll} // Toggle the state on any item click
          className="grid md:grid-cols-3 gap-8" // Apply grid layout to the Accordion itself
        >
          {/* Item 1 */}
          <AccordionItem
            value="item-1"
            className="bg-white p-6 rounded-lg shadow-sm border-0" // Style the item like a card
          >
            {/* Custom layout for icon and trigger */}
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Glasses className="w-8 h-8 text-gray-600" />
              </div>
              <AccordionTrigger className="hover:no-underline p-0">
                <h3 className="font-semibold">¡Conviértete en un lector!</h3>
              </AccordionTrigger>
            </div>
            <AccordionContent className="pt-0">
              {" "}
              {/* Add pt-0 if needed to adjust spacing */}
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>Acceso a miles de libros digitales</li>
                <li>Préstamos extendidos hasta 30 días</li>
                <li>Recomendaciones personalizadas</li>
                <li>Participación en clubes de lectura</li>
                <li>Descuentos especiales en compras</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 2 */}
          <AccordionItem
            value="item-2"
            className="bg-white p-6 rounded-lg shadow-sm border-0"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <BookmarkCheck className="w-8 h-8 text-gray-600" />
              </div>
              <AccordionTrigger className="hover:no-underline p-0">
                <h3 className="font-semibold">
                  Conoce nuestro programa de afiliados
                </h3>
              </AccordionTrigger>
            </div>
            <AccordionContent className="pt-0">
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>Comisiones por recomendaciones</li>
                <li>Acceso a contenido exclusivo</li>
                <li>Panel de análisis y estadísticas</li>
                <li>Materiales promocionales</li>
                <li>Soporte prioritario</li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          {/* Item 3 */}
          <AccordionItem
            value="item-3"
            className="bg-white p-6 rounded-lg shadow-sm border-0"
          >
            <div className="flex flex-col items-center mb-4">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                <Users className="w-8 h-8 text-gray-600" />
              </div>
              <AccordionTrigger className="hover:no-underline p-0">
                <h3 className="font-semibold">Únete a nuestro equipo</h3>
              </AccordionTrigger>
            </div>
            <AccordionContent className="pt-0">
              <ul className="list-disc pl-4 space-y-2 text-gray-600">
                <li>Ambiente laboral dinámico</li>
                <li>Desarrollo profesional continuo</li>
                <li>Beneficios competitivos</li>
                <li>Horario flexible</li>
                <li>Trabajo remoto disponible</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
