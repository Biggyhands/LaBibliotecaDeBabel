"use client";

import React, { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import FilterBar from "./FilterBar";
import { useDebounce } from "@/lib/hooks/use-debounce";

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
		<Card className='bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between'>
			<div className='h-52 flex items-center justify-center bg-gray-100 rounded-t-lg'>
				<BookOpen className='w-12 h-12 text-gray-400' />
			</div>
			<CardContent className='p-4 text-center flex flex-col gap-2'>
				<h2 className='text-sm font-semibold text-gray-900 leading-tight'>{book.title}</h2>
				<p className='text-sm text-gray-600'>{book.author}</p>
				<p className='text-xs text-gray-400'>
					Publicado: {new Date(book.published).toLocaleDateString()}
				</p>
				<Button
					className='mt-3 bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 cursor-pointer'
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
	totalPages,
}: {
	page: number;
	setPage: (page: number) => void;
	hasNextPage: boolean;
	totalPages: number;
}) {
	return (
		<div className='flex justify-center gap-4 mt-10'>
			<Button variant='outline' onClick={() => setPage(page - 1)} disabled={page === 1}>
				Página anterior
			</Button>
			<span className='flex items-center font-medium text-gray-700'>
				Página {page} de {totalPages}
			</span>
			<Button variant='outline' onClick={() => setPage(page + 1)} disabled={!hasNextPage}>
				Siguiente página
			</Button>
		</div>
	);
}

function LoadingGrid() {
	return (
		<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
			{[...Array(10)].map((_, i) => (
				<div key={i} className='animate-pulse'>
					<div className='h-52 bg-gray-200 rounded-lg mb-4' />
					<div className='h-4 bg-gray-200 rounded w-3/4 mb-2' />
					<div className='h-4 bg-gray-200 rounded w-1/2' />
				</div>
			))}
		</div>
	);
}

export default function Products() {
	const [books, setBooks] = useState<Book[]>([]);
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState("");
	const [genre, setGenre] = useState("");
	const [loading, setLoading] = useState(true);
	const [totalPages, setTotalPages] = useState(1);
	const [genres, setGenres] = useState<string[]>([]);

	const debouncedSearch = useDebounce(search, 300);

	useEffect(() => {
		setLoading(true);
		const url = new URL("/api/books", window.location.origin);
		url.searchParams.append("page", page.toString());
		url.searchParams.append("search", debouncedSearch);
		if (genre) url.searchParams.append("genre", genre);

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setBooks(data.books);
				setTotalPages(data.totalPages);

				// Extract unique genres if not already loaded
				if (!genres.length) {
					const uniqueGenres = [...new Set(data.books.map((b: Book) => b.genre))] as string[];
					setGenres(uniqueGenres);
				}
			})
			.catch((err) => console.error("Failed to fetch books:", err))
			.finally(() => setLoading(false));
	}, [page, debouncedSearch, genre, genres]);

	return (
		<div className='container mx-auto px-4 py-8'>
			<h1 className='text-4xl font-bold mb-2 text-center text-gray-800'>Library Collection</h1>
			<p className='text-center text-gray-500 mb-8'>
				Discover our extensive collection of digital books
			</p>

			<FilterBar
				search={search}
				setSearch={setSearch}
				genre={genre}
				setGenre={setGenre}
				genres={genres}
			/>

			{loading ? (
				<LoadingGrid />
			) : (
				<>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
						{books.map((book) => (
							<BookCard key={book.id} book={book} />
						))}
					</div>

					{books.length === 0 && (
						<div className='text-center py-12 text-gray-500'>
							No books found matching your criteria
						</div>
					)}

					{books.length > 0 && (
						<Pagination
							totalPages={totalPages}
							page={page}
							setPage={setPage}
							hasNextPage={books.length === 10}
						/>
					)}
				</>
			)}
		</div>
	);
}
