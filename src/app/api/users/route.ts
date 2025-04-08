import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcryptjs";

const userSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	username: z.string().min(3),
	email: z.string().email(),
	password: z.string().min(8),
});

export async function GET() {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			firstName: true,
			lastName: true,
			username: true,
			email: true,
			role: true,
			createdAt: true,
		},
	});
	return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
	const body = await req.json();
	const { firstName, lastName, username, email, password } = body;

	const result = userSchema.safeParse(body);

	if (!result.success) {
		return NextResponse.json(
			{ error: "Invalid input", issues: result.error.issues },
			{ status: 422 },
		);
	}

	try {
		const hashedPassword = await bcrypt.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				firstName,
				lastName,
				username,
				email,
				password: hashedPassword,
				role: "ADMIN",
			},
		});

		return NextResponse.json({ user }, { status: 201 });
	} catch (error) {
		console.error("[DEGUB]Error creating user:", error);
		return NextResponse.json({ message: "User creation failed" }, { status: 400 });
	}
}
