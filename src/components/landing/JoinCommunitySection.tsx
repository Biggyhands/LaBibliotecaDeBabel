import { Glasses, BookmarkCheck, Users } from "lucide-react";

export function JoinCommunitySection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          ¡Únete a nuestra comunidad!
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <Glasses className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="font-semibold mb-2">¡Conviértete en un lector!</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-600">
              <li>Acceso a miles de libros digitales</li>
              <li>Préstamos extendidos hasta 30 días</li>
              <li>Recomendaciones personalizadas</li>
              <li>Participación en clubes de lectura</li>
              <li>Descuentos especiales en compras</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <BookmarkCheck className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="font-semibold mb-2">
              Conoce nuestro programa de afiliados
            </h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-600">
              <li>Comisiones por recomendaciones</li>
              <li>Acceso a contenido exclusivo</li>
              <li>Panel de análisis y estadísticas</li>
              <li>Materiales promocionales</li>
              <li>Soporte prioritario</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-16 h-16 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <Users className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="font-semibold mb-2">Únete a nuestro equipo</h3>
            <ul className="list-disc pl-4 space-y-2 text-gray-600">
              <li>Ambiente laboral dinámico</li>
              <li>Desarrollo profesional continuo</li>
              <li>Beneficios competitivos</li>
              <li>Horario flexible</li>
              <li>Trabajo remoto disponible</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
