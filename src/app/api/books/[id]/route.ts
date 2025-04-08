import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    console.log("Recibido ID para buscar libro:", id); // Log para verificar el ID recibido

    if (!id) {
      console.error("ID no proporcionado en la solicitud.");
      return NextResponse.json(
        { error: "ID no proporcionado" },
        { status: 400 }
      );
    }

    const book = await prisma.books.findUnique({
      where: { id },
    });

    if (!book) {
      console.warn("Libro no encontrado para ID:", id); // Log si no se encuentra el libro
      return NextResponse.json(
        { error: "Libro no encontrado" },
        { status: 404 }
      );
    }

    console.log("Libro encontrado:", book); // Log para verificar el libro encontrado
    return NextResponse.json(book);
  } catch (error) {
    console.error("Error al obtener el libro:", error);
    return NextResponse.json(
      { error: "Error al obtener el libro" },
      { status: 500 }
    );
  }
}
