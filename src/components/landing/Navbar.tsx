"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";

export function Navbar() {
  const [role, setRole] = useState<string | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Obtener el objeto de sesión desde el localStorage
    const session = localStorage.getItem("session");
    if (session) {
      const parsedSession = JSON.parse(session);
      setRole(parsedSession.role); // Establecer el rol del usuario
    }
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("session");
    localStorage.removeItem("isLoggedIn");
    setRole(null);
    router.push("/"); // Redirigir al inicio después de cerrar sesión
  };

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
        {role === "USER" && (
          <ul className="flex space-x-4">
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
              <Link href="/mi-perfil" className={linkStyle("/mi-perfil")}>
                Mi Perfil
              </Link>
            </li>
            <li>
              <Link href="/comunidad" className={linkStyle("/comunidad")}>
                Comunidad
              </Link>
            </li>
            <li>
              <Link href="/contactus" className={linkStyle("/contactus")}>
                Contacto
              </Link>
            </li>

            <li>
              <Button onClick={handleLogOut}>Cerrar sesión</Button>
            </li>
          </ul>
        )}

        {role === "ADMIN" && (
          <ul className="flex space-x-4">
            <li>
              <Link href="/inventario" className={linkStyle("/inventario")}>
                Inventario
              </Link>
            </li>
            <li>
              <Link href="/comunidad" className={linkStyle("/comunidad")}>
                Comunidad
              </Link>
            </li>
            <li>
              <Button onClick={handleLogOut}>Cerrar sesión</Button>
            </li>
          </ul>
        )}

        {!role && (
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
