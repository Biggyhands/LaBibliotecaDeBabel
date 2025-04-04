import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";

import { forgotPasswordSchema } from "@/lib/types/globals";
import { ForgotPasswordFormData } from "@/lib/types/globals";
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
import { toast } from "sonner";

interface ForgotPasswordFormProps {
  onBackToLogin: () => void;
}

export default function ForgotPasswordForm({
  onBackToLogin,
}: ForgotPasswordFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  /**
   * Maneja el envío del formulario.
   * Simula una llamada a la API para enviar un enlace de recuperación de contraseña.
   *
   * @param {ForgotPasswordFormData} values - Datos del formulario.
   */
  async function onSubmit(values: ForgotPasswordFormData) {
    console.log("Solicitando reseteo para:", values.email);
    toast.info("Procesando solicitud...");

    // Simula una llamada a la API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
    toast.success("Correo de recuperación enviado", {
      description: "Revisa tu bandeja de entrada.",
    });
  }

  /**
   * Maneja errores de validación del formulario.
   *
   * @param {FieldErrors<ForgotPasswordFormData>} errors - Errores de validación.
   */
  function onError(errors: FieldErrors<ForgotPasswordFormData>) {
    console.log("Errores de validación:", errors);
    toast.error("Correo inválido", {
      description: "Por favor, introduce un correo válido.",
    });
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-lg">
        <p className="text-lg font-medium text-green-800 dark:text-green-200">
          ¡Correo Enviado!
        </p>
        <p className="text-green-700 dark:text-green-300 mt-2 mb-4">
          Revisa tu bandeja de entrada (y spam) para encontrar las instrucciones
          para restablecer tu contraseña.
        </p>
        <Button
          variant="outline"
          onClick={onBackToLogin}
          className="cursor-pointer"
        >
          Volver a Inicio de Sesión
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tu Correo Electrónico</FormLabel>
              <FormControl>
                <Input
                  placeholder="tuemail@ejemplo.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
              <p className="text-sm text-muted-foreground pt-1">
                Introduce el correo asociado a tu cuenta.
              </p>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full cursor-pointer"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting
            ? "Enviando..."
            : "Enviar Enlace de Recuperación"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          className="w-full cursor-pointer"
          onClick={onBackToLogin}
        >
          Cancelar y volver a ingresar
        </Button>
      </form>
    </Form>
  );
}
