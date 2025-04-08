"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Profile() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <Card className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Mi Perfil
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Avatar solo con fallback */}
          <div className="flex flex-col items-center gap-2">
            <Avatar className="w-28 h-28">
              <AvatarFallback className="text-xl">US</AvatarFallback>
            </Avatar>
            <Button variant="outline" className="text-sm mt-2 cursor-pointer">
              Cambiar foto
            </Button>
          </div>

          {/* Formulario con placeholders genéricos */}
          <div className="flex-1 w-full space-y-4">
            <div>
              <Label className="text-sm">Nombre</Label>
              <Input placeholder="usuario" />
            </div>
            <div>
              <Label className="text-sm">Correo electrónico</Label>
              <Input placeholder="correo@correo.com" type="email" />
            </div>
            <div>
              <Label className="text-sm">Teléfono</Label>
              <Input placeholder="+57 000 000 0000" />
            </div>
            <div>
              <Label className="text-sm">Dirección</Label>
              <Input placeholder="Dirección" />
            </div>

            <div className="pt-4 text-right">
              <Button className="bg-black text-white hover:bg-gray-900 cursor-pointer">
                Guardar cambios
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
