"use client";
import Image from "next/image";

interface ServiceCardProps {
  imagen: string;
  titulo: string;
  descripcion: string;
}

export default function ServiceCard({ imagen, titulo, descripcion }: ServiceCardProps) {
  return (
    <article className="group bg-white rounded-2xl shadow-md overflow-hidden flex flex-col">
      <div className="relative h-48 w-full bg-red-100 flex items-center justify-center">
        <Image
          src={imagen}
          alt={titulo}
          fill
          className="object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <span className="text-[#C8102E] font-bold text-lg z-10 pointer-events-none">{titulo}</span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{descripcion}</p>

        <a
          href={`/contacto?servicio=${encodeURIComponent(titulo)}`}
          className="mt-4 inline-block text-center bg-[#C8102E] text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0"
        >
          Contáctanos
        </a>
      </div>
    </article>
  );
}
