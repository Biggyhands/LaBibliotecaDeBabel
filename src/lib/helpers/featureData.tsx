import React from "react";
import { FeatureItem } from "@/lib/types/globals";

import { Book, Library, Users, Globe } from "lucide-react";

export const featureData: FeatureItem[] = [
  {
    icon: <Book className="w-8 h-8 text-gray-700" />,
    title: "Colección Infinita",
    description:
      "Explora nuestra vasta colección de libros de todos los géneros y épocas.",
  },
  {
    icon: <Library className="w-8 h-8 text-gray-700" />,
    title: "Espacios Virtuales",
    description:
      "Disfruta de salas de lectura virtuales y espacios colaborativos.",
  },
  {
    icon: <Users className="w-8 h-8 text-gray-700" />,
    title: "Comunidad Activa",
    description:
      "Únete a una comunidad de lectores apasionados y comparte tus experiencias.",
  },
  {
    icon: <Globe className="w-8 h-8 text-gray-700" />,
    title: "Acceso Universal",
    description:
      "Conecta con lectores de todo el mundo y descubre nuevas perspectivas.",
  },
];
