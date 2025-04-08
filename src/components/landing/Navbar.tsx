"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useSession } from "@/lib/context/session-context";

export function Navbar() {
  const { session, logOut } = useSession();
  const pathname = usePathname();

  // Estilo condicional para los links activos
  const linkStyle = (href: string) =>
    `px-3 py-1 rounded-md ${
      pathname === href
        ? "bg-gray-100 text-black font-semibold"
        : "hover:bg-gray-50"
    }`;

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center justify-between px-4 container mx-auto">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-10 w-10"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <span className="text-2xl font-bold ml-2 hidden sm:block">
              La Biblioteca de Babel
            </span>
          </Link>
        </div>

        {/* Condicionar el contenido de la Navbar según el rol */}
        {session?.role === "USER" && (
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/products" className={linkStyle("/products")}>
                Productos
              </Link>
            </li>
            <li>
              <Link href="/cart" className={linkStyle("/mi-carrito")}>
                Mi Carrito
              </Link>
            </li>
            <li>
              <Link href="/profile" className={linkStyle("/profile")}>
                Mi Perfil
              </Link>
            </li>

            <li>
              <Link href="/contactus" className={linkStyle("/contactus")}>
                Contacto
              </Link>
            </li>

            <li>
              <Button onClick={logOut}>Cerrar sesión</Button>
            </li>
          </ul>
        )}

        {session?.role === "ADMIN" && (
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/create-books" className={linkStyle("/inventario")}>
                Agregar Libros
              </Link>
            </li>
            <li>
              <Link href="/manage-users" className={linkStyle("/comunidad")}>
                Usuarios
              </Link>
            </li>
            <li>
              <Button onClick={logOut}>Cerrar sesión</Button>
            </li>
          </ul>
        )}

        {!session?.role && (
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline">
              <Link href="/login" className={linkStyle("/login")}>
                Ingresar
              </Link>
            </Button>
            <Button>
              <Link href="/register" className={linkStyle("/register")}>
                Registrarse
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
