"use client";

import { useState, useEffect } from "react";

interface Faq {
  id: number;
  pregunta: string;
  respuesta: string;
}

export default function FaqAccordion() {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [abierto, setAbierto] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/faq")
      .then((res) => res.json())
      .then((data) => setFaqs(data));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq) => (
        <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setAbierto(abierto === faq.id ? null : faq.id)}
            aria-expanded={abierto === faq.id}
            className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center hover:bg-gray-50 transition-colors"
          >
            {faq.pregunta}
            <span className={`text-[#C8102E] text-xl transition-transform ${abierto === faq.id ? "rotate-45" : ""}`}>
              +
            </span>
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              abierto === faq.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
              {faq.respuesta}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
