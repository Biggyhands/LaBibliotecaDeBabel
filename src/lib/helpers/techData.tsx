import React from "react";
import { Code, Wind, Component, Smile } from "lucide-react";
import { TechnologyInfo } from "@/lib/types/globals";

export const technologies: TechnologyInfo[] = [
  { name: "Next.js", icon: <Code className="w-5 h-5 text-gray-700" /> },
  { name: "React.js", icon: <Code className="w-5 h-5 text-gray-700" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-5 h-5 text-gray-700" /> },
  { name: "Shadcn/ui", icon: <Component className="w-5 h-5 text-gray-700" /> },
  { name: "Lucide React", icon: <Smile className="w-5 h-5 text-gray-700" /> },
];
