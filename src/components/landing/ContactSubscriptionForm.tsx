"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button"; // Ajusta la ruta si es necesario
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email({
    message: "Por favor, introduce un correo electrónico válido.",
  }),
});

export function ContactSubscriptionForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Formulario válido, email:", values.email);
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-6 mt-20 bg-green-100 border border-green-300 rounded-lg max-w-sm mx-auto">
        <p className="text-lg font-medium text-green-800">¡Gracias!</p>
        <p className="text-green-700">Te contactaremos muy pronto.</p>
      </div>
    );
  }

  return (
    <div className="mt-16 text-center">
      <h3 className="text-2xl font-semibold mb-4">
        O si prefieres ser contactado
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 max-w-sm mx-auto"
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
                <FormMessage />{" "}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={form.formState.isSubmitting}
          >
            Enviar
          </Button>
        </form>
      </Form>
    </div>
  );
}
