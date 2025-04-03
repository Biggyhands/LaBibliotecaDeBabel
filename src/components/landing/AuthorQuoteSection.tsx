"use client";

import { useEffect, useState } from "react";
import { getRandomQuote } from "@/lib/helpers/quotes";
import { Skeleton } from "@/components/ui/skeleton";
import { Quote } from "lucide-react";

// Interfaz para el tipo de cita
interface QuoteType {
  autor: string;
  frase: string;
}

export function AuthorQuoteSection() {
  // Estado para almacenar la cita actual
  const [quote, setQuote] = useState<QuoteType>({ autor: "", frase: "" });
  // Estado para controlar el estado de carga
  const [isLoading, setIsLoading] = useState(true);

  // Efecto para cargar una cita aleatoria al montar el componente
  useEffect(() => {
    const loadQuote = () => {
      setIsLoading(true);
      // Simulamos una carga asíncrona con setTimeout
      setTimeout(() => {
        setQuote(getRandomQuote());
        setIsLoading(false);
      }, 1000);
    };

    loadQuote();
  }, []); // Array de dependencias vacío para que solo se ejecute al montar

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex items-center space-x-4 max-w-3xl mx-auto">
          {/* Contenedor del ícono de cita */}
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
            {isLoading ? (
              // Mostrar skeleton durante la carga
              <Skeleton className="w-8 h-8 rounded-full" />
            ) : (
              // Mostrar ícono de cita cuando está cargado
              <Quote className="w-8 h-8 text-gray-700" />
            )}
          </div>
          {/* Contenedor del texto de la cita */}
          <div className="flex-1">
            {isLoading ? (
              // Mostrar skeletons durante la carga
              <>
                <Skeleton className="h-7 w-48 mb-2" />
                <Skeleton className="h-8 w-full" />
              </>
            ) : (
              // Mostrar cita y autor cuando está cargado
              <>
                <h3 className="font-semibold text-xl mb-2">{quote.autor}</h3>
                <p className="text-gray-600 italic">
                  &ldquo;{quote.frase}&rdquo;
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
