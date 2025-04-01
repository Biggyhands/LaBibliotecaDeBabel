export function HeroSection() {
  return (
    <section className="py-24 text-center bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-20 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12 text-gray-600"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold">La Biblioteca de Babel</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Explora un universo infinito de conocimiento a través de nuestros
            libros
          </p>
        </div>
      </div>
    </section>
  );
}
