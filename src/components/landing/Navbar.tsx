"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "@/lib/context/session-context"; // Ajusta la ruta según tu estructura de carpetas
import { useRouter } from "next/navigation";

export function Navbar() {
	const { session, logOut } = useSession();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Check if session has been initialized
		setIsLoading(false);
	}, [session]);

	const handleLogOut = () => {
		logOut();
		router.push("/"); // Redirect to home page after logout
	};

	return (
		<nav className='border-b'>
			<div className='flex h-16 items-center justify-between px-4 container mx-auto'>
				<div className='flex items-center space-x-2'>
					<Link href='/' className='flex items-center space-x-2'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='h-10 w-10'
						>
							<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z' />
							<path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z' />
						</svg>
						<span className='text-2xl font-bold ml-2 hidden sm:block'>La Biblioteca de Babel</span>
					</Link>
					{session && session.role === "ADMIN" && (
						<ul>
							<Link href='/admin'>{"Admin Route(TEST)"}</Link>
						</ul>
					)}
				</div>

				{isLoading ? (
					<div>Loading...</div>
				) : session ? (
					<Button onClick={handleLogOut}>Cerrar sesión</Button>
				) : (
					<div className='ml-auto flex items-center space-x-4'>
						<Button variant='outline'>
							<Link href='/login'>Ingresar</Link>
						</Button>
						<Button>
							<Link href='/register'>Registrarse</Link>
						</Button>
					</div>
				)}
			</div>
		</nav>
	);
}
