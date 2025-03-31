import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="py-24 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">La Biblioteca de Babel</h1>
      </section>

      {/* How it works section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-2">
            Cómo funciona La Biblioteca de babel?
          </h2>
          <p className="text-gray-600 mb-8">¡Es muy sencillo!</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Paso 1</h3>
              <p className="text-gray-600">Regístrate en la plataforma</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Paso 2</h3>
              <p className="text-gray-600">
                Busca los libros de tu preferencia, agrega la cantidad que
                desees
              </p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Paso 3</h3>
              <p className="text-gray-600">
                Compra o renta los libros que escogiste sin complicaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join our community section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            ¡Únete a nuestra comunidad!
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">¡Conviértete en un lector!</h3>
              <p className="text-gray-600">Beneficios de ser lector</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">
                Conoce nuestro programa de afiliados
              </h3>
              <p className="text-gray-600">
                Beneficios del programa de afiliados
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold mb-2">Únete a nuestro equipo</h3>
              <p className="text-gray-600">
                Beneficios de ser parte del equipo de la tienda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author quote section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
            <div>
              <h3 className="font-semibold">Autor famoso</h3>
              <p className="text-gray-600">Frase autor famoso</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">X (Twitter)</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>

              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v8m4-4H8"
                  />
                </svg>
              </Link>

              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">YouTube</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>

              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Más sobre nosotros
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Contáctanos
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Best practices
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
