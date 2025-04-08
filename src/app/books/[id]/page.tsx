"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { BookOpen, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookDetailsSkeleton from "@/components/products/BookDetailsSkeleton";
import { useCart } from "@/lib/context/cart-context";

type BookDetails = {
  id: string;
  title: string;
  author: string;
  genre: string;
  published: string;
  description: string;
};

export default function BookDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addToCart } = useCart(); // Hook para manejar el carrito
  const [book, setBook] = useState<BookDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID del libro no proporcionado.");
      setLoading(false);
      return;
    }

    async function fetchBookDetails() {
      try {
        const response = await fetch(`/api/books/${id}`);
        if (!response.ok) {
          setError("El libro no fue encontrado.");
          return;
        }
        const data = await response.json();
        setBook(data);
      } catch (error) {
        setError("Error al conectar con el servidor.");
      } finally {
        setLoading(false);
      }
    }

    fetchBookDetails();
  }, [id]);

  if (loading) return <BookDetailsSkeleton />;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!book) return <div>No se encontraron detalles para este libro.</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Detalles principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        {/* Portada */}
        <div className="bg-gray-100 h-96 flex items-center justify-center rounded-lg">
          <BookOpen className="w-20 h-20 text-gray-400" />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              {book.title}
            </h1>
            <p className="text-gray-600">por {book.author}</p>
            <p className="mt-2 text-2xl font-semibold text-black">$50.000</p>
            <p className="text-sm text-gray-500 mt-2">Género: {book.genre}</p>
            <p className="text-sm text-gray-500">
              Publicado: {new Date(book.published).toLocaleDateString()}
            </p>
          </div>

          {/* Botón */}
          <Button
            className="mt-4 bg-gray-900 hover:bg-gray-700 text-white w-40 text-sm cursor-pointer"
            onClick={() => {
              addToCart({
                id: book.id,
                title: book.title,
                author: book.author,
                price: 50000, // Precio estático como ejemplo
              });
            }}
          >
            Agregar al carrito
          </Button>

          {/* Descripción tipo FAQ */}
          <details className="border border-gray-300 rounded mt-4 p-4">
            <summary className="font-semibold cursor-pointer">
              Descripción
            </summary>
            <p className="text-sm text-gray-600 mt-2">{}</p>
          </details>
        </div>
      </div>

      {/* Reseñas */}
      <div className="mb-16">
        <h2 className="text-xl font-bold mb-4">Últimas reseñas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="border rounded-lg p-4">
              <div className="flex gap-1 mb-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-300 stroke-yellow-500"
                  />
                ))}
              </div>
              <h3 className="font-semibold text-sm">Review title</h3>
              <p className="text-sm text-gray-600 mb-2">Review body</p>
              <div className="flex items-center gap-2 mt-auto">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Reviewer"
                  className="w-6 h-6 rounded-full"
                />
                <div>
                  <p className="text-xs font-medium">Reviewer name</p>
                  <p className="text-xs text-gray-400">Date</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="text-center border-t pt-8">
        <h3 className="font-semibold mb-1">Follow the latest trends</h3>
        <p className="text-sm text-gray-500 mb-4">With our daily newsletter</p>
        <form className="flex flex-col sm:flex-row gap-2 justify-center items-center">
          <input
            type="email"
            placeholder="you@example.com"
            className="border px-4 py-2 rounded text-sm w-full sm:w-72"
          />
          <Button
            type="submit"
            className="bg-gray-900 hover:bg-gray-700 text-white text-sm"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
