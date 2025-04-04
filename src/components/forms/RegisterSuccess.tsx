// Asegúrate de tener esta importación si usas Next.js
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

type Props = {
  name: string;
};

function RegisterSuccess({ name }: Props) {
  // Define la ruta a tu imagen en la carpeta public
  const imageUrl = "/images/library-4.jpg"; // Ajusta la extensión (.png, .jpeg, .webp, etc.) si es diferente

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sección de la Imagen */}
      <div className="hidden lg:flex flex-1 items-center justify-center p-8">
        {/* Contenedor que define el tamaño y estilo de la imagen */}
        <div className="w-full max-w-md overflow-hidden rounded-lg shadow-md aspect-square bg-gray-200 dark:bg-gray-800">
          {" "}
          {/* Añadido aspect-square y bg para placeholder */}
          <Image
            src={imageUrl}
            alt="Ilustración de biblioteca" // Alt text descriptivo
            width={700} // Ancho intrínseco (ajusta según tu imagen para mejor optimización)
            height={700} // Alto intrínseco (ajusta según tu imagen)
            className="object-cover w-full h-full" // Asegura que la imagen cubra el contenedor
            priority // Opcional: Carga la imagen antes si es importante
            unoptimized={process.env.NODE_ENV === "development"} // Útil si tienes problemas con la optimización localmente
          />
        </div>
      </div>

      {/* Sección de la Card */}
      <div className="flex flex-1 justify-center items-center p-4 sm:p-8">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-800 ">
              ¡Registro Exitoso!
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle className="h-12 w-12 text-gray-200" />
            </div>
            <p className="text-lg">
              ¡Gracias por registrarte,{" "}
              <span className="font-semibold">{name}</span>!
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tu cuenta ha sido creada correctamente. Ya puedes iniciar sesión.
            </p>
            {/* Opcional: Botón para ir al login */}
            {/*
            <Button onClick={() => router.push('/login')}>
              Ir a Iniciar Sesión
            </Button>
            */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default RegisterSuccess;
