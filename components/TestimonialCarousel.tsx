"use client";

import { useState, useEffect } from "react";

const testimonios = [
  {
    nombre: "María González",
    empresa: "Tienda El Rincón",
    texto: "Gracias al Centro de Negocios pude ordenar mis finanzas y duplicar mis ventas en 6 meses. El acompañamiento fue increíble.",
  },
  {
    nombre: "Carlos Pérez",
    empresa: "Cafetería Don Carlos",
    texto: "Los talleres de marketing digital me ayudaron a crear mi primera tienda online. Ahora vendo a toda la región.",
  },
  {
    nombre: "Valentina Rojas",
    empresa: "Estudio de Diseño VR",
    texto: "Me conectaron con financiamiento que no sabía que existía. Con ese apoyo pude comprar equipos y crecer mi equipo.",
  },
  {
    nombre: "Pedro Muñoz",
    empresa: "Constructora PM",
    texto: "Las asesorías en gestión fueron clave para que mi empresa superara la crisis. Muy recomendados.",
  },
];

export default function TestimonialCarousel() {
  const [actual, setActual] = useState(0);

  // Avanza automáticamente cada 5 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  const anterior = () => setActual((prev) => (prev - 1 + testimonios.length) % testimonios.length);
  const siguiente = () => setActual((prev) => (prev + 1) % testimonios.length);

  const t = testimonios[actual];

  return (
    <div className="relative max-w-2xl mx-auto px-4">

      {/* Tarjeta del testimonio */}
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center min-h-[220px] flex flex-col justify-between">
        <p className="text-gray-600 text-lg italic leading-relaxed">"{t.texto}"</p>
        <div className="mt-6">
          <p className="font-bold text-gray-800">{t.nombre}</p>
          <p className="text-sm text-[#C8102E]">{t.empresa}</p>
        </div>
      </div>

      {/* Botones anterior / siguiente */}
      <button
        onClick={anterior}
        aria-label="Testimonio anterior"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={siguiente}
        aria-label="Siguiente testimonio"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white border border-gray-200 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-50 transition-colors"
      >
        ›
      </button>

      {/* Puntos indicadores */}
      <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonios">
        {testimonios.map((_, i) => (
          <button
            key={i}
            onClick={() => setActual(i)}
            role="tab"
            aria-selected={i === actual}
            aria-label={`Testimonio ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === actual ? "bg-[#C8102E]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
