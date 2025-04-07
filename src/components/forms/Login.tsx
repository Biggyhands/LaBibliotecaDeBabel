"use client";

// Imports necesarios
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

// Importa solo lo necesario para Login
import { loginSchema, LoginFormData } from "@/lib/types/globals";

// Importa tu componente externo ForgotPasswordForm
import ForgotPasswordForm from "./ForgotPasswordForm"; // <-- AJUSTA LA RUTA si es necesario

// --- Componente Principal de Login ---
function Login() {
  const imageUrl = "/images/library-4.jpg"; // O la ruta a tu imagen

  // Estado para controlar qué vista mostrar: 'login' o 'forgotPassword'
  const [viewMode, setViewMode] = useState<"login" | "forgotPassword">("login");

  // --- Configuración del Formulario de Login ---
  const loginForm = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  /**
   * Maneja el envío del formulario de inicio de sesión.
   * Simula una llamada a la API para autenticar al usuario.
   *
   * @param {LoginFormData} values - Datos del formulario.
   */
  async function onLoginSubmit(values: LoginFormData) {
    console.log("Intentando iniciar sesión con:", values);
    toast.info("Iniciando sesión...");
    // --- Lógica de Login (Placeholder) ---
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Inicio de sesión exitoso (Simulado)", {
      description: `¡Bienvenido de vuelta, ${values.username}!`,
    });
    // Aquí podrías redirigir si el login fuera real
  }

  /**
   * Maneja errores de validación del formulario de inicio de sesión.
   *
   * @param {FieldErrors<LoginFormData>} errors - Errores de validación.
   */
  function onLoginError(errors: FieldErrors<LoginFormData>) {
    console.log("Errores de validación login:", errors);
    toast.error("Error de Validación", {
      description: "Por favor, revisa los campos.",
    });
  }

  /**
   * Cambia la vista actual a la de inicio de sesión.
   */
  const handleBackToLogin = () => {
    setViewMode("login"); // Cambia la vista de vuelta a login
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Imagen (sin cambios) */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200 dark:bg-gray-800">
          <Image
            src={imageUrl}
            alt="Ilustración"
            width={700}
            height={700}
            className="object-cover w-full h-full"
            priority
            unoptimized={process.env.NODE_ENV === "development"}
          />
        </div>
      </div>

      {/* Contenedor del Formulario (Login o Forgot Password) */}
      <div className="flex flex-1 justify-center items-center p-4 sm:p-8">
        <Card className="w-full max-w-md">
          {/* === Vista de Login === */}
          {viewMode === "login" && (
            <>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                  Iniciar Sesión
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...loginForm}>
                  <form
                    onSubmit={loginForm.handleSubmit(
                      onLoginSubmit,
                      onLoginError
                    )}
                    className="space-y-6"
                  >
                    {/* Campo Username */}
                    <FormField
                      control={loginForm.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre de Usuario</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              placeholder="Tu nombre de usuario"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Campo Password */}
                    <FormField
                      control={loginForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Contraseña</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              placeholder="Tu contraseña"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Botón/Enlace para cambiar a "Olvidé Contraseña" */}
                    <div className="flex justify-end text-sm">
                      <button
                        type="button" // Es un botón, no un submit
                        onClick={() => setViewMode("forgotPassword")} // Cambia el estado para mostrar el otro componente
                        className="font-medium text-primary hover:underline hover:text-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-sm cursor-pointer" // Estilo como link
                      >
                        ¿He olvidado mi contraseña?
                      </button>
                    </div>
                    {/* Botón Submit Login */}
                    <Button
                      type="submit"
                      className="w-full cursor-pointer"
                      disabled={loginForm.formState.isSubmitting}
                    >
                      {loginForm.formState.isSubmitting
                        ? "Iniciando..."
                        : "Iniciar Sesión"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </>
          )}

          {/* === Vista de "Olvidé Contraseña" === */}
          {/* Aquí renderizamos el componente importado */}
          {viewMode === "forgotPassword" && (
            <>
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                  Recuperar Contraseña
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Renderiza el componente importado y le pasa la función para volver */}
                <ForgotPasswordForm onBackToLogin={handleBackToLogin} />
              </CardContent>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

export default Login;
