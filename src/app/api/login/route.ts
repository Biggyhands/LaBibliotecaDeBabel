import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";
import { z } from "zod";
import next from "next";

/**
 * Esquema de validación para las credenciales de inicio de sesión.
 * Utiliza Zod para garantizar que los datos enviados sean válidos.
 */
const loginSchema = z.object({
  username: z.string().min(3, "El user debe ser válido."),
  password: z.string().min(8, "La contraseña es obligatoria."),
});

export async function POST(req: NextRequest) {
  try {
    // Parsear y validar los datos enviados en el cuerpo de la solicitud.
    const body = await req.json();
    console.log(body);
    const result = loginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Datos inválidos", issues: result.error.issues },
        { status: 422 }
      );
    }

    const { username, password } = result.data;

    // Buscar al usuario en la base de datos por correo electrónico.
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Credenciales inválidas. Usuario no encontrado." },
        { status: 401 }
      );
    }

    // Verificar la contraseña.
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Credenciales inválidas. Contraseña incorrecta." },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Inicio de sesión exitoso" },
      { status: 200 }
    );
    // Responder con los datos del usuario (sin incluir la contraseña).
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    return NextResponse.json(
      { error: "Ocurrió un error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
