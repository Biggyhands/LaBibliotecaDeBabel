"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CreateBook() {
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsLoading(true);

		const formData = new FormData(e.currentTarget);
		const bookData = {
			title: formData.get("title") as string,
			author: formData.get("author") as string,
			genre: formData.get("genre") as string,
			published: new Date(formData.get("published") as string),
		};

		try {
			const response = await fetch("/api/books", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(bookData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.message || "Something went wrong");
			}

			e.currentTarget.reset();
			toast.success("Book created successfully!");
			setTimeout(() => {
				router.push("/");
			}, 2000);
		} catch (error) {
			toast.error("Failed to create book");
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className='container mx-auto p-6 my-32'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='relative h-[600px] rounded-lg overflow-hidden hidden md:block'>
					<Image
						fill
						src='/images/library-2.jpg'
						alt='Library'
						className='absolute inset-0 w-full h-full object-cover'
					/>
					<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-black/20' />
					<div className='absolute bottom-0 left-0 p-8 text-white'>
						<h2 className='text-3xl font-bold mb-2'>Add New Book</h2>
						<p className='text-gray-200'>Expand your library with new literary treasures</p>
					</div>
				</div>

				<Card className='w-full'>
					<CardHeader>
						<CardTitle className='text-2xl'>Book Details</CardTitle>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='space-y-2'>
								<Label htmlFor='title'>Title</Label>
								<Input
									id='title'
									name='title'
									required
									placeholder='Enter book title'
									className='w-full'
								/>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='author'>Author</Label>
								<Input
									id='author'
									name='author'
									required
									placeholder='Enter author name'
									className='w-full'
								/>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='genre'>Genre</Label>
								<Input
									id='genre'
									name='genre'
									required
									placeholder='Enter book genre'
									className='w-full'
								/>
							</div>

							<div className='space-y-2'>
								<Label htmlFor='published'>Publication Date</Label>
								<Input id='published' name='published' type='date' required className='w-full' />
							</div>

							<Button type='submit' className='w-full' disabled={isLoading}>
								{isLoading ? "Creating..." : "Create Book"}
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
