import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";

const BookSchema = z.object({
	title: z.string(),
	author: z.string(),
	genre: z.string(),
	published: z.coerce.date(), // Accepts strings or Date objects and coerces them to Date
});

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const page = parseInt(searchParams.get("page") || "1", 10);
	const order = searchParams.get("order") ?? "id";
	const search = searchParams.get("search") || "";
	const genre = searchParams.get("genre") || "";
	const perPage = 10;

	try {
		const books = await prisma.books.findMany({
			where: {
				AND: [
					{
						OR: [
							{ title: { contains: search, mode: "insensitive" } },
							{ author: { contains: search, mode: "insensitive" } },
						],
					},
					genre ? { genre: { equals: genre, mode: "insensitive" } } : {},
				],
			},
			select: {
				id: true,
				title: true,
				author: true,
				genre: true,
				published: true,
			},
			skip: (page - 1) * perPage,
			take: perPage,
			orderBy: { [order]: "asc" },
		});

		const total = await prisma.books.count({
			where: {
				AND: [
					{
						OR: [
							{ title: { contains: search, mode: "insensitive" } },
							{ author: { contains: search, mode: "insensitive" } },
						],
					},
					genre ? { genre: { equals: genre, mode: "insensitive" } } : {},
				],
			},
		});

		return NextResponse.json({
			books,
			totalPages: Math.ceil(total / perPage),
			currentPage: page,
		});
	} catch (error) {
		console.error("Error fetching books:", error);
		return NextResponse.json({ message: "Book fetching failed" }, { status: 400 });
	}
}

export async function POST(req: NextRequest) {
	const body = await req.json();

	const result = await BookSchema.safeParse(body);

	if (!result.success) {
		return NextResponse.json(
			{ error: "Invalid input", issues: result.error.issues },
			{ status: 422 },
		);
	}

	try {
		await prisma.books.create({
			data: {
				...body,
			},
		});

		return NextResponse.json({ message: "Book was created succesfully" }, { status: 201 });
	} catch (error) {
		console.error(error);
		return NextResponse.json({ message: "Book creation failed" }, { status: 400 });
	}
}
