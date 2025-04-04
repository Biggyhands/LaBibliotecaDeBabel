import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
	return (
		<nav className='border-b'>
			<div className='flex h-16 items-center px-4 container mx-auto'>
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
				<div className='ml-auto flex items-center space-x-4'>
					<Button variant='outline' asChild>
						<Link href='/signin'>Ingresar</Link>
					</Button>
					<Button asChild>
						<Link href='/register'>Registrarse</Link>
					</Button>
				</div>
			</div>
		</nav>
	);
}
