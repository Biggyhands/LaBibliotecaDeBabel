"use client";

import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Book = {
  id: string;
  title: string;
  author: string;
  genre: string;
  published: string;
};

function BookCard({ book }: { book: Book }) {
  const router = useRouter();

  return (
    <Card className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between">
      <div className="h-52 flex items-center justify-center bg-gray-100 rounded-t-lg">
        <BookOpen className="w-12 h-12 text-gray-400" />
      </div>
      <CardContent className="p-4 text-center flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-gray-900 leading-tight">
          {book.title}
        </h2>
        <p className="text-sm text-gray-600">{book.author}</p>
        <p className="text-xs text-gray-400">
          Publicado: {new Date(book.published).toLocaleDateString()}
        </p>
        <Button
          className="mt-3 bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 cursor-pointer"
          onClick={() => {
            console.log("Navegando a detalles del libro con ID:", book.id); // Log para depuración
            router.push(`/books/${book.id}`);
          }}
        >
          Detalles
        </Button>
      </CardContent>
    </Card>
  );
}

function Pagination({
  page,
  setPage,
  hasNextPage,
}: {
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
}) {
  return (
    <div className="flex justify-center gap-4 mt-10">
      <Button
        variant="outline"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
        className="cursor-pointer"
      >
        Página anterior
      </Button>
      <span className="flex items-center font-medium text-gray-700">
        Página {page}
      </span>
      <Button
        variant="outline"
        onClick={() => setPage(page + 1)}
        disabled={!hasNextPage}
        className="cursor-pointer"
      >
        Siguiente página
      </Button>
    </div>
  );
}

export default function Products() {
  const [books, setBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`/api/books?page=${page}`)
      .then((res) => res.json())
      .then((data) => setBooks(data.books))
      .catch((err) => console.error("Failed to fetch books:", err));
  }, [page]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">
        Novedades
      </h1>
      <p className="text-center text-gray-500 mb-8">
        Lo más reciente en formato electrónico
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        hasNextPage={books.length === 10}
      />
    </div>
  );
}
