import { Notebook, NotebookPen, NotebookText } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-2">
          Cómo funciona La Biblioteca de babel?
        </h2>
        <p className="text-gray-600 mb-8">¡Es muy sencillo!</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <Notebook className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="font-semibold mb-2">Paso 1</h3>
            <p className="text-gray-600">Regístrate en la plataforma</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <NotebookPen className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="font-semibold mb-2">Paso 2</h3>
            <p className="text-gray-600">
              Busca los libros de tu preferencia, agrega la cantidad que desees
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <NotebookText className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="font-semibold mb-2">Paso 3</h3>
            <p className="text-gray-600">
              Compra los libros que escogiste sin complicaciones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
