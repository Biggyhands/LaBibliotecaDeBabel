import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcryptjs";

export async function GET() {
	const users = await prisma.user.findMany({
		select: {
			id: true,
			firstName: true,
			lastName: true,
			username: true,
			email: true,
			role: true,
		},
	});
	return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
   const body = await req.json();
   const { firstName, lastName, username, email, password } = body;

   const userSchema = z.object({
      firstName: z.string().min(1),
      lastName: z.string().min(1),
      username: z.string().min(1),
      email: z.string().email(),
      password: z.string().min(6),
   });

   const result = userSchema.safeParse(body);

   if (!result.success) {
      return NextResponse.json(
         { error: "Invalid input", issues: result.error.issues },
         { status: 422 }
      );
   }
   

   const hashedPassword = await bcrypt.hash(password, 10);

   const user = await prisma.user.create({
      data: {
         firstName,
         lastName,
         username,
         email,
         password: hashedPassword,
         role: "USER",
      },
   });

   return NextResponse.json(user);
}
