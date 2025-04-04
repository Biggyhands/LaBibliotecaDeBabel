import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
	// Hash password for users
	const hashedPassword = await bcrypt.hash("password123", 10);

	// Create admin user
	const admin = await prisma.user.create({
		data: {
			username: "admin.biblioteca",
			email: "admin@biblioteca.com",
			firstName: "Admin",
			lastName: "Principal",
			password: hashedPassword,
			role: "ADMIN",
		},
	});

	console.log("Created admin user:", admin);

	// Create normal users
	const users = await prisma.user.createMany({
		data: [
			{
				username: "juan.perez",
				email: "juan.perez@ejemplo.com",
				firstName: "Juan",
				lastName: "Pérez",
				password: hashedPassword,
				role: "USER",
			},
			{
				username: "maria.garcia",
				email: "maria.garcia@ejemplo.com",
				firstName: "María",
				lastName: "García",
				password: hashedPassword,
				role: "USER",
			},
			{
				username: "carlos.rodriguez",
				email: "carlos.rodriguez@ejemplo.com",
				firstName: "Carlos",
				lastName: "Rodríguez",
				password: hashedPassword,
				role: "USER",
			},
		],
	});

	console.log("Created normal users:", users);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
