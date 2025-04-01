import Image from "next/image";

export function BooksPreviewSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="w-full md:w-[400px] aspect-[4/3] bg-gray-200 rounded-lg shadow-md">
            {/* Placeholder para la primera imagen */}
          </div>

          <div className="w-full md:w-[400px] aspect-[4/3] bg-gray-200 rounded-lg shadow-md">
            {/* Placeholder para la segunda imagen */}
          </div>
        </div>
      </div>
    </section>
  );
}
