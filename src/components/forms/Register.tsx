"use client"; // Necesario si usas Next.js App Router y hooks de cliente

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldErrors } from "react-hook-form";
import * as z from "zod";
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
import { formSchema } from "@/lib/types/globals";
import RegisterSuccess from "./RegisterSuccess";
// esquema de validación con Zod

// Tipado para los datos del formulario inferido desde el esquema Zod
type RegisterFormData = z.infer<typeof formSchema>;

function Register() {
	const [submitted, setSubmitted] = useState(false);
	const imageUrl = "/images/library-4.jpg";

	const form = useForm<RegisterFormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	function onSubmit(values: RegisterFormData) {
		console.log("Datos del formulario válidos:", values);

		toast.success("Registro Exitoso", {
			description: `Bienvenido, ${values.firstName}!`,
		});

		{
			/*form.reset();*/
		}
		setSubmitted(true);
	}

	// Función para manejar errores de envío
	function onError(errors: FieldErrors<RegisterFormData>) {
		console.log("Errores de validación:", errors);
		toast.error("Error de Validación", {
			description: "Por favor, corrige los errores en el formulario.",
		});
	}

	if (submitted) {
		return <RegisterSuccess name={form.getValues().firstName} />;
	}

	return (
		<div className='flex min-h-screen bg-gray-100 dark:bg-gray-900'>
			{/* Imagen de fondo*/}

			<div className='hidden lg:flex flex-1 items-center justify-center p-8'>
				<div className='w-full max-w-md overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200 dark:bg-gray-800'>
					{" "}
					{/* Añadido aspect-square y bg para placeholder */}
					<Image
						src={imageUrl}
						alt='Ilustración de biblioteca' // Alt text descriptivo
						width={700} // Ancho intrínseco (ajusta según tu imagen para mejor optimización)
						height={700} // Alto intrínseco (ajusta según tu imagen)
						className='object-cover w-full h-full' // Asegura que la imagen cubra el contenedor
						priority // Opcional: Carga la imagen antes si es importante
						unoptimized={process.env.NODE_ENV === "development"} // Útil si tienes problemas con la optimización localmente
					/>
				</div>
			</div>

			{/* Formulario */}
			<div className='flex flex-1 justify-center items-center p-4 sm:p-8'>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle className='text-center text-2xl font-bold'>Registro</CardTitle>
					</CardHeader>
					<CardContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit, onError)} className='space-y-4'>
								{/* Campo Usuario */}
								<FormField
									control={form.control}
									name='username'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Usuario</FormLabel>
											<FormControl>
												<Input placeholder='Tu nombre de usuario' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Campo Nombre */}
								<FormField
									control={form.control}
									name='firstName'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Nombre</FormLabel>
											<FormControl>
												<Input placeholder='Tu primer nombre' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Campo Apellido */}
								<FormField
									control={form.control}
									name='lastName'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Apellido</FormLabel>
											<FormControl>
												<Input placeholder='Tu apellido' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Campo Correo */}
								<FormField
									control={form.control}
									name='email'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Correo Electrónico</FormLabel>
											<FormControl>
												<Input type='email' placeholder='ejemplo@correo.com' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Campo Contraseña */}
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Contraseña</FormLabel>
											<FormControl>
												<Input type='password' placeholder='Crea una contraseña' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Campo Confirmar Contraseña */}
								<FormField
									control={form.control}
									name='confirmPassword'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Confirmar Contraseña</FormLabel>
											<FormControl>
												<Input
													type='password'
													placeholder='Vuelve a escribir la contraseña'
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button type='submit' className='w-full' disabled={form.formState.isSubmitting}>
									{form.formState.isSubmitting ? "Registrando..." : "Registrarse"}
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

export default Register;
