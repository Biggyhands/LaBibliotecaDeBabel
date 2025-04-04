import React from "react";

type Props = {
  name: string;
};

function RegisterSuccess({ name }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4">Registro Exitoso</h1>
      <p className="text-lg">Gracias por registrarte, {name}!</p>
    </div>
  );
}

export default RegisterSuccess;
